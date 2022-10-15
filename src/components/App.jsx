import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Login from "Pages/Login";
import Register from "Pages/Register";
import Layout from "./Layout";
import Chat from "Pages/Chat";
import Messages from "Views/Messages/Messages";
import { useEffect, useState } from "react";
import PublickRoute from "./Routes/PublickRoute/PublickRoute";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";

import operations from "APIService/service";






export const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([{_id: 123, name: "john"}])


  const setUserData = (data) => {

    const user = {
      id: data.id,
      name: data.name,
      avatar: data.avatar
    }
    
    setUser(user);
    setContacts(data.contacts)
}


  const getCurrentUser = async () => {
    const data = localStorage.getItem('user');
    
    if (!data) { setIsLogedIn(false) } else {
      try {
      const user = JSON.parse(data);
        const currentUsr = await operations.currentUser(user);

        setUserData(currentUsr)
        currentUsr && setIsLogedIn(true)
      
      
    } catch (error) {
      setIsLogedIn(false)
    }}
  
  };

  const handleAddContact = (item) => {
  setContacts((prev)=> [...prev, item])
}


  useEffect(()=> getCurrentUser, [])





  
  return (
    <>
      
      <Suspense fallback={<p>Загружаем...</p>}>
        
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="login" element={<PublickRoute isLoggedIn={isLogedIn}><Login setUser={setUserData} toggleLogin={setIsLogedIn} /></PublickRoute>} />
            <Route path="register" element={<PublickRoute isLoggedIn={isLogedIn}><Register setUser={setUserData} toggleLogin={setIsLogedIn}/></PublickRoute>} />
           {user && <Route path="messages" element={<PrivateRoute isLoggedIn={isLogedIn}><Chat userId={user.id} addToContacts={handleAddContact} contacts={contacts}/></PrivateRoute>} >
              <Route path="/messages/:chatId" element={<Messages/> } />
            </Route>}
            <Route path="*" element={<Navigate to="/register" />} />
          </Route>
          </Routes>
        
       </Suspense>
    
    </>
   
  );
};
