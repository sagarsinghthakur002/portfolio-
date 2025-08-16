"use client";


import { useState, useEffect } from 'react';

function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const percent = Number((currentProgress / scrollHeight).toFixed(2)) * 100;
        setCompletion(percent);
      }
    };


    //Event listener to track scroll progress
    window.addEventListener('scroll', updateScrollCompletion);
    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return completion;
}

export default useScrollProgress;

//This hook probably tracks how much the user has scrolled on the page — likely returning a percentage value--like sidebar 
