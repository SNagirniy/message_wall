import { NavLink } from "react-router-dom";
import s from './contact.module.scss';
import operations from "../../APIService/service"
import { useState } from "react";



const Contact = ({setCurrentChat, contact, btn = false,isRoom = false, addToContacts }) => {
    const [added, setAdded] = useState(false)
    const { _id, name, avatar, title } = contact;

const userNickName = name? name : title



    const handleAddContact = async(id) => {
        const data = await operations.addContact(id);
        data&&addToContacts(data)
        data && setAdded(true)
    }
    
    return (
        <li className={s.item}>
            <NavLink onClick={()=> setCurrentChat(contact)} className={ ({isActive}) => isActive? s.active : s.contact} to={`/messages/${_id}`}>
                <div className={s.avatar}><img src={avatar ? avatar : `https://avatars.dicebear.com/api/initials/:${userNickName}.svg`} alt="avatar" /></div>
                <h3 className={s.contact_name}>{userNickName}</h3>
                {!isRoom && btn &&<button disabled={added} onClick={()=>handleAddContact(_id)} type="button" className={s.addBtn}>{added? '+' : 'Add'}</button>}
            </NavLink>
           
        </li>
    )
}

export default Contact;