import s from './ChatMenuBtn.module.scss'


const ChatMenuBtn = ({isActive,handleClick}) => {
    
    return <button className={s.chat_menu_btn} onClick={handleClick} type="button">{ isActive? 'x' : "+"}</button>
}

export default ChatMenuBtn;