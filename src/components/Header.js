import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > .scoreboard {
        display: flex;
        justify-content: space-around;
        align-items: center;

        & > p {
            border: 1px solid lightblue;
            padding: 10px;
            width: 15ch;
            text-align: center;
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