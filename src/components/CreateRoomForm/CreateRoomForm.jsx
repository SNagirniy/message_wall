import { useState } from "react";
import operations from '../../APIService/service'
import s from "./CreateRoomForm.module.scss"

const CreateRoomForm = ({ contacts }) => {
    
    const [roomTitle, setRoomTitle] = useState("");
    const members = new Set();

    const resetFormState = () => {
        members.clear();
        setRoomTitle("")
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const room = { title: roomTitle, members: Array.from(members) }
            const res = await operations.createRoom(room)
            console.log(res)
        } catch (error) {
            console.log(error)
        } finally{ resetFormState();}
       
    };
    const handleClick = (id) => {
        const isAdded = members.has(id);
        if (isAdded) { members.delete(id) } else{members.add(id)}

    };


    return (
        <form className={s.roomForm} onSubmit={handleSubmit}>
            <input minLength={2}  maxLength={20} placeholder="Group title" className={s.input} onChange={(e) => setRoomTitle(e.target.value.trim())} type="text" value={roomTitle} />
            <ul className={s.list} role="group">
                {contacts.map(({ avatar, name, _id }) => {
                 return ( <li className={s.item} onClick={()=> handleClick(_id)} key={_id}>
                        <div className={s.avatar}><img src={avatar ? avatar : `https://avatars.dicebear.com/api/initials/:${name}.svg`} alt="avatar" /></div>
                        <h3 className={s.contact_name}>{name}</h3>
                    </li>)
                })}
            </ul>
            

            <button type='submit'>Create Room</button>
        </form>
    )



};



export default CreateRoomForm;


