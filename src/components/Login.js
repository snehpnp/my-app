import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'


const Login = () => {
    
const login = ()=>{
    localStorage.setItem('login',true)
    navigate('/')
    console.log("true");
  
}
    const navigate =useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login){
            navigate('/')
        }
    })

    return (
        <>
      <label  htmlFor="">UserName</label><br />
      <input id='user' type="text" /><br /><br />
      <label htmlFor="">Password</label><br />
      <input id='password' type="text" /><br /><br />
      <button className='submit' onClick={login}   >Login</button>
      
      
            </>
      
    );
}

export default Login;
