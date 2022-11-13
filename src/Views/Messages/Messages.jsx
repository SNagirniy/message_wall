import s from './Messages.module.scss'
import ChatInput from 'components/ChatInput/ChatInput';
import ChatMessages from 'components/ChatMessages/ChatMessages';
import NavContainer from 'components/NavContainer/NavContainer';
import CurrentChanelInfo from 'components/CurrentChanelInfo/CurrentChanelInfo';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Messages = () => {
    const { chatId } = useParams();
    const[currentChat, setCurrentChat] = useState({avatar: '', name: ""})

    const [user, messages, sendMessage, setChatId, findCurrentChat] = useOutletContext();

    useEffect(() => {
        setChatId(chatId);
        const {avatar, name} = findCurrentChat(chatId);
        setCurrentChat({avatar, name})
    }, [chatId])

    
    
   

  

    return <div className={s.messages}>
        <NavContainer>
            <CurrentChanelInfo currentChat={currentChat} />
        </NavContainer>
        <ChatMessages id ={user.id} messages={messages} />
        <ChatInput handleSendMsg={sendMessage} />
        
    </div>
}

export default Messages;