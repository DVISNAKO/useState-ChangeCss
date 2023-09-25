import React, { useState } from 'react';
import './Box.css';

const Box = () => {
  const [blue, setBlue] = useState(true);
  const [visible, setVisible] = useState(true);
  const [color, setColor] = useState(true);
  const [bord, setBord] = useState(true);

  const boxClass = blue ? 'wrapper blue' : 'wrapper pink';
  const specialClass = visible ? '' : 'hidden';
  const newColor = color ? '' : 'new__color';
  const newBorder = bord? '' : 'new__border';

  return (
    <div className="box">
    <button onClick={() => setBord(!bord)}>change Border</button>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      <div className={`wrapper ${boxClass} ${specialClass} ${newColor} ${newBorder}`}>My Box</div>
      <button onClick={() => setBlue(!blue)}>Change BG</button>
      <button onClick={() => setColor(!color)}>change Color</button>
    </div>
  );
};

export default Box;