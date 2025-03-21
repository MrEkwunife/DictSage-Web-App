import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { supabase } from "../lib/supabase";
import { toast, Toaster } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    console.log(formData);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    try {
      if (error) {
        toast.error(error.message);
      }
      if (data) {
        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/home");
        }, 3000);
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen gap-8 flex flex-col items-center justify-center">
      <Toaster position="top-right" richColors />
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
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
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
