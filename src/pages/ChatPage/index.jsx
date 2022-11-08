import React from "react";

const ChatPage = () => {
   return (
      <div>
         <Chat />
      </div>
   )
};

const Chat = () => {
   return (
      <div>
         <Messages />
         <AddMessageForm />
      </div>
   )
}

const Messages = () => {
   const messages = [1, 2, 3, 4];
   return (
      <div style={{ height: '400px', overflowY: 'auto', margin: '10px' }}>
         {messages.map(m => <Message />)}
         {messages.map(m => <Message />)}
         {messages.map(m => <Message />)}
         {messages.map(m => <Message />)}
      </div>
   )
}

const Message = () => {
   const message = {
      url: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      author: 'Soa',
      text: 'hello pyado'
   }

   return (
      <div>
         <img src={message.url} style={{ height: '30px' }} /> <b>{message.author}</b>
         <br />
         {message.text}
         <hr />
      </div>
   )
}


const AddMessageForm = () => {
   return (
      <div>
         <div>
            <textarea></textarea>
         </div>
         <div>
            <button>Send</button>
         </div>
      </div>
   )
}

export default ChatPage;