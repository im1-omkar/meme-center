import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import React, { useEffect } from 'react';
import Painterro from 'painterro';


function App() {
  const [url, setUrl] = useState(null);
  const ptr = useRef(null);

  useEffect(() => {
    ptr.current = Painterro({
      id: "main-editor",
      defaultTool: "brush",
      fullscreen: false,
      hiddenTools: ["fullscreen"],
      defaultImageSize: "container",
    });
  }, []);

  // When URL changes: load image
  useEffect(() => {
      ptr.current.show(url);
  }, [url]);

  // useEffect(() => {
  //   console.log("rendered");

  //   Painterro({

  //     id: "main-editor",               // attach to specific div
  //     defaultTool: "brush",
  //     fullscreen: false,               // force disable full-screen overlay
  //     hiddenTools: ["fullscreen"],     // hide fullscreen button
  //     defaultImageSize: "container",
      
      
  //   }).show(url);
  // }, [url]);

  return (
    <div className=" relative min-h-screen bg-gray-950 text-white font-sans">
      <Header></Header>
      <Content setUrl={setUrl}></Content>
      
    </div>
    
  )
}

export default App
