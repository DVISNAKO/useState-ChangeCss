import React, { useEffect, useState } from 'react';
import './MyModal.css'

const MyModal = () => {

    const [modal, setModal] = useState(true);

    const visible = modal ? '' : 'hidden'; 

    useEffect(() => {
        setModal(false)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setModal(true)
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div className='page'>
            <div><button onClick={() => setModal(!modal)}>MODAL</button></div>
            <div className={`modal__wrapper ${visible}`}>
                <div className='modal__body'><span onClick={() => setModal(!modal)}>X</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga quisquam consequuntur eaque rerum voluptate molestias dolores adipisci, 
                provident incidunt minus. A, ipsum placeat ratione iure iste 
                harum quaerat laboriosam natus.</div>
            </div>
            
        </div>
    );
};

export default MyModal;