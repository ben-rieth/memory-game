import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const LoadingContainer = styled.div` 
    margin-top: 20vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    & > h1 {
        color: white;
        font-family: "Spongebob";
        letter-spacing: 3px;
    }
`;

const LoadingScreen = (props) => {
    const { level } = props;

    return (
        <LoadingContainer>
            <h1>Loading Level {level}</h1> 
            <LoadingSpinner />
        </LoadingContainer>
    );
}

export default LoadingScreen;