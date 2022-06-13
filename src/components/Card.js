import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #26B9C8;
    width: clamp(175px, 20vw, 250px);
    border-radius: 10px;

    & > img {
        margin: auto;
        width: clamp(150px, 15vw, 200px);
        min-height: 200px;
        object-fit: contain;
    }

    & > p {
        color: white;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`;

const Card = (props) => {
    const {
        image,
        caption,
        onClick,
        onSecondClick
    } = props;

    const [clicked, setClicked] = useState(false);

    const onCardClick = () => {
        if (clicked) {
            onSecondClick()
        } else {
            setClicked(true);
            onClick();
        }   
    }

    return (
        <CardContainer onClick={onCardClick}>
            <img src={image} alt={caption} />
            <p>{caption}</p>
        </CardContainer>
    );
}

export default Card;