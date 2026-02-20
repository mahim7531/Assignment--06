import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleRegister=async(e)=>{
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      alert("Registration successful");
      navigate("/");
    }catch(err){
      alert(err.message);
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <button>Register</button>
      </form>

      <p>Already have account? <Link to="/login">Login</Link></p>
    </div>
  );
}