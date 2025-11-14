import React from 'react'
import urls from '../utils/urls.json'
import './index.css'

const Content = ({setUrl}) => {
  const allUrls = urls.memes;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-7 min-h-screen">
      {allUrls.map((item, index) => (
        <div
          onClick={()=> setUrl(item.url)}
          key={index}
          className="bg-white flex flex-col h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          {/* 🖼️ Image section (4 parts of height) */}
          <div className="flex-4 relative">
            <img
              src={item.url}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* 📝 Title section (1 part of height) */}
          <div className="flex-1 text-black flex items-center justify-center text-center font-semibold p-2 bg-gray-100 truncate">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;