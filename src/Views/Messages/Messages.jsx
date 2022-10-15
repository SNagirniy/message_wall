import s from './Messages.module.scss'
import ChatInput from 'components/ChatInput/ChatInput';
import ChatMessages from 'components/ChatMessages/ChatMessages';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

const Messages = () => {
    const { chatId } = useParams();
    

    const [user, messages, sendMessage, getAllMessages, setChatId] = useOutletContext();

    useEffect(() => { setChatId(chatId)}, [chatId])

    
    
   

  

    return <div className={s.messages}>
        <ChatMessages id ={user.id} messages={messages} />
        <ChatInput handleSendMsg={sendMessage} />
    </div>
}

export default Messages;