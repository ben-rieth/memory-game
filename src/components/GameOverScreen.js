import styled from 'styled-components';

const GameOverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & > h2 {
        font-size: 2rem;
    }

    & > h2, button {
        font-family: "Spongebob";
        color: white;
        letter-spacing: 3px;
    }

    & > button {
        background-color: #26B9C8;
        color: white;
        border-radius: 10px;
        padding: 15px 40px;
        cursor: pointer;
        font-size: 1.5rem;
        border: none;

        &:hover {
            transform: scale(1.05);
            background-color: white;
            color: #26B9C8;
        }
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