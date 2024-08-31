import React from 'react';
import sameer0101 from '../Assets/sameer0101.jpg';
import aditya0101 from '../Assets/aditya0101.jpg';
import arko0101 from '../Assets/arko0101.jpg';
import suyash0101 from '../Assets/suyash0101.jpg';
import arhaan0101 from '../Assets/arhaan0101.jpg';
//import AdityaImag from '../assets/AdityaImag.jpg';
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'; // Assuming you're using React Icons

const AboutUs = () => {
  return (
  <>
    <div id="aboutus" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About 10xCoders</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">What we provide</h3>
          <p className="mb-4">
          10xCoders is a premier platform dedicated to empowering individuals embarking on their tech journey. Whether you are a tech enthusiast just starting out, a first-year college student, or a recent high school graduate, 10xCoders provides tailored roadmaps and comprehensive resources to guide you through various technology streams, including Web Development, App Development, Web3, DevOps, Data Science, and AI/ML.
          </p>
          <p className="mb-4 hidden md:block">
          In addition to structured learning paths, 10xCoders offers invaluable pro tips for navigating the tech industry. This includes insights on coding platforms like Codeforces, CodeChef, HackerRank, LeetCode, and InterviewBit, along with advice on building a standout portfolio, skill assessments, and acquiring certifications. We also foster a vibrant community through Discord, Instagram influencers, and Telegram channels, providing a network for collaboration and support. Stay engaged with the latest events, hackathons, study jams, and open-source contributions, and seize opportunities for internships to accelerate your career in technology with 10xCoders.
          </p>
        </div>
      </div>
      <div>
      <h2 className='text-4xl font-bold text-center mb-12 mt-12'>Meet Our Team</h2>
      </div>


      <div className='flex flex-wrap justify-center gap-8'>
  <div className='bg-white shadow-md rounded-lg px-4 py-6 hover:bg-gray-300 transition duration-300'>
    <img src={sameer0101} alt="Sameer Yadav" className='rounded-full mx-auto h-32 w-32 mb-4 object-cover'/>
    <h2 className='text-black text-xl font-bold mb-2 text-center'>Sameer</h2>
    <div className='flex justify-center mt-4 space-x-4'>
      <a href="mailto:hisameer0026@gmail.com" className='text-blue-300 hover:underline'>
        <FiMail className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://www.linkedin.com/in/sameer-yadav-214a01282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-300 hover:underline'>
        <FiLinkedin className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://x.com/ysameer001?s=09" className='text-blue-300 hover:underline'>
        <FiTwitter className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
    </div>
  </div>

  <div className='bg-white shadow-md rounded-lg px-4 py-6 hover:bg-gray-300 transition duration-300'>
    <img src={aditya0101} alt="Sameer Yadav" className='rounded-full mx-auto h-32 w-32 mb-4 object-cover'/>
    <h2 className='text-black text-xl font-bold mb-2 text-center'>Aditya</h2>
    <div className='flex justify-center mt-4 space-x-4'>
      <a href="mailto:adityandmb@gmail.com" className='text-blue-300 hover:underline'>
        <FiMail className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://www.linkedin.com/in/adityakumarsingh2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-300 hover:underline'>
        <FiLinkedin className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://x.com/adityasingh7211?t=nGvD5gr_b0GG6ZoLJSN92Q&s=09" className='text-blue-300 hover:underline'>
        <FiTwitter className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
    </div>
  </div>

  <div className='bg-white shadow-md rounded-lg px-4 py-6 hover:bg-gray-300 transition duration-300'>
    <img src={arhaan0101} alt="Sameer Yadav" className='rounded-full mx-auto h-32 w-32 mb-4 object-cover'/>
    <h2 className='text-black text-xl font-bold mb-2 text-center'>Arhaan</h2>
    <div className='flex justify-center mt-4 space-x-4'>
      <a href="mailto:siddiqueearhaan@gmail.com" className='text-blue-300 hover:underline'>
        <FiMail className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://www.linkedin.com/in/arhaansiddiquee?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-300 hover:underline'>
        <FiLinkedin className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://x.com/ArhaanSiddique0?t=YqNdn1XZpqj7VAtLVZfW4A&s=09" className='text-blue-300 hover:underline'>
        <FiTwitter className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
    </div>
  </div>

  <div className='bg-white shadow-md rounded-lg px-4 py-6 hover:bg-gray-300 transition duration-300'>
    <img src={arko0101} alt="Sameer Yadav" className='rounded-full mx-auto h-32 w-32 mb-4 object-cover'/>
    <h2 className='text-black text-xl font-bold mb-2 text-center'>Arkadyuti</h2>
    <div className='flex justify-center mt-4 space-x-4'>
      <a href="mailto:arkadyutichaudhuri@gmail.com" className='text-blue-300 hover:underline'>
        <FiMail className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://www.linkedin.com/in/arkadyuti-chaudhuri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-300 hover:underline'>
        <FiLinkedin className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://x.com/CArkadyuti?t=EhNMtoWBLechuEkTrGg9dg&s=09" className='text-blue-300 hover:underline'>
        <FiTwitter className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
    </div>
  </div>

  <div className='bg-white shadow-md rounded-lg px-4 py-6 hover:bg-gray-300 transition duration-300'>
    <img src={suyash0101} alt="Sameer Yadav" className='rounded-full mx-auto h-32 w-32 mb-4 object-cover'/>
    <h2 className='text-black text-xl font-bold mb-2 text-center'>Suyash</h2>
    <div className='flex justify-center mt-4 space-x-4'>
      <a href="mailto:suyashjha147280@gmail.com" className='text-blue-300 hover:underline'>
        <FiMail className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://www.linkedin.com/in/suyash-jha-68ab6b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-300 hover:underline'>
        <FiLinkedin className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
      <a href="https://x.com/Suyash_8205?t=-vwskRr2GsVMpBYgZ52xAw&s=09" className='text-blue-300 hover:underline'>
        <FiTwitter className='inline-block text-4xl text-blue-300 hover:text-blue-500'/>
      </a>
    </div>
  </div>
</div>


    </div>
    
    
    </>
  );
};

export default AboutUs;