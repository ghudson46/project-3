import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

// Sets user name and room name when user signs on
function Join(props) {
  // const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const { user, isAuthenticated } = useAuth0();

  let nickname; 

  if (isAuthenticated && !user.given_name) {
    nickname = user.nickname.replace(/[ ,.]/g, "");
  } else if (isAuthenticated && user.given_name) {
    nickname = user.given_name;
  }
  
  return (
    isAuthenticated ? (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join A Room</h1>
        <div>
          <p>welcome, {nickname}</p>
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!nickname || !room) ? e.preventDefault() : null} to={`/chat?name=${nickname}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join Room</button>
        </Link>
      </div>
    </div>
    ) :
    (
      <h1>User is not authenticated</h1>
    )
  );
}

export default Join