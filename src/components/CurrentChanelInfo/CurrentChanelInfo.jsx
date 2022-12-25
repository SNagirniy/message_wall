import s from './CurrentChanelInfo.module.scss';

const CurrentChanelInfo = ({ rightColumnHandler, currentChat }) => {
  const { avatar, name, title, isRoom } = currentChat;

  return (
    <div onClick={rightColumnHandler} className={s.container}>
      <div className={s.avatar}>
        <img
          src={
            avatar
              ? avatar
              : `https://avatars.dicebear.com/api/initials/:${
                  name ? name : title
                }.svg`
          }
          alt="avatar"
        />
      </div>
      <div className={s.chanel_info}>
        <h3 className={s.name}>{name ? name : title}</h3>
        {isRoom && (
          <p
            className={s.members_count}
          >{`${currentChat.members.length} members`}</p>
        )}
      </div>
    </div>
  );
};

export default CurrentChanelInfo;
