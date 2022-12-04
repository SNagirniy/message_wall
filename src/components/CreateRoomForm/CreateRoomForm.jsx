import { useState } from "react";
import s from "./CreateRoomForm.module.scss";
import sprite from '../../images/sprite.svg'

const CreateRoomForm = ({createRoom, contacts }) => {
    
    const [roomTitle, setRoomTitle] = useState("");
    const [members, setMembers] = useState([]);

    

    const resetFormState = () => {
        setMembers([]);
        setRoomTitle("")
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const room = { title: roomTitle, members };
            createRoom(room);
           
        } catch (error) {

        } finally{ resetFormState()}
       
    };
    const handleClick = (id) => {
        if (members.some(el => el === id)) { setMembers((prev) => prev.filter(item => item !== id) ) } else { setMembers(prev => [...prev, id]) }
    };


    return (
        <form className={s.roomForm} onSubmit={handleSubmit}>
            <input required minLength={2}  maxLength={20} placeholder="Group title" className={s.input} onChange={(e) => setRoomTitle(e.target.value.trim())} type="text" value={roomTitle} />
            <div className={s.list} role="group">
                {contacts.map(({ avatar, name, _id }) => {
                    return (<label htmlFor={_id} className={s.item}  key={_id}>
                     <input className={s.item_input} type="checkbox" onChange={() => handleClick(_id)} name={name} id={_id} />
                     <div className={s.avatar}><img src={avatar ? avatar : `https://avatars.dicebear.com/api/initials/:${name}.svg`} alt="avatar" /></div>
                        <h3 className={s.contact_name}>{name}</h3>
                        <svg className={s.check_icon}>
                            <use href={sprite+'#icon-check'}></use>
                        </svg>
                    </label>)
                })}
            </div>
            

            <button type='submit'>Create Room</button>
        </form>
    )



};



export default CreateRoomForm;


