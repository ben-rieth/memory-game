import { useState } from 'react';

const Card = (props) => {
    const {
        content,
        onClick
    } = props;

    const [clicked, setClicked] = useState(false);

    const onCardClick = () => {
        if (clicked) {
            console.log("You lose")
        } else {
            setClicked(true);
            onClick();
        }   
    }

    return (
        <div>
            <button onClick={onCardClick}>
                {content}
            </button>
        </div>
    );
}

export default Card;