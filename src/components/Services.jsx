import React, { useRef, useEffect, useState } from 'react';

const Services = () => {
  const videoRef = useRef(null);
  const [isPinkVisible, setIsPinkVisible] = useState(false);
  const whiteCardRef = useRef(null);
  const pinkCardRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  // Scroll effect to show pink card and hide white card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPinkVisible(true);
          } else {
            setIsPinkVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (pinkCardRef.current) {
      observer.observe(pinkCardRef.current);
    }

    return () => {
      if (pinkCardRef.current) {
        observer.unobserve(pinkCardRef.current);
      }
    };
  }, []);

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <section className="min-h-screen px-6 bg-[#F5F5F0] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* White Card - Full screen */}
        <div 
          ref={whiteCardRef}
          className={`min-h-screen transition-all duration-700 ease-out ${
            isPinkVisible 
              ? 'opacity-0 -translate-y-20 pointer-events-none' 
              : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl min-h-[80vh]">
            <div className="grid md:grid-cols-2 gap-0 min-h-[80vh]">
              
              {/* Left side - Content */}
              <div className="p-16 md:p-20 lg:p-24 flex flex-col justify-center">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Get Results
                </div>
                <div className="text-8xl md:text-9xl lg:text-[8rem] font-bold text-black mb-4">
                  01
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                  Expertise
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  Social strategy
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-xl">
                  Slimme strategie. Sterke start.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                </p>
                <button className="group inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-all duration-300 text-lg">
                  Meer over social strategie
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {/* Right side - Tilted Video */}
              <div className="relative p-16 md:p-20 lg:p-24 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                <div className="transform rotate-3 transition-all duration-500 hover:rotate-0 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <video
                      ref={videoRef}
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
                        onClick={handleVideoPlay}
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

        {/* Pink Card - Popup that replaces white card on scroll */}
        <div 
          ref={pinkCardRef}
          className="relative"
        >
          <div 
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-out ${
              isPinkVisible 
                ? 'opacity-100 visible pointer-events-auto' 
                : 'opacity-0 invisible pointer-events-none'
            }`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl overflow-hidden shadow-2xl max-w-7xl w-full mx-6 transform transition-all duration-700 ease-out">
              <div className="grid md:grid-cols-2 gap-0">
                
                {/* Left side - Content */}
                <div className="p-16 md:p-20 lg:p-24 flex flex-col justify-center text-white">
                  <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">
                    Get Noticed
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Content creation
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    Content die opvalt en raakt.
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-8 text-lg">
                    We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.
                  </p>
                  <button className="group inline-flex items-center gap-2 bg-white text-pink-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 w-fit text-lg">
                    Meer over content creatie
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                
                {/* Right side - Illustration */}
                <div className="p-16 md:p-20 lg:p-24 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-white/10 rounded-3xl transform rotate-6 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
                      <svg className="w-48 h-48 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        <circle cx="12" cy="12" r="3" fill="white" stroke="none"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;