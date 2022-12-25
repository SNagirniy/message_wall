import { NavLink } from 'react-router-dom';
import s from './userDetails.module.scss';
import sprite from '../../images/sprite.svg';

const UserDetails = ({ currentUser, setCurrentChat, rightColumnHandler }) => {
  const { email, members } = currentUser;
  const name = currentUser.name ? currentUser.name : currentUser.title;
  const avatar = currentUser.avatar
    ? currentUser.avatar
    : `https://avatars.dicebear.com/api/initials/:${name}.svg`;

  return (
    <div className={s.details_cont}>
      <button onClick={rightColumnHandler} className={s.hide_column_btn}>
        <svg className={s.hide_column_btn_icon}>
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </button>
      <div className={s.chanel_avatar_cont}>
        <img className={s.chanel_avatar} src={avatar} alt="avatar"></img>
        <button className={s.add_avatar_btn}>
          <svg className={s.add_avatar_icon}>
            <use href={sprite + '#add-avatar'}></use>
          </svg>
        </button>
      </div>
      <div className={s.info_cont}>
        <p className={s.info}>Name: {name}</p>
        <p className={s.info}>Email: {email}</p>
      </div>
      {members && (
        <div className={s.info_cont}>
          <h3 className={s.title}>Members:</h3>
          <ul>
            {members.map(member => {
              const { _id, name, avatar } = member;
              return (
                <li className={s.member_info_item} key={_id}>
                  <NavLink
                    className={s.member_info_link}
                    onClick={() => setCurrentChat(member)}
                    to={`/messages/${_id}`}
                  >
                    <div className={s.avatar}>
                      <img
                        src={
                          avatar
                            ? avatar
                            : `https://avatars.dicebear.com/api/initials/:${name}.svg`
                        }
                        alt="avatar"
                      />
                    </div>
                    <h3 className={s.member_title}>{name}</h3>
                  </NavLink>
                  <button className={s.remove_button}>Remove</button>
                </li>
              );
            })}
          </ul>
          <p>add new member + </p>
        </div>
      )}
      ;
    </div>
  );
};

export default UserDetails;
