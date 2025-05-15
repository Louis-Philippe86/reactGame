
import './App.css'
import {Menu} from "./components/Menu.jsx";
import {useState} from "react";
import {Game} from "./components/Game.jsx";
import {EndScreen} from "./components/EndScreen.jsx";
import dataScore from "./dataScore.json";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./components/NotFoundPage.jsx";

function App() {

  const [inGame, setInGame] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(dataScore)


  function onPlay(){
    setInGame(true)
  }

  function onGameOver(timer){
    setGameOver(true)
    setInGame(false)
    setScore(timer)
  }

  function root(){
    if (inGame) return <Game onGameOver={onGameOver}></Game>
    if (gameOver) return <EndScreen score={score}></EndScreen>
    if (!inGame && !gameOver) return <Menu version={'0.0.1'} onPlay={onPlay}></Menu>
  }
  return(
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Menu/>}></Route>
          <Route path={"/game"} element={<Game/>}></Route>
          <Route path={"/gameOver"} element={<EndScreen/>}></Route>
          <Route path={"*"} element={<NotFoundPage/>}></Route>
        </Routes>
      </BrowserRouter>
      // root()
  )


}

export default App
