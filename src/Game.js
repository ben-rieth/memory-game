import {useState, useEffect} from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';

import Card from './components/Card';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header'
import images from './components/images';

const GameBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

function Game() {

  const generateCards = (levelNum) => {
    let availableImages = [...images];
    let nextLevelCards = [];
    const numCards = (levelNum * 2) + 2;

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
      console.log("going to next level");
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
    setLevel(1);
    setCards(generateCards(1));
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
      <LoadingScreen level={level}/> : 
      <div>
        <Header score={score} level={level} bestScore={bestScore} />
        {lostGame ?
          <div>
            <h2>Game Over</h2>
            <button onClick={startNewGame}>Play Again</button>
          </div> : 
          <GameBoard>
            {cards.map((card) => {
              return <Card 
                        key={card.id} 
                        image={card.image}
                        caption={card.caption} 
                        onClick={onCardClick}
                        onSecondClick={gameLost} />
              })}
            </GameBoard>
          }
      </div>
  );

  
}

export default Game;
