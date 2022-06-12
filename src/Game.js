import {useState, useEffect} from 'react';
import uniqid from 'uniqid';

import Card from './components/Card';

function Game() {

  const generateCards = () => {
    let nextLevelCards = [];
    const numCards = level * 2;

    for (let num of [...Array(numCards).keys()]) {
      nextLevelCards.push(
        {
          content: num.toString(),
          id: uniqid()
        }
      );
    }

    return nextLevelCards;
  }

  const [score, setScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [lostGame, setLostGame] = useState(false);
  const [cards, setCards] = useState(generateCards());

  //this effect moves to the next level once all cards are guessed
  useEffect(() => {
    if (levelScore === cards.length) {
      nextLevel();
    }
  });

  const addPointToScore = () => {
    setScore(score + 1);
    setLevelScore(levelScore + 1);
  }

  const setNewBestScore = () => {
    setBestScore(score);
  }

  const nextLevel = () => {
    setLevel(level + 1);
    setLevelScore(0);
    setCards(generateCards());
  }

  const gameLost = () => {
    setLostGame(true);
    setNewBestScore();
  }

  const startNewGame = () => {
    setLostGame(false);
    setScore(0);
    setLevelScore(0);
    setLevel(2);
  }

  //this function randomizes the order of the cards each time a card is clicked
  const shuffleCards = () => {
    setCards(cards.sort((a, b) => 0.5 - Math.random()));
  }

  const onCardClick = () => {
    addPointToScore();
    shuffleCards();
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <p>Score: {score}</p>
      <p>Level: {level-1}</p>
      <p>Best Score: {bestScore}</p>

      {lostGame ?
        <div>
          <h2>Game Over</h2>
          <button onClick={startNewGame}>Play Again</button>
        </div> : 
        cards.map((card) => {
          return <Card 
                    key={card.id} 
                    content={card.content} 
                    onClick={onCardClick}
                    onSecondClick={gameLost} />
          })
        }
    </div>
  );

  
}

export default Game;
