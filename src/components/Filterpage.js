import React,{useState} from 'react';

const Filterpage = () => {

        const onchangeData = (e)=>{
            let data = document.getElementById('pan').value
            let data1 = data.toUpperCase().slice(0, 4)
            if(data1.length < 5){
                setText1(data1)
               
            }else{
                alert("only 4 letter")
            }
            
        }
        const [text1, setText1] = useState('')
    return (
        <>
           <h1>Welcome to filter page...</h1> 
        <br /><br />
           <h4>Pancard filter type</h4>
           <input value={text1} id='pan' type="text" onChange={()=>onchangeData()} /><br /><br />
           <button id='click'>Click</button><br /><br />
           <h6 id='output'></h6>
        </>
    );
}

export default Filterpage;
