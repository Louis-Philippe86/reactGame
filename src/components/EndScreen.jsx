import skullIcone from '../assets/icons/skull.svg'
import dataScore from '../dataScore.json'
import {useState} from "react";
import {Link} from "react-router-dom";
import {useScore} from "../store/useScore.js";


export function EndScreen(){

    const{score} = useScore()
    const [name, setName] = useState("")
    const [scoreList, setScoreList] = useState(dataScore)

    function submitForm(event){
        event.preventDefault()
        const updatedScores = scoreList.map((item)=>(item))
        const newPlayer = {
            name : name,
            score : score
        }
        updatedScores.push(newPlayer)
        setScoreList(updatedScores)
        setName("")
    }


    return (
            <div className={"bg-info-subtle vh-100 vw-100 p-5"}>
                <div className={"w-50 m-auto d-flex justify-content-center align-items-center flex-column"}>
                    <img className={"w-20"} src={skullIcone} alt={"skull"}/>
                    <h2>Game Over</h2>
                    <span>Leaderboard</span>
                </div>
                <form
                    className={"form-label w-100 m-auto d-flex justify-content-center align-items-center flex-column"}
                    onSubmit={(e)=>submitForm(e)}>
                    <div className="form-group d-flex flex-row m-auto mt-5">
                        <input
                            type="text"
                            className="form-control w-100 me-2"
                            aria-describedby="emailHelp" placeholder="Entrez votre nom.."
                            value={name}
                            onChange={(e)=> setName(e.target.value)}/>
                        <button
                            type="submit"
                            className="btn btn-light"
                            disabled={(name.length < 3)}
                            >Envoyer</button>
                    </div>
                </form>
                <div className={"rounded-3 bg-info w-50 m-auto mt-3 h-50 overflow-y-auto"}>

                    {
                        scoreList.map((item)=> (
                        <div className={"d-flex flex-column border-bottom align-items-start p-3"}>
                            <span className={"fw-bold"}>{item.name}</span>
                            <span>Score : {item.score}</span>
                        </div>
                    ))
                    }
                </div>
                <Link to={'/'} className={"btn btn-primary position-fixed bottom-0 mb-5 w-25 translate-middle-x start-50"}>Retour</Link>
            </div>
    )
}