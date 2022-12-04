import s from './contactsList.module.scss'
import Contact from 'components/Contact/Contact';





const ContactsList = ({setCurrentChat,items ,chatVisibility ,users, contacts, addToContacts }) => {

    
    const isAddBtn = (item) => {
        const showBtn = contacts.some(contact => contact._id === item._id);
        return !showBtn;
    };


    if (users && users.length === 0) { return <p>No matches foud</p> };

    if (users) {
        return <ul className={s.list}>
            {users.map((item) => {
            return <Contact setCurrentChat={setCurrentChat}  addToContacts={addToContacts} key={item._id} contact={item} btn={isAddBtn(item)} />
            })}
        </ul>
    }
    

    if (items.length === 0) { return <p>`{chatVisibility ? 'Chat list' : 'Contacts'} list is empty`</p> }
    

    return (
        
        <ul className={s.list}>
            {items.map((item) => {
                if (chatVisibility) { return <Contact setCurrentChat={setCurrentChat} isRoom={item.isRoom}  addToContacts={addToContacts} key={item._id} contact={item} btn={isAddBtn(item)} /> };
                return <Contact setCurrentChat={setCurrentChat} addToContacts={addToContacts} key={item._id} contact={item} />
            })}
        </ul>
    
    )
};

export default ContactsList;