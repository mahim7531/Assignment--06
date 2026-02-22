import { BrowserRouter,Routes,Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position="top-center" />

        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}