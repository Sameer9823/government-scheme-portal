import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/13190480/13190480-sd_640_360_30fps.mp4" type="video/mp4" />
       
      </video>

      {/* Overlay Content */}
      <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-60 text-center px-4">
        <div className="card w-full max-w-lg glass">
          <div className="card-body">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to the Government Scheme Portal
            </h1>
            <p className="text-lg md:text-xl text-white mb-4">
              Stay updated with real-time information on government schemes, policies, and news to support and empower citizens.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
