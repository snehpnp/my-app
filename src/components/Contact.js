import React from 'react';
import {useParams} from 'react-router-dom'

const Contact = () => {
    const params = useParams()
    const {name} =params
    return (
        <div>
           <h1>Welcome to Contact...</h1>
           <br />
           <h3>Welcome {name}...</h3>
    
        </div>
    );
}

export default Contact;
