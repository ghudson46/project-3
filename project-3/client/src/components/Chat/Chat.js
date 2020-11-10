// Dependencies
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

// Components
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

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
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;