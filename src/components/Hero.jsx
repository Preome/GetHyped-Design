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

        {/* Tilted Boxes Grid - LARGER SIZE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Box 1 - Video Box (Autoplay) */}
          <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'rotate(2deg)' }}>
            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
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
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
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
            <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
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
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
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

        {/* First Mission Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed font-medium">
            Wij maken content die opvalt. Die blijft hangen. 
            Die jouw doelgroep raakt en jouw merk in beweging brengt. 
            Snel, krachtig en energiek.
          </p>
        </div>

        {/* Two Column Section: Image + Text */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left side - Image (small) and Button below */}
            <div className="order-2 md:order-1 md:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img 
                  src="/images/image1.png" 
                  alt="Get Hyped agency workspace"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Button below image with arrow and text */}
              <div className="text-left">
                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-base">
                  Leer ons kennen
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-2">Ontdek hoe wij jou kunnen helpen</p>
              </div>
            </div>

            {/* Right side - Text - takes 4 columns */}
            <div className="order-1 md:order-2 md:col-span-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
                Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
                Nooit meer content zonder resultaat.
              </p>
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