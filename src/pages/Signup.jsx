import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { toast, Toaster } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [display_name, setDisplay_name] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    console.log("loading2...");

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          display_name: display_name,
        },
      },
    });
    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Sign up successful");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center">
      <Toaster position="top-left" richColors />
      <div className="flex flex-col gap-4 justify-center items-center">
        <img src={logo} alt="log" />
        <h1 className="text-3xl text-purple-400">Sign Up</h1>
      </div>

      <form
        className="max-w-lg mx-auto flex flex-col gap-3 p-4 border rounded-lg shadow-md text-sm sm:text-xl"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Username</span>
          <input
            type="text"
            name="display_name"
            value={display_name}
            onChange={(e) => {
              setDisplay_name(e.target.value);
            }}
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="MrEkwunife"
            required
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="johnDoe@gmail.com"
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
          type="submit"
          className="mt-2 w-full bg-purple-500 text-white py-1 rounded hover:bg-purple-600 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="text-lg">
        Already have account?{" "}
        <Link to="/login" className="text-purple-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
