import s from "./ChatInput.module.scss"
import { useState } from "react";


const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState('');

  

  const handleChange = (e) => {
    const { value } = e.target;
    setMsg(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   handleSendMsg(msg);

    setMsg('')
  }

    return (
    <div className={s.container}>
      <div className={s.picker_container}>
       
      </div>
      <form onSubmit={handleSubmit} className={s.form}>
          <textarea
          value ={msg}
          onChange={handleChange}
          type="text"
          placeholder="type your message here"
            className={s.input}
         
        />
          <button type="submit">
            Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;




