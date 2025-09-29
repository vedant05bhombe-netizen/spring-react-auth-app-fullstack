import React , { useState} from 'react';
import image from "./download.svg";
import { useNavigate } from 'react-router-dom';
import image1 from "./facebook-concept-with-avatars.png";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [loading , setloading] = useState(false)
    const[render , setrender] = useState(false)
    const navigate = useNavigate();
  
  
  
  
    async function HandleSignup() {

       if (!username || !password) {
        alert("USERNAME AND PASSWORD SHOULD NOT BE EMPTY")

        return;
      } 
      
      try {
        const URL = `http://localhost:8080/auth/login`;
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
        

        const data = await response.json();
        if(response.ok){
            console.log("Got response" + JSON.stringify(data))
             navigate("/Home");
        }else{
          console.log('login failed')
        }
       
  
      } catch (error) {
         
         setrender(true)
        
  
      } finally{
         setloading(false)
      }
  
    }
  return (
    <>

  

    <div className='parent'>
      <div><img className='image2' src={image1} /></div>

      <div className='mini'>
        <div className='container'>
          <div className='Main'>
            <div className='main'>
              <div><img src={image} /></div>

              <div className='buttons'>
                <div>
                  <input
                  onChange={(e) => setusername(e.target.value)
                  }
                    className='input1'
                    type='text'
                    placeholder='Phone number, username or email'
                    
                  />
                </div>

                <div className='input2'>
                  <input onChange={(e) => { setpassword (e.target.value)}
              
                  }
                    type='password'
                    placeholder='Password'
                  />
                </div>
                 {render &&(
    <div className='alert'> <div className='txt'> Invalid Username or Password </div> </div>
  
   )}

                <div>
                  <div className='divbut2'>
                    <button disabled={!username || !password || loading} onClick={HandleSignup} className='but2'>LOG IN</button>
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
    </>
  );
};

export default Login;
