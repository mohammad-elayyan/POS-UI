import { UserRoundCog } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../lib/data";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/userSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    const loggedInUser = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (loggedInUser) {
      console.log(loggedInUser);
      setError("");
      dispatch(setUser(loggedInUser));
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center bg-main">
      <img
        src="./login.png"
        alt="login cover"
        className="h-screen w-3/5 object-cover"
      />
      <div className="w-full flex flex-col gap-12 justify-center items-center">
        <UserRoundCog size={125} />

        <div className="w-96">
          <p className="text-base">Welcome back</p>
          <h1 className="text-3xl font-bold">Login to your account</h1>
        </div>

        <form className="flex flex-col gap-6 w-96" onSubmit={handleLogin}>
          {error && (
            <label className="text-red-500 text-sm text-center">{error}</label>
          )}
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 cursor-pointer size-4" />
              Remember me
            </label>
            <Link className="text-primary">Forgot password?</Link>
          </div>
          <button className="loginBtn">Login</button>
          <p className="text-sm text-center">
            Don't have an account? <Link className="text-primary">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
