import styled from 'styled-components';

const GameOverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > button {
        
    }
`;

const GameOverScreen = (props) => {
    const {onPlayAgainClick} = props;

    return (
        <GameOverContainer>
            <h2>Game Over</h2>
            <button onClick={onPlayAgainClick}>Play Again</button>
        </GameOverContainer>
    )
}

export default GameOverScreen;