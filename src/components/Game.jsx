
import {ResourceMenu} from "./ResourceMenu.jsx";
import {useEffect, useState} from "react";
import {Quest} from "./Quest.jsx";
import {Board} from "./Board.jsx";
import {useResources} from "../store/useResources.js";
import {useQuest} from "../store/useQuest.js"
import {Link, useNavigate} from "react-router-dom";
import {useScore} from "../store/useScore.js";



export function Game(){

    // const [timer, setTimer] = useState(0)
    const [showValidedQuest, setShowValidedQuest] = useState(false)
    const navigate = useNavigate()

    const questList = useQuest((state)=> state.questList )
    const {decreaseMeat,meat,survivor,initializeResources}= useResources()
    const {initializeScore, incrementScore, score} = useScore()


    useEffect(() => {
        initializeScore()

        let timer = setInterval(()=>{
            incrementScore(1)
        }, 1000)

        return () => clearInterval(timer)
    }, []);

    useEffect(()=>{
        if (score%1 === 0 && score!==0){
            decreaseMeat(survivor)
        }
        if (meat <= 0){
            initializeResources()
            navigate('/gameOver')

        }
    },[score])

    function handleValidedQuest (){
        setShowValidedQuest(!showValidedQuest)
    }

    return(
        <>
            <ResourceMenu/>
            <Link to={'/'} className={"btn btn-primary position-fixed bottom-0 mb-5 w-25 translate-middle-x start-50"}>Retour</Link>
            <div className={"d-flex flex-column position-fixed top-0 start-0"}>
                <h1>{score}</h1>
                <div className=" m-4 p-3 bg-info-subtle rounded shadow w-100"
                     style={{maxWidth: '300px', zIndex: 1000}}
                     onClick={handleValidedQuest}>
                    <h5>Quêtes terminées</h5>
                    {
                        showValidedQuest && questList
                            .filter((item)=> item.questStatus === "completed")
                            .map((quest) =><Quest key={quest.id} quest={quest}/>)
                    }
                </div>
                <div className="m-4 p-3 bg-info-subtle rounded shadow w-100"
                     style={{maxWidth: '300px', zIndex: 1000}}>
                    <h5 className="mb-3 fw-bold">Quêtes en cours</h5>
                    {
                        questList
                            .filter((item)=> item.questStatus !== "completed")
                            .slice(0,3)
                            .map((quest) => <Quest key={quest.id} quest={quest}/>)
                    }
                </div>
            </div>
            <div className={"position-fixed top-50 start-50 translate-middle-y"}>
                <Board/>
            </div>
        </>
    )


}