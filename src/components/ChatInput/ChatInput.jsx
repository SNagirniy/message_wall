import s from "./ChatInput.module.scss"
import sprite from '../../images/sprite.svg';
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
          <button className={s.btn} type="submit">
            <svg className={s.btn_icon}>
              <use href={sprite+"#icon-paper-plane"}></use>
           </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatInput;




