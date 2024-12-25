import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import Logo from "../assets/Logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const createUser = async (authData) => {
    const { uid, displayName, email } = authData.user;
    await setDoc(doc(db, "users", uid), {
      email,
      name: displayName,
      lastSeen: new Date().toLocaleString(),
    });
  };

  const handleLogin = async () => {
    try {
      const userData = await signInWithPopup(auth, new GoogleAuthProvider());
      await createUser(userData);
      localStorage.setItem("user", JSON.stringify(userData.user)); // Store user info in localStorage
      toast.success("Login successful!");
      const redirectPath = localStorage.getItem("redirectPath") || "/CartPage";
      navigate(redirectPath);
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 w-96 transform transition-all duration-500 hover:scale-105">
        <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-purple-400">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl  text-purple-600 mb-6">SignIn to TrendVibe</h1>
        <button
          onClick={handleLogin}
          className="bg-purple-400 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-purple-500 transition-all duration-300 transform hover:scale-105"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
