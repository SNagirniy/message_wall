import MainPageContainer from "components/MainPageContainer/MainPageContainer";
import SideBar from "Views/SideBar/SideBar";
import NavContainer from "Views/NavContainer/NavContainer";
import FormContainer from "components/FormContainer/FormContainer";
import FetchContctForm from "components/FetchContctForm/FetchContctForm";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { io } from "socket.io-client"
import { useEffect } from "react";

import useChat from '../hooks/useChat'


const Chat = ({userId,contacts, addToContacts}) => {

const [users, setUsers] = useState(null)
  const { user, messages, sendMessage, getAllMessages, setChatId } = useChat();


   
    return (
        
    <FormContainer>
        <NavContainer>
                <FetchContctForm setContacts={setUsers}/>
        </NavContainer>
        <MainPageContainer>
                <SideBar addToContacts={addToContacts} users={users} contacts={contacts} />
                <Outlet context={[user, messages, sendMessage, getAllMessages, setChatId ]}/>
        </MainPageContainer>
    </FormContainer>
    )
}

export default Chat