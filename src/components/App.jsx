import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Login from "Pages/login";
import Register from "Pages/Register";

export const App = () => {
  return (
    <>
       <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={ <Register/>} />
          </Routes>

       </Suspense>
    
    </>
   
  );
};
