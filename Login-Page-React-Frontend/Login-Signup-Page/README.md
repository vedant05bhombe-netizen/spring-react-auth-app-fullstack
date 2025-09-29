# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



import React, { useState } from 'react';
import image from "./download.svg";
import image1 from "./facebook-concept-with-avatars.png";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  async function HandleSignup() {
    if (!username || !password) {
      alert("USERNAME AND PASSWORD SHOULD NOT BE EMPTY");
      return;
    }

    setloading(true);
    try {
      const URL = "http://localhost:8080/auth/login"; // <-- quotes fixed
      const postData = { username, password };

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      };

      const response = await fetch(URL, options);
      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        navigate("/dashboard"); // redirect after login
      } else {
        alert(data.message || "Login failed");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setloading(false);
    }
  }

  return (
    <div className='parent'>
      <div><img className='image2' src={image1} alt="bg" /></div>

      <div className='mini'>
        <div className='container'>
          <div className='Main'>
            <div className='main'>
              <div><img src={image} alt="logo" /></div>

              <div className='buttons'>
                <div>
                  <input
                    className='input1'
                    type='text'
                    placeholder='Phone number, username or email'
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </div>

                <div className='input2'>
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <div>
                  <div className='divbut2'>
                    <button
                      disabled={!username || !password || loading}
                      onClick={HandleSignup}
                      className='but2'
                    >
                      {loading ? "Logging in..." : "LOG IN"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="divider"><span>OR</span></div>

              <div className='signup'>
                Don't have an account? 
                <Link className='home-link' to="/Signup">
                  <button className='but3'>Sign up</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
