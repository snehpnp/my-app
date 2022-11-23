import React,{useEffect,useState} from 'react';

const User = () => {

const [count,setCount]=useState(0)
const [data,setData]=useState(100)


useEffect(()=>{
    console.log(Math.random());
},count)
    return (
        <>
            <h1>useMemo vs useEffect</h1>
            <h3>Count {count}</h3>
            <h3>Data {data}</h3>

            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
            <button onClick={()=>{setData(data+1)}}>Update Data</button>


        </>
    );
}

export default User;
