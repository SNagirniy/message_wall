import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = async credentials => {
  try {
    const res = await axios.post('users/signup', credentials);
    token.set(res.data.user.token);

    return res.data.user;
  } catch (error) {}
};

const loginUser = async credentials => {
  try {
    const res = await axios.post('users/login', credentials);
    token.set(res.data.user.token);

    return res.data.user;
  } catch (error) {}
};
const logoutUser = async () => {
  try {
    const res = await axios.post('users/logout');
    token.unset();
    return res.data.user;
  } catch (error) {}
};

const currentUser = async data => {
  token.set(data.token);

  try {
    const res = await axios.get('users/current');
    return res.data.user;
  } catch (error) {}
};

const fetchContacts = async query => {
  try {
    const res = await axios.get('contacts/find', {
      params: {
        query,
      },
    });
    return res.data;
  } catch (error) {}
};

const addContact = async id => {
  try {
    const res = await axios.patch('contacts/add', { contactId: id });
    return res.data.result;
  } catch (error) {}
};

const createRoom = async credentials => {
  try {
    const res = await axios.post('rooms/create', credentials);

    return res.data.room;
  } catch (error) {}
};

const getRooms = async () => {
  try {
    const res = await axios.get('rooms/get');
    return res.data.rooms;
  } catch (error) {}
};

const getChatUsers = async () => {
  try {
    const res = await axios.get('contacts/chat_users');
    return res.data.users;
  } catch (error) {}
};

const operations = {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  fetchContacts,
  addContact,
  createRoom,
  getChatUsers,
  getRooms,
};

export default operations;
