import React, { useState } from 'react';
import './MyBox.css';

const MyBox = () => {

    const [back, setBack] = useState(true);
    const [color, setColor] = useState(true);
    const [visible, setVisible] = useState(true);

    const newBackgroud = back ? '' : 'new__backgroud';
    const newColor = color ? '' : 'new__color';
    const toogleBlock = visible ? '' : 'hidden';

    return (
        <div className='wrapper'>
        <div className={`myBox ${newBackgroud} ${newColor} ${toogleBlock}`}>
                <h1>My Box</h1>
            </div>
            <button onClick={() => setBack(!back)}>Backgroud</button>
            <button onClick={() => setColor(!color)}>Color</button>
            <button onClick={() => setVisible(!visible)}>show block</button>
        </div>
    );
};

export default MyBox;