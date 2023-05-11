import React, { useState } from 'react';
import style from './input.module.css'
import send from './assets/send.png';
import mic from './assets/mic.png'
function InputBox({ sendMessage }) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [listening, setListening] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  }


  // const handleSend = () => {
  //   if (inputValue) {
  //     const newMessage = {
  //       type: 'sent',
  //       text: inputValue,
  //     };
  //     setMessages([...messages, newMessage]);
  //     setInputValue('');
  //     setTimeout(() => {
  //       const botResponse = {
  //         type: 'received',
  //         text: 'This is a bot response',
  //       };
  //       setMessages([...messages, botResponse]);
  //     }, 1000); // simulate bot response delay
  //   }
  // }
  const handleSend = () => {
    if (inputValue) {
      const userMessage = {
        type: 'sent',
        text: inputValue,
      };
      const botResponse = {
        type: 'received',
        text: 'This is a bot response',
      };
      setMessages([...messages, userMessage, botResponse]);
      setInputValue('');
    }
  };
  


  const handleMicClick = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setInputValue(speechToText);
    };
    recognition.onerror = (event) => {
      console.log('Speech recognition error occurred: ', event.error);
    };
  };


  return (
    // <div className={style.inputBox}>
    //   <div className={style.messages}>
    //     {messages.map((message, index) => (
    //       <div
    //         key={index}
    //         className={style.message + ' ' + style[message.type]}
    //       >
    //         {message.text}
    //       </div>
    //     ))}
    //   </div>
    <div className={style.inputBox}>
    <div className={style.messages}>
      <div className={style.userMessages}>
        {messages.filter((message) => message.type === 'sent').map((message, index) => (
          <div key={index} className={style.message + ' ' + style[message.type]}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={style.botMessages}>
        {messages.filter((message) => message.type === 'received').map((message, index) => (
          <div key={index} className={style.message + ' ' + style[message.type]}>
            {message.text}
          </div>
        ))}
      </div>
    </div>
      <div className={style.input}></div>
      <i className="fas fa-grin"></i>
      <input
        type="text"
        placeholder="Type a message"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <img src={mic} alt="Microphone"
        onClick={handleMicClick}

      />
      <img src={send} alt="Send" onClick={handleSend} />

    </div>
  );
}

export default InputBox;
