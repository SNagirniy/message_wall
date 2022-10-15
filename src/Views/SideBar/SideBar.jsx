import s from './SideBar.module.scss';
import ContactsList from 'components/ContactsList/ContactsList';

const SideBar = ({users,contacts, addToContacts}) => {
    return (
    <div className={s.sideBar}>
        <ContactsList addToContacts={addToContacts} users={users} contacts={contacts} />
    </div>)
}

export default SideBar;