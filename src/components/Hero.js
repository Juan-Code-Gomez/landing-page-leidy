import React from 'react';


function Hero() {
  return (
    <section id="home" className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center text-white bg-hero-image">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Royella Resort</h1>
        <p className="text-xl mb-8">The best place to relax and enjoy your vacations</p>
        <a href="#booking" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</a>
      </div>
    </section>
  );
}

export default Hero;