import React from 'react';

// Emoji library
import ReactEmoji from 'react-emoji';

// Creates a message based on the user name and text inputed
const Message = ({ message: { text, user }, name }) => {
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
        <div className="messageContainer" style={{backgroundColor: 'lightblue', color: 'black', display: 'flex', justifyContent: 'flex-start'}}>
          <p className="sentText pr-10">{trimmedName}:</p>
          <div className="messageBox">
            <p className="messageText" style={{marginLeft: '5px'}}>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : 
        // Otherwhise, if message came from another user, renders the text in a different color and on other side of screen
        (
          <div className="messageContainer" style={{backgroundColor: 'lightgray', color: 'black', display: 'flex', justifyContent: 'flex-end'}}>
            <div className="messageBox">
              <p className="messageText" style={{marginRight: '5px'}}>{user}:</p>
            </div>
            <p className="sentText pl-10">{ReactEmoji.emojify(text)}</p>
          </div>
        )
  );
}

export default Message;