import React, { useEffect } from 'react';
import Painterro from 'painterro';


const Editor = () => {

  useEffect(() => {
    console.log("rendered");

    Painterro({


      id: "main-editor",               // attach to specific div
      defaultTool: "brush",
      fullscreen: false,               // force disable full-screen overlay
      hiddenTools: ["fullscreen"],     // hide fullscreen button
      defaultImageSize: "container",
      
    }).show();
  }, []);

  return null;  // VERY IMPORTANT
};

export default Editor;
