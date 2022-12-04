import s from './ChatMenuBtn.module.scss'
import sprite from '../../images/sprite.svg'


const ChatMenuBtn = ({isActive,handleClick}) => {
    
    return <button className={s.chat_menu_btn} onClick={handleClick} type="button">
        <svg className={s.btn_icon}>
            <use href={isActive? sprite+'#icon-cross' : sprite+"#icon-users-alt"}></use>
        </svg>
    </button>
}

export default ChatMenuBtn;