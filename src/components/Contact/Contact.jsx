import { NavLink, useParams } from "react-router-dom";
import s from './contact.module.scss';
import operations from "../../APIService/service"
import { useState } from "react";


const Contact = ({chatId, contact, btn = false, addToContacts }) => {
    const [added, setAdded] = useState(false)
    const { _id, name, avatar } = contact;
   


    const handleAddContact = async(item) => {
        const data = await operations.addContact(item);
        data&&addToContacts(item)
        data && setAdded(true)
    }
    
    return (
        <li>
            <NavLink className={s.contact} to={`${_id}`}>
                <div className={s.avatar}><img src={avatar ? avatar : `https://avatars.dicebear.com/api/initials/:${name}.svg`} alt="avatar" /></div>
                <h3 className={s.contact_name}>{name}</h3>
                {btn &&<button disabled={added} onClick={()=>handleAddContact(contact)} type="button" className={s.addBtn}>{added? '+' : 'Add'}</button>}
            </NavLink>
           
        </li>
    )
}

export default Contact;