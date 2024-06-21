// import React from 'react'
import React , { useState } from 'react';
import PropTypes from 'prop-types'



export default function Textarea (props)  {


    
    const changeUpper=()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const changeLower=()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const changeClear=()=>{
        let newText = (" ")
        setText(newText)
    }

    const changeAlternate=()=>{
        if (text.split(" ")){
            let newText = text.charAt(0).toLocaleLowerCase() + text.slice(1)
            setText(newText)
        }
    }

    const onchangeUpper=(event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter your text here");
  return (
    <>
    <div className="container 1">
      <form>
        <h1>{props.heading}</h1>
        <div className="form-group my-10 ">
        <textarea className={`form-control bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} value={text} onChange={onchangeUpper} id="mybox" rows="8"></textarea>        
    </div>
      </form>
      <button className="btn btn-primary my-3 mx-1" onClick={changeUpper}>Upper Case</button>
      <button className="btn btn-primary my-3 mx-1" onClick={changeLower}>Lower Case</button>
      <button className="btn btn-primary my-3 mx-1" onClick={changeClear}>Clear</button>
      <button className="btn btn-primary my-3 mx-1" onClick={changeAlternate}>Alternate</button>

    </div> 
    <div className="container 2">
        <h1><u>Word & Letter Counter</u></h1>
        <p>Total Number of Letters are {text.length}</p>
        <p>Total Number of Words are {text.split(" ").length}</p>
        <h1><u>Preview</u></h1>
        <p>{text}</p>
    </div>
</>
  )
}


