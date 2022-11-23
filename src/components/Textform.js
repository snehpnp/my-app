import React, { useState } from 'react'
import '../App.css'
const Textform = (props) => {
  const textInput = (event) => {
    // let inp = document.getElementById('myBox')
    // let upperCase = inp.value.toUpperCase()
    setText(event.target.value)
  }
  const conclicktext = (e) => {
    e.preventDefault()

    let inp = document.getElementById('myBox')
    let upperCase = inp.value.toUpperCase()
    setText(upperCase)
  }

  const [text, setText] = useState('Enter text here')

  return (
    <>
      <form className="row g-3 mb-3">
        <label htmlFor="myBox" className="form-label">
          Example Text Area
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={textInput}
          id="myBox"
          rows="3"
        ></textarea>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => conclicktext(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default Textform
