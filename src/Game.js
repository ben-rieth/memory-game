import {useState} from 'react';

import Card from './components/Card';

function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [lostGame, setLostGame] = useState(false);

  const addPointToScore = () => {
    setScore(score + 1);
  }

  const setNewBestScore = () => {
    setBestScore(score);
  }

  const nextLevel = () => {
    setLevel(level + 1);
  }

  const gameLost = () => {
    setLostGame(true);
    setNewBestScore();
  }

  const startNewGame = () => {
    setLostGame(false);
    setScore(0);
    setLevel(1);
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <Card />
    </div>
  );
}

export default Game;
