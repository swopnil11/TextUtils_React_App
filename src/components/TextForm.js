import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }


    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handleClick = ()=> {
        let newText = '';
        setText(newText)
    }


    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    }
    const handleOnChange = (event)=>{
        //  console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter(Boolean).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}