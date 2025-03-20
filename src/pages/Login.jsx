import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { supabase } from "../lib/supabase";
import { toast, Toaster } from "sonner";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    email: email,
    password: password,
  });

  const login = async () => {
    setFormData({
      email: email,
      password: password,
    });

    console.log(formData);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: "/",
      },
    });
    if (error) {
      toast.error(error);
    }

    console.log(data);
  };

  return (
    <div className="min-h-screen gap-8 flex flex-col items-center justify-center">
      <Toaster />
      <div className="flex flex-col gap-4 justify-center items-center">
        <img src={logo} alt="log" />
        <h1 className="text-3xl text-purple-400">Login</h1>
      </div>

      <form
        className="max-w-lg mx-auto flex flex-col gap-3 p-4 border rounded-lg shadow-md text-sm sm:text-xl"
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="fuckersFuck@gmail.com"
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </label>

        <button
          className="mt-2 w-full bg-purple-500 text-white py-1 rounded hover:bg-purple-600 transition"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="text-lg">
        New Here?{" "}
        <Link to="/signup" className="text-purple-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
