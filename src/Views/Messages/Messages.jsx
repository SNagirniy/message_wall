import s from './Messages.module.scss'
import ChatInput from 'components/ChatInput/ChatInput';
import ChatMessages from 'components/ChatMessages/ChatMessages';
import NavContainer from 'components/NavContainer/NavContainer';
import CurrentChanelInfo from 'components/CurrentChanelInfo/CurrentChanelInfo';
import { useEffect, useState } from 'react';
import { useCurrentChat } from 'Pages/Chat';
import { v4 as uuidv4 } from 'uuid';

const Messages = () => {
 
  const [messages, setMessages] = useState([]);
  const {handleRightColumnShow, socket, user, currentChat } = useCurrentChat();
 
  

  useEffect(() => {
    const { _id, isRoom } = currentChat;
    const cred = { _id, isRoom: isRoom ? isRoom : false };
    socket.emit('get-msgs', cred);
  }, [currentChat._id]);

   useEffect(() => {
    socket.on('msgs-list', messages => {
      setMessages(messages);
    });
     
    socket.on('msg-recieve', message => {
      
      if (message.to === user.id && message.from === currentChat._id) {
        setMessages(prev => [...prev, message])  
      } else if (currentChat.isRoom && message.to === currentChat._id) {
        setMessages(prev => [...prev, message])
      }
    });
     return () => {
       socket.off('msgs-list');
       socket.off('msg-recieve')
    };
     
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

    
    
   

  

    return (
      <div className={s.messages}>
        <NavContainer>
          <CurrentChanelInfo
            currentChat={currentChat}
            rightColumnHandler={handleRightColumnShow}
          />
        </NavContainer>
        <ChatMessages id={user.id} messages={messages} />
        <ChatInput handleSendMsg={sendMessage} />
      </div>
    );
}

export default Messages;