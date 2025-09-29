import React, { useState } from 'react';
import image from "./download.svg";

import { Link } from "react-router-dom";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import './Home'


const Signup = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('') 
  const navigate = useNavigate();




  async function HandleSignup() {
    if (!username || !password) {
        alert("USERNAME AND PASSWORD SHOULD NOT BE EMPTY")

        return;
      }
    try {
      const URL = `http://localhost:8080/auth/signup`;
      const postData = { username, password };



      const options = {
        method: 'POST',
        mode: "cors",

        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(postData)

      };
      console.log("fetching....")
      const response = await fetch(URL, options);

      console.log("Got response" + response)
      
      

      const data = await response.json();
      console.log("Got response" + JSON.stringify(data))

      if (response.ok) {
        console.log("logs are correct");
        navigate("/Home")
      }

    } catch (error) {

    }

  }


  return (
    <>
      <div className='parent'>
        <div className='mini'>
          <div className='container'>
            <div className='Main'>
              <div className='main'>
                <div><img src={image} /></div>

                <div className='buttons'>
                  <div><input onChange={(e) => setusername(e.target.value)
                  } className='input1' type='text' placeholder='Phone number , username or email' /></div>
                  <div className='input2'><input onChange={(e) => setpassword(e.target.value)} type='text' placeholder='Password' /></div>
                  <div>
                    <div className='divbut2'>
                      <button disabled={!username || !password || loading} onClick={HandleSignup} className='but2'>REGISTER</button>
                    </div>
                  </div>
                </div>

                <div className="divider"><span>OR</span></div>

                <div className='signup'>
                  Have an account
                </div>
                <div className='link'>
                  <Link className='home-link' to="/">
                    <button className='but4'>Login</button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
