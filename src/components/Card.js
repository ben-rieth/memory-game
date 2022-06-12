import { useState } from 'react';

const Card = () => {

    const [clicked, setClicked] = useState(false);

    const onCardClick = () => {
        if (clicked) {
            console.log("You lose");
        } else {
            setClicked(true);
            console.log("good job")
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