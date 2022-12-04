/*import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const [currentChat, setCurrentChat] = useState({});
  const [room, setRoom] = useState(null);

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
    return () => {
      socket.off('msg-notify');
    };
  }, [socket]);

  socket.on('msg-recieve', message => {
    console.log(currentChat, message.from);
  });

  useEffect(() => {
    socket.on('msgs-list', messages => {
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    const { _id, isRoom } = currentChat;
    const cred = { _id, isRoom: isRoom ? isRoom : false };
    socket.emit('get-msgs', cred);
  }, [currentChat]);

  useEffect(() => {
    socket.on('new-room', room => setRoom(room));
  }, [socket]);

  const connectToRooms = arrRoomsIds => {
    socket.emit('connect_to_rooms', arrRoomsIds);
  };

  const createRoom = data => {
    socket.emit('create-room', data);
  };

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

  return {
    user,
    messages,
    sendMessage,
    currentChat,
    setCurrentChat,
    createRoom,
    room,
    setRoom,
    connectToRooms,
  };
}*/
