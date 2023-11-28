import React from 'react'
//import { Footer } from 'flowbite-react';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer className = "Footer_component" style={{color: props.mode==='dark'?'white':'#042743'}}>
        © 2023 Swopnil Parajuli. All rights reserved.
    </footer>
  )
}
