import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Login from "Pages/Login";
import Register from "Pages/Register";
import Layout from "./Layout";
import Chat from "Pages/Chat";

export const App = () => {
  return (
    <>
      <Layout>
       <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/messages' element={<Chat />} />
            <Route path="*" element={<Navigate to="/messages" />} />
          </Routes>

       </Suspense>
    </Layout>
    </>
   
  );
};
