import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

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

    return () => {
      socket.off('add-user');
    };
  }, []);

  useEffect(() => {
    socket.on('msg-notify', log => {
      console.log(log);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('msg-recieve', message => {
      setMessages(prev => [...prev, message]);
    });
  }, []);

  useEffect(() => {
    socket.on('msgs-list', messages => {
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    socket.emit('get-msgs', chatId);
  }, [chatId]);

  const sendMessage = msg => {
    socket.emit('send-msg', {
      to: chatId,
      msg,
    });
    setMessages(prev => [
      ...prev,
      {
        _id: uuidv4(),
        to: chatId,
        message: msg,
        from: user.id,
        createdAt: new Date(),
      },
    ]);
  };

  return { user, messages, sendMessage, setChatId };
}
