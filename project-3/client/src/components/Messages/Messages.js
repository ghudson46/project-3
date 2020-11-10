import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

// A container that renders every message
const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages" style={{backgroundColor: 'gray'}}>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;