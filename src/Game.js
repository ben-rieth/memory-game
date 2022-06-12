import {useState} from 'react';

import Card from './components/Card';

function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [lostGame, setLostGame] = useState(false);

  return (
    <div>
      <h1>Memory Game</h1>
      <Card />
    </div>
  );
}

export default Game;
