import { auth } from "../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const loginEmail = async(e)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,password);
      toast.success("Login successful");
      navigate("/");
    }catch(err){
      toast.error(err.message);
    }
  };

  const googleLogin = async()=>{
    try{
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth,provider);
      toast.success("Google login success");
      navigate("/");
    }catch(err){
      toast.error(err.message);
    }
  };

  const githubLogin = async()=>{
    try{
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth,provider);
      toast.success("GitHub login success");
      navigate("/");
    }catch(err){
      toast.error(err.message);
    }
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
         Firebase Authentication System
        </h2>

        <form onSubmit={loginEmail} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            onChange={e=>setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
            Login
          </button>
        </form>

        {/* Register button under login */}
        <Link to="/register">
          <button className="w-full mt-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 rounded-lg transition">
            Create new account
          </button>
        </Link>

        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={googleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg mb-3 transition"
        >
          Continue with Google
        </button>

        <button
          onClick={githubLogin}
          className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-2 rounded-lg transition"
        >
          Continue with GitHub
        </button>

      </div>
    </div>
  );
}