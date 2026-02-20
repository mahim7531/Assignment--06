import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export default function Home(){

  const handleLogout=async()=>{
    await signOut(auth);
  }

  return(
    <div>
      <h1>Home Page</h1>
      <p>You are logged in ✅</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}