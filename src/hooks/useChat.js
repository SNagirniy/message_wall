import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const [chatId, setChatId] = useState(null);

  const { current: socket } = useRef(
    io('http://localhost:5000', {
      query: {
        userId: `${user.id}`,
      },
    })
  );

  useEffect(() => {
    socket.emit('add-user', '');
  }, [socket]);

  useEffect(() => {
    socket.on('msg-notify', log => {
      console.log(log);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('msg-recieve', message => {
      setMessages(prev => [...prev, message]);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('msgs-list', messages => {
      setMessages(messages);
    });
  }, [socket]);

  const getAllMessages = () => {
    socket.emit('get-msgs', chatId);
  };

  useEffect(() => getAllMessages(), [chatId]);

  const sendMessage = msg => {
    socket.emit('send-msg', {
      to: chatId,
      msg,
    });
    getAllMessages();
  };

  return { user, messages, sendMessage, getAllMessages, setChatId };
}
