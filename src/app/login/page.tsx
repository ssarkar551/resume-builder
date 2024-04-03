"use client";

import Appwrite, { account } from "@/Appwrite";
import { OAuthProvider } from "appwrite";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-2xl font-bold">Social Login</h1>
      <div className="mt-5">
        <button className="flex justify-center items-center gap-2 border-2 border-slate-600 px-5 py-2 rounded-sm" 
        onClick={() => {
            account.createOAuth2Session(OAuthProvider.Google, "http://localhost:3000/dashboard","http://localhost:3000")
        }}
        >
          <FcGoogle size={30} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;