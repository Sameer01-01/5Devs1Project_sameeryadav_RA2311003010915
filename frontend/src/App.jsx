import React from 'react';
import Navbar from './Components/Navbar';
//import AuthPage from './Components/AuthPage';
import Home from './Components/Home';
import Roadmap from './Components/Roadmap';
import Aboutus from './Components/Aboutus';
import Community from './Components/Community';
import Findevents from './Components/Findevents';
import Aitutor from './Components/Aitutor';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Roadmap />
      <Community />
      <Aitutor />
      <Findevents />
      <Aboutus />
      <Footer />
    </>
  );
}

export default App;