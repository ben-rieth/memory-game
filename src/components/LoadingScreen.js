import styled from "styled-components";

const LoadingContainer = styled.div` 
    margin-top: 20vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoadingScreen = (props) => {
    const { level } = props;

    return (
        <LoadingContainer>
            <h1>Loading Level {level}</h1> 
        </LoadingContainer>
    );
}

export default LoadingScreen;