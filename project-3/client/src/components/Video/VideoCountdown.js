import React, { useState, useEffect } from 'react';

import io from 'socket.io-client'

const ENDPOINT = 'https://in-touch-chat.herokuapp.com/';

let socket;


function VideoCountdown() {

const [seconds, setSeconds] = useState(5);
const [color, setColor] = useState('red');
const [message, setMessage] = useState('Start video when timer hits 0');
const [isActive, setIsActive] = useState(false)

const handleClick = () => {
    setIsActive(!isActive);
}

const reset = () => {
    setSeconds(5);
    setIsActive(false)
}

useEffect(() => {
    while (seconds > 0) {
        let interval = null;
        if (isActive) {
            interval = setInterval(() =>{
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
    return () => clearInterval(interval);
    }
    setColor('green');
    setMessage('PLAY NOW!!!');
    setSeconds(null);
    setIsActive(false);
}, [isActive, seconds])

    return (
        <div>
            <h2 style={{color: color}}>{message}</h2>
            <h3>{seconds}</h3>
            <button onClick={handleClick}>{isActive ? 'Pause' : 'Start'} countdown</button>
        </div>
    )
}

export default VideoCountdown