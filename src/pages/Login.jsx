import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const googleProvider=new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider();

  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/");
    }catch(err){
      alert(err.message);
    }
  };

  const handleGoogle=async()=>{
    await signInWithPopup(auth,googleProvider);
    navigate("/");
  };

  const handleGithub=async()=>{
    await signInWithPopup(auth,githubProvider);
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <button>Login</button>
      </form>

      <br/>
      <button onClick={handleGoogle}>Login with Google</button>
      <br/>
      <button onClick={handleGithub}>Login with GitHub</button>

      <p>New user? <Link to="/register">Register</Link></p>
    </div>
  )
}