import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

// Welcomes the user and shows them who else is in the room.
const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h2>Chat with the other members of the room <span role="img" aria-label="emoji"></span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;