import React from 'react';
import grid from '../assets/grid.png'; 

const Aitutor = () => {
  const headingStyle = {
    background: 'linear-gradient(to right, #FF8C8C, #9B4F9F)', 
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline',
    fontSize: '3rem', 
    zIndex: 10,
    lineHeight: '1.2',
    textAlign: 'center',
  };

  return (
    <div
      id="aitutor"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white py-8 px-4 overflow-hidden"
      style={{ 
        backgroundImage: `url(${grid})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        zIndex: 1,
      }}
    >
      <h1 className="font-extrabold mt-4 mb-2" style={headingStyle}>
        AI TUTOR
      </h1>
      <h2 className="text-lg font-medium text-white z-10 mb-4">
        Ask Your Doubts to AI Tutor
      </h2>


      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-lg">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/-EifZ5CBBRpL7b-qrAz5k"
            width="100%"
            style={{ height: '100%', minHeight: '500px', border: 'none' }}
            frameBorder="0"
            title="Chatbot"
          />
        </div>
      </div>
    </div>
  );
}

export default Aitutor;