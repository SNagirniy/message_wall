import s from './SideBar.module.scss';
import ContactsList from 'components/ContactsList/ContactsList';
import FetchContactForm from 'components/FetchContctForm/FetchContactForm';
import NavContainer from 'components/NavContainer/NavContainer';
import ChatMenuBtn from 'components/ChatMenuBtn/ChatMenuBtn';
import CreateRoomForm from 'components/CreateRoomForm/CreateRoomForm';
import { useState } from 'react';

const SideBar = ({handleSetUsers, items ,users, contacts, addToContacts, setContacts, isChat, toggleIsChat }) => {
    
    const [menuBtnIsactive, setMenuBtnIsActive] = useState(false)

    const usersHandler = () => {
        toggleIsChat(!isChat);
        handleSetUsers(null)

        menuBtnIsactive && setMenuBtnIsActive(false)
    };

    const menuBtnHandler = () => setMenuBtnIsActive(!menuBtnIsactive)


    return (
        <div className={s.sideBar}>
            <NavContainer>
                <FetchContactForm setContacts={setContacts} users={users} />
            </NavContainer>
            <div className={s.view_nav}>
                <label className={`${s.label} ${isChat ? s.is_active : ''}`} htmlFor='chat'>
                    <input defaultChecked onChange={usersHandler} value={isChat} className={s.radio} id='chat' type="radio" name="users_list" />
                    <span>Chat</span>
                </label>
                <label className={`${s.label} ${!isChat ? s.is_active : ''}`} htmlFor="contacts">
                    <input onChange={usersHandler} value={!isChat} className={s.radio} id='contacts' type="radio" name="users_list" />
                    <span>Contacts</span>
                </label>
            </div>
           {!menuBtnIsactive && <ContactsList items={items} chatVisibility={isChat} addToContacts={addToContacts} users={users} contacts={contacts} />}
           {menuBtnIsactive && <CreateRoomForm contacts={contacts}/>}
            <ChatMenuBtn isActive={menuBtnIsactive} handleClick={menuBtnHandler} />
    </div>)
}

export default SideBar;