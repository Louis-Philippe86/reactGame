import barn from "../assets/icons/barn.svg";
import {Buttons} from "./Buttons.jsx";
import {Link} from "react-router-dom";



export function Menu({version, onPlay}){



    const subtitle = [
        "Construisez, développez, dominez.",
        "Chaque ressource compte, chaque choix a un prix.",
        "Du chaos à l’empire, un clic à la fois.",
        "Prenez le contrôle, imposez votre vision.",
        "Un monde à gérer, une destinée à écrire."
    ]
    function getRandomInt() {
        return Math.floor(Math.random() * 5);
    }

    function handleCredit(){
        alert('Created By LP')
    }



    return (
        <>
            <div className={"w-75"}>
                <img src={barn} alt={'logo'}/>
                <h1>Survive React</h1>
                <h3 className={" rotate-5 text-xl font-semibold text-blue-600/75 dark:text-blue-500/75"}>{subtitle[getRandomInt()]}</h3>
            </div>
            <div className="flex flex-col">
                <Link className={"btn btn-primary mb-2 mt-5 w-25 h-25 m-auto"} to={"/game"}>Jouer</Link>
                <Link className={"btn btn-primary mb-2 mt-2 w-25 h-25 m-auto"} to={"/gameOver"}>Scores</Link>
                <Buttons className={"btn btn-primary mb-2 mt-5 w-25 h-25 m-auto"} onClick={handleCredit} title={"Crédit"}></Buttons>
            </div>
            <span>v{version}</span>
        </>
    )
}