import MainPageContainer from "components/MainPageContainer/MainPageContainer";
import SideBar from "Views/SideBar/SideBar";
import FormContainer from "components/FormContainer/FormContainer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useChat from '../hooks/useChat'

const chatUsrs = [
{_id: "1", name: "chat1", avatar: null},{_id: "2", name: "chat2", avatar: null}, {_id: "6342ed233c199db289c36ff0", name: "user1", avatar: null}]




const Chat = ({contacts, addToContacts}) => {

 const [users, setUsers] = useState(null);
 const [chatList, setChatlist] = useState(chatUsrs)
 const [isChatVisible, setIsChatVisible] = useState(true)
    const { user, messages, sendMessage, setChatId } = useChat();
    

    const items = isChatVisible ? chatList : contacts;
    const findCurrentChat = (chatId) => {
        if (users) {
          return  users.find(user => user._id === chatId)
        } else{ return items.find(item => item._id === chatId)}
    }

    
    

   
    return (
        
    <FormContainer>
        <MainPageContainer>
                <SideBar isChat={isChatVisible} toggleIsChat={setIsChatVisible} addToContacts={addToContacts} handleSetUsers={setUsers} items={items} users={users} contacts={contacts} setContacts={setUsers} />
                <Outlet context={[user, messages, sendMessage, setChatId, findCurrentChat ]}/>
        </MainPageContainer>
    </FormContainer>
    )
}

export default Chat