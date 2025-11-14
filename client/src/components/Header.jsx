import React from 'react';
import burningHouse from '../assets/burningHouse.png';
import Editor from './Editor';


export default function Header() {
  return (
    <div >
      {/*  Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md">
        <h1 className="text-2xl font-bold text-yellow-400 tracking-widest">MemeCraft 🤪</h1>
        <div className="flex space-x-6 text-lg">
          <a href="#templates" className="hover:text-yellow-400 transition">Templates</a>
          <a href="#editor" className="hover:text-yellow-400 transition">Editor</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
        </div>
      </nav>

      {/*  Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center px-8 py-16 gap-10">
        {/* Left Text */}
        <div className="flex-1 max-w-lg text-center lg:text-left">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Create, Edit & Share <span className="text-yellow-400">Memes</span> Instantly!
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Unleash your creativity with our powerful meme editor — upload, customize, and download your masterpiece in seconds.
          </p>
          <a href="#editor" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition">
            Start Editing Now
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 h-full">
          <div
            id="main-editor"
            style={{
              width: "100%",
              height: "450px",
              border: "2px solid yellow",
              position: "relative",     
              overflow: "hidden",     
            }}
          ></div>

              <Editor />   {/* attaches to the above div */}
      </div>
        
        
      </section>
    </div>
  );
}
