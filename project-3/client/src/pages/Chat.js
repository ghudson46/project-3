// Dependencies
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useAuth0 } from '@auth0/auth0-react'

// Components
import TextContainer from '../components/TextContainer/TextContainer';
import Messages from '../components/Messages/Messages';
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';

import './Chat.css'
import VideoContainer from "../components/Video/VideoContainer";

const ENDPOINT = 'https://in-touch-chat.herokuapp.com/';

// Create socket variable
let socket;

// Sets state
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useAuth0();

  // Runs once on initial render and each time location.search changes
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    // Updates state with inputed room name and user name
    setRoom(room);
    setName(name)

    // User joins the room they entered
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [location.search]);
  
  // componendtDidMount
  useEffect(() => {
    // Updates the messages each time a message is sent
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    // Uses room data to set users
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    isAuthenticated ? (
    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
    <div className="videoContainer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <VideoContainer />
      </div>
    <div className="outerContainer" style={{textAlign: 'center', border: '1px solid black', padding: '30px'}}>
     <InfoBar room={room} />
      <div className="container" style={{position: 'relative', bottom: '2rem', overflowY: 'auto', maxHeight: '20rem',}}>
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
    </span>
    ) :
    (
      <h1>User is not authenticated</h1>
    )
  );
}

export default Chat;