// Dependencies
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

// Components
import TextContainer from '../components/TextContainer/TextContainer';
import Messages from '../components/Messages/Messages';
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';
import Video from '../components/Video/Video';

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
    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
    <div className="videoContainer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Video />
      </div>
    <div className="outerContainer" style={{textAlign: 'center', border: '1px solid black', padding: '30px'}}>

      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
    </span>
  );
}

export default Chat;