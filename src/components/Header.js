import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    color: white;
    margin-top: 10px;

    & > h1, p {
        font-family: "Spongebob";
        letter-spacing: 2px;
    }

    & > .scoreboard {
        display: flex;
        align-items: center;
        gap: 20px;

        & > p {
            padding: 10px 0 5px;
            width: 16ch;
            text-align: center;
            font-weight: 500;
            border-bottom: 5px dashed #4AEDFF;
        }
    }
`;

const Header = (props) => {
    const {
        score,
        bestScore,
        level
    } = props;

    return (
        <HeaderContainer>
            <h1>Spongebob Memory Game</h1>
            <p>Get points by clicking on a character, but only click on each character once or you lose!</p>
            <div className="scoreboard">
                <p>Level: {level}</p>
                <p>Score: {score}</p>
                <p>High Score: {bestScore}</p>
            </div>
        </HeaderContainer>
    );
}

export default Header;