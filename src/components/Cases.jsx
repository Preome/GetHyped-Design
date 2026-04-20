import React, { useRef, useEffect, useState } from 'react';

const Cases = () => {
  const whiteCardRef = useRef(null);
  const greenVideoRef = useRef(null);
  const [isGreenVisible, setIsGreenVisible] = useState(false);

  // Auto-play green video
  useEffect(() => {
    if (greenVideoRef.current) {
      greenVideoRef.current.play().catch(error => {
        console.log('Green video auto-play prevented:', error);
      });
    }
  }, []);

  // Scroll effect - green card slides up and covers white card
  useEffect(() => {
    const handleScroll = () => {
      if (whiteCardRef.current) {
        const rect = whiteCardRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3) {
          setIsGreenVisible(true);
        } else {
          setIsGreenVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGreenVideoPlay = () => {
    const video = greenVideoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="bg-[#F5F5F0] relative min-h-screen">
      {/* White Card */}
      <div 
        ref={whiteCardRef}
        className={`min-h-screen flex items-center justify-center px-6 transition-all duration-700 ${
          isGreenVisible ? 'scale-95 opacity-30' : 'scale-100 opacity-100'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-16 md:p-20 lg:p-24 flex flex-col justify-center">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                
              </div>
              <div className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-black mb-4">
                04
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                Activation
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-center mb-8">
                <div>
                  <div className="text-7xl md:text-8xl font-bold text-black">50+</div>
                  <div className="text-xl font-semibold text-gray-800 mt-2">Campaigns</div>
                </div>
                <div>
                  <div className="text-7xl md:text-8xl font-bold text-black">100%</div>
                  <div className="text-xl font-semibold text-gray-800 mt-2">ROI focus</div>
                </div>
              </div>
              <button className="group inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-all duration-300 text-lg">
                Bekijk cases
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Green Card */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center px-6 transition-all duration-700 ease-out ${
          isGreenVisible 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-[#F5F5F0]"></div>
        
        <div className="relative max-w-7xl w-full mx-auto transform transition-all duration-700 delay-100">
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left side - Content */}
              <div className="p-16 md:p-20 lg:p-24 flex flex-col justify-center text-white">
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">
                 
                </div>
                <div className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-4">
                  04
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Cases
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Succesverhalen
                </h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold">50+</div>
                    <div className="text-lg font-semibold mt-2 opacity-90">Campaigns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold">100%</div>
                    <div className="text-lg font-semibold mt-2 opacity-90">ROI focus</div>
                  </div>
                </div>
                <button className="group inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 w-fit text-lg">
                  Bekijk cases
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {/* Right side - Tilted Video */}
              <div className="relative p-16 md:p-20 lg:p-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                <div className="transform rotate-3 transition-all duration-500 hover:rotate-0 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <video
                      ref={greenVideoRef}
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
                    
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100">
                      <button 
                        onClick={handleGreenVideoPlay}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
