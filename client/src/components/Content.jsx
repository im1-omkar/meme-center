import React, { useState } from 'react'
import urls from '../utils/urls.json'
import './index.css'



const Content = ({setUrl}) => {
  /**search function and logic */
  const [allUrls, setUrls] = useState(urls.memes);

  const handleSearch =(search)=>{

      if(search == ""){
        setUrls(urls.memes);
      }

      console.log("called")
      const filteredMemes = urls.memes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())
      );

      setUrls(filteredMemes);
  }

  return (
    <section id="content">
      <div className="flex flex-row justify-center "><input className="border border-white rounded-2xl w-3xs text-center h-10" type="text" placeholder='search for template' onChange={(e)=> handleSearch(e.target.value)}/></div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-7 min-h-screen">
      {allUrls.map((item, index) => (
        <div
          onClick={()=> {
            setUrl(item.url);

            const scrollToTop = () => {
              //scroll to top 
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            };

            scrollToTop();
          }}

          key={index}
          className="bg-white flex flex-col h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >

          <div className="flex-4 relative">
            <img
              src={item.url}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>


          <div className="flex-1 text-black flex items-center justify-center text-center font-semibold p-2 bg-gray-100 truncate">
            {item.title}
          </div>
        </div>

      ))}
    </div>
    </section>
  );
};

export default Content;