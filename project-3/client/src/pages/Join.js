import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

// Sets user name and room name when user signs on
function Join(props) {
  // const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const { user } = useAuth0();
  
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join A Room</h1>
        <div>
          {/* <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /> */}
          <p>welcome, {user.given_name}</p>
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!user.given_name || !room) ? e.preventDefault() : null} to={`/chat?name=${user.given_name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join