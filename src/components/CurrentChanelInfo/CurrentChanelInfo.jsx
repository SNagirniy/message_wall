import s from "./CurrentChanelInfo.module.scss"

const CurrentChanelInfo = ({ currentChat }) => {
    const { avatar, name } = currentChat;
    return (
       
            <div className={s.container}>
               <div className={s.avatar}><img src={avatar ? avatar : `https://avatars.dicebear.com/api/initials/:${name}.svg`} alt="avatar" /></div>
                <h3 className={s.name}>{name}</h3>
            </div>

    
    )
    
};

export default CurrentChanelInfo;