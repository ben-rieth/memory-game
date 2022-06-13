import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightblue;

    & > img {
        width: 100px;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
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