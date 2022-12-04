import s from './Messages.module.scss'
import ChatInput from 'components/ChatInput/ChatInput';
import ChatMessages from 'components/ChatMessages/ChatMessages';
import NavContainer from 'components/NavContainer/NavContainer';
import CurrentChanelInfo from 'components/CurrentChanelInfo/CurrentChanelInfo';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Messages = () => {
 
  const [messages, setMessages] = useState([]);

  const [socket, user, currentChat] = useOutletContext();

 

  useEffect(() => {
    const { _id } = currentChat;
    socket.on('msg-recieve', message => {
      console.log(message.from, _id)
      if (message.from === _id) {
         
        setMessages(prev => [...prev, message])
            
      }
    })
  }, [socket, currentChat]);
   
      
    

  useEffect(() => {
    socket.on('msgs-list', messages => {
      setMessages(messages);
    });
  }, [socket]);
    
     useEffect(() => {
    const { _id, isRoom } = currentChat;
    const cred = { _id, isRoom: isRoom ? isRoom : false };
    socket.emit('get-msgs', cred);
  }, [currentChat._id]);

    const sendMessage = msg => {
    socket.emit('send-msg', {
      to: currentChat._id,
      msg,
    });
    setMessages(prev => [
      ...prev,
      {
        _id: uuidv4(),
        to: currentChat._id,
        message: msg,
        from: user.id,
        createdAt: new Date(),
      },
    ]);
  };

    
    
   

  

    return <div className={s.messages}>
        <NavContainer>
            <CurrentChanelInfo currentChat={currentChat} />
        </NavContainer>
        <ChatMessages id ={user.id} messages={messages} />
        <ChatInput handleSendMsg={sendMessage} />
        
    </div>
}

export default Messages;