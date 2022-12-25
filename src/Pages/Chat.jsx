import MainPageContainer from 'components/MainPageContainer/MainPageContainer';
import SideBar from 'Views/SideBar/SideBar';
import FormContainer from 'components/PageWrapper/PageWrapper';
import RightColumn from 'Views/RightColumn/RightColumn';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import operations from '../APIService/service';
import { io } from 'socket.io-client';

const Chat = ({ contacts, addToContacts }) => {
  const [users, setUsers] = useState(null);
  const [chatList, setChatlist] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [isRightColumnShow, setIsRightColumnShow] = useState(false);

  const handleRightColumnShow = () => {
    setIsRightColumnShow(!isRightColumnShow);
  };

  ////socket logic
  const user = JSON.parse(localStorage.getItem('user'));
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
  }, []);

  useEffect(() => {
    socket.on('new-room', room => {
      setChatlist(prev => [...prev, room]);
      setRooms(prev => [...prev, room]);
    });
    return () => {
      socket.off('new-room');
    };
  }, []);

  useEffect(() => {
    const roomIds = rooms.flatMap(item => item._id);
    socket.emit('connect_to_rooms', roomIds);
  }, [rooms]);

  const createRoom = data => {
    socket.emit('create-room', data);
  };
  ////socket logic////

  const items = isChatVisible ? chatList : contacts;

  useEffect(() => {
    isChatVisible &&
      (async () => {
        const chatUsers = await operations.getChatUsers();
        const chatRooms = await operations.getRooms();

        chatRooms && setRooms(chatRooms);
        setChatlist(() => [...chatUsers, ...chatRooms]);
      })();
  }, [isChatVisible]);

  return (
    <FormContainer>
      <MainPageContainer>
        <SideBar
          setCurrentChat={setCurrentChat}
          createRoom={createRoom}
          isChat={isChatVisible}
          toggleIsChat={setIsChatVisible}
          addToContacts={addToContacts}
          handleSetUsers={setUsers}
          items={items}
          users={users}
          contacts={contacts}
          setContacts={setUsers}
        />
        <Outlet
          context={{ handleRightColumnShow, socket, user, currentChat }}
        />
        <RightColumn
          isColumnShow={isRightColumnShow}
          currentUser={currentChat}
          setCurrentChat={setCurrentChat}
          rightColumnHandler={handleRightColumnShow}
        />
      </MainPageContainer>
    </FormContainer>
  );
};

export default Chat;

export function useCurrentChat() {
  return useOutletContext();
}
