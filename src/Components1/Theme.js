import React from 'react';

const Theme = () => {
    function switchTheme(){
        let theme =  document.getElementById('switch').value
        document.getElementsByTagName("meta")[2].content = theme
        console.log("Theme",theme);
        
    }
    return (
        <>
        <h1>Theme</h1>
        <select id="switch" onChange={()=>switchTheme()}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        

    </select> 
        </>
    );
}

export default Theme;
