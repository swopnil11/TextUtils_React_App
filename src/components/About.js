//import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
    // )
    let myStyle = {
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'#042743':'white'
    }

    
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-2">About TextUtils</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong> - Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently; be it word count, character count or anything. 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong> - Free To Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        It is completely free to use. No credit cards required. Use as much as you want!!
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong> - Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        It is compatible with all of your favorite browsers.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
