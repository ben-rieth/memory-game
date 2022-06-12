import { useState } from 'react';

const Card = (props) => {
    const {
        addPoint
    } = props;

    const [clicked, setClicked] = useState(false);

    const onCardClick = () => {
        if (clicked) {
            console.log("You lose")
        } else {
            setClicked(true);
            addPoint();
        }   
    }

    return (
        <div>
            <button onClick={onCardClick}>
                Content
            </button>
        </div>
    );
}

export default Card;