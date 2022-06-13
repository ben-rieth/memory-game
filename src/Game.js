import {useState, useEffect} from 'react';
import uniqid from 'uniqid';

import Card from './components/Card';
import images from './components/images';

function Game() {

  const generateCards = (levelNum) => {
    let availableImages = [...images];
    let nextLevelCards = [];
    const numCards = levelNum * 2;

    for (let num of [...Array(numCards).keys()]) {
      let cardIndex = Math.floor(Math.random() * availableImages.length);

      nextLevelCards.push(
        {
          content: num.toString(),
          image: availableImages[cardIndex]["url"],
          caption: availableImages[cardIndex]["caption"],
          id: uniqid()
        }
      );

      availableImages.splice(cardIndex, 1);
      
    }

    return nextLevelCards;
  }

  const [score, setScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lostGame, setLostGame] = useState(false);
  const [cards, setCards] = useState(generateCards(1));
  const [loading, setLoading] = useState(false);

  //this effect moves to the next level once all cards are guessed
  useEffect(() => {
    if (levelScore === cards.length && level >= 1) {
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
    setCards(generateCards(level+1));
    loadTime();
  }

  const loadTime = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
    loadTime();
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
    loading ? 
      <h2>Loading</h2> : 
      <div>
        <h1>Memory Game</h1>
        <p>Score: {score}</p>
        <p>Level: {level}</p>
        <p>Best Score: {bestScore}</p>

        {lostGame ?
          <div>
            <h2>Game Over</h2>
            <button onClick={startNewGame}>Play Again</button>
          </div> : 
          cards.map((card) => {
            return <Card 
                      key={card.id} 
                      image={card.image}
                      caption={card.caption} 
                      onClick={onCardClick}
                      onSecondClick={gameLost} />
            })
          }
      </div>
  );

  
}

export default Game;
