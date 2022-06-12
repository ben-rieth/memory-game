import { useState } from 'react';

const Card = (props) => {
    const {
        content,
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
        <div>
            <button onClick={onCardClick}>
                {content}
            </button>
        </div>
    );
}

export default Card;