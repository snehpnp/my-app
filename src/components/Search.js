import React from 'react';

const Search = () => {

    const searchdata = ()=>{
        const inputData = document.getElementById('inpData')
        const pureData = inputData.value
        console.log(inputData);
        const googleLink = "https://www.google.com/search?q="+pureData
        window.open(googleLink)
        console.log(googleLink);
    }


    return (
        <>
          <h1>Search :-</h1>
          <input id='inpData' type="text" />
          <button className='btn-dark' id='btn1' onClick={searchdata} >Submit</button>
        </>
    );
}

export default Search;
