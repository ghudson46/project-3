import React from 'react';

// Emoji library
import ReactEmoji from 'react-emoji';

// Creates a message based on the user name and text inputed
const Message = ({ message: { text, user }, name, profile }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  // User validation
  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }



  return (
      // If local user sent the message message, renders the text inputed and the user's name
    isSentByCurrentUser
      ? (
        <div className="messageContainer" style={{display: 'flex', justifyContent: 'flex-start', borderRadius: '2rem', paddingLeft: '2rem', margin: '1rem', width: '75%', float: 'left', textAlign: 'left'}}>
          {/* <p className="sentText pr-10">{trimmedName})</p> */}
          <img src={profile.picture} alt={profile.name} style={{borderRadius: '50%', height:'2.5rem', width: '2.5rem', marginTop: '.6rem', marginRight: '1rem'}}/>
      
          <div className="messageBox" style={{backgroundColor: 'lightblue', padding: '.1rem 2rem .1rem 1rem', borderRadius: '2rem'}}>
            <p className="messageText" style={{marginLeft: '5px'}}>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : 
        // Otherwhise, if message came from another user, renders the text in a different color and on other side of screen
        (
          <div className="messageContainer" style={{display: 'flex', justifyContent: 'flex-end', borderRadius: '2rem', paddingRight: '2rem', margin: '1rem', width: '55%', float: 'right'}}>
            <div className="messageBox" style={{backgroundColor: 'lightgray', padding: '.1rem 2rem .1rem 1rem', borderRadius: '2rem'}}>
            <p className="sentText pl-10">{ReactEmoji.emojify(text)}</p>
            </div>
            {user === 'admin' && <img src='https://shanghai-date.com/uploads/g/t/t/h/q2t34kjldqrqv0pl7ihh.png' alt={user.name} style={{borderRadius: '50%', height: '2.5rem', width: '2.5rem', marginTop: '.6rem', marginRight: '-1.5rem', marginLeft: '1rem'}}/> }
            {user !== 'admin' && <div style={{backgroundColor: 'orange', padding: '1rem .5rem 0 .5rem', fontWeight: '600', borderRadius: '50%', height: '2.5rem', width: '2.5rem', marginTop: '.6rem', marginRight: '-1.5rem', marginLeft: '1rem'}}>{user.charAt(0).toUpperCase()}</div>}
            
            {/* <p className="messageText" style={{marginLeft: '5px'}}>({user}</p> */}
          </div>
        )
  );
}

export default Message;