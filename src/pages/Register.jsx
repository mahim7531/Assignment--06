import { useState } from "react";
import { auth } from "../firebase/firebase.config.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if(password.length < 6){
      toast.error("Password must be 6+ characters");
      return;
    }

    try{
      const result = await createUserWithEmailAndPassword(auth,email,password);

      await updateProfile(result.user,{
        displayName:name
      });

      toast.success("Account created successfully!");
      navigate("/");
    }
    catch(err){
      toast.error(err.message);
    }
  };

  return (
    <form
  onSubmit={handleRegister}
  className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto space-y-4"
>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
    Register
  </h2>

  <input
    type="text"
    placeholder="Name"
    onChange={e => setName(e.target.value)}
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />

  <input
    type="email"
    placeholder="Email"
    onChange={e => setEmail(e.target.value)}
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />

  <input
    type="password"
    placeholder="Password"
    onChange={e => setPassword(e.target.value)}
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />

  <button
    type="submit"
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition transform hover:scale-105"
  >
    Register
  </button>
</form>
  );
}