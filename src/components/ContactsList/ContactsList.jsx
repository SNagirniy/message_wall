import s from './contactsList.module.scss'
import Contact from 'components/Contact/Contact';




const ContactsList = ({ users, contacts, addToContacts }) => {
    const items = users ? users : contacts;
    const showBtn = users ? true : false;

    if (users && items.length === 0) { return <p>No matches foud</p> };
    if(items.length === 0) {return <p>Contact list is empty</p>}

    return (
        
        <ul className={s.list}>
            {items.map(item => <Contact addToContacts={addToContacts} key={item._id} contact={item} btn={ showBtn} /> )}
        </ul>
    
    )
};

export default ContactsList;