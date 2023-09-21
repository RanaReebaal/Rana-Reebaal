"use client"

import React, { useEffect, useState } from 'react';
import One from './One';

const LoadingScreen = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate a 10-second delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <center className='dark:bg-black'>
        {!showContent ? (
          <center>
            <div className="loader-3"></div>
          </center>
        ) : (
          <One />

        )}
      </center>
    </>
  );
};

export default LoadingScreen;
