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