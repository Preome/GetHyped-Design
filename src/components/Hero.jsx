import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRefs = {
    video1: useRef(null),
    video2: useRef(null)
  };

  // Auto-play videos when component mounts
  useEffect(() => {
    // Play video 1
    if (videoRefs.video1.current) {
      videoRefs.video1.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        // Most browsers require user interaction first
        // The video will still have a play button overlay
      });
    }
    
    // Play video 2
    if (videoRefs.video2.current) {
      videoRefs.video2.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  const handleVideoPlay = (videoId) => {
    const video = videoRefs[videoId].current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
            Get Hyped. Get Noticed.<br />
            Get Results.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Klaar met gokken op content die niets oplevert?
          </p>
        </div>

        {/* Tilted Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1 - Video Box (Autoplay) */}
          <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'rotate(2deg)' }}>
            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group">
              <video
                ref={el => videoRefs.video1.current = el}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                <source src="/videos/video1.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              {/* Pause/Play button overlay - appears on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <button 
                  onClick={() => handleVideoPlay('video1')}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                <p className="bg-black/50 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
                  🎬 Brand Story
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 - Colored Box */}
          <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'rotate(-2deg)' }}>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <div className="w-full h-full flex items-center justify-center text-white text-center p-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">Creative</h3>
                  <p className="text-base opacity-90">Strategy First</p>
                  <div className="mt-6 w-12 h-0.5 bg-white/50 mx-auto"></div>
                  <p className="mt-4 text-sm">Innovative solutions for modern brands</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 - Video Box (Autoplay) */}
          <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'rotate(1deg)' }}>
            <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group">
              <video
                ref={el => videoRefs.video2.current = el}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                <source src="/videos/video2.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              {/* Pause/Play button overlay - appears on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <button 
                  onClick={() => handleVideoPlay('video2')}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                <p className="bg-black/50 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
                  🎥 Product Showcase
                </p>
              </div>
            </div>
          </div>

          {/* Box 4 - Colored Box */}
          <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'rotate(-1deg)' }}>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <div className="w-full h-full flex items-center justify-center text-white text-center p-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">Results</h3>
                  <p className="text-base opacity-90">Data Driven</p>
                  <div className="mt-6 w-12 h-0.5 bg-white/50 mx-auto"></div>
                  <p className="mt-4 text-sm">Measurable growth & ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-20">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;