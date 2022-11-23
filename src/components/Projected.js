import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Projected = (props) => {
    const {Component}  = props
    const navigate =useNavigate();

    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })

    return (
        <>
            <Component />
        </>
    );
}

export default Projected;
