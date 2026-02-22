import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { toast } from "react-toastify";

export default function Home(){
  const {user,logout} = useContext(AuthContext);

  const handleLogout = async()=>{
    await logout();
    toast.info("Logged out successfully");
  };

  return(
   <div className="flex  items-center justify-between bg-indigo-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
    Welcome {user?.displayName || "User"}
  </h2>
  
  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105"
  >
    Logout
  </button>
</div>
  );
}