import s from "./CurrentChanelInfo.module.scss"

const CurrentChanelInfo = ({ currentChat }) => {
    const { avatar, name, title } = currentChat;
    return (
       
            <div className={s.container}>
               <div className={s.avatar}><img src={avatar ? avatar : `https://avatars.dicebear.com/api/initials/:${name? name : title}.svg`} alt="avatar" /></div>
                <h3 className={s.name}>{name? name : title}</h3>
            </div>

    
    )
    
};

export default CurrentChanelInfo;