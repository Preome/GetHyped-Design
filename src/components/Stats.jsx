import React, { useRef, useEffect, useState } from 'react';

const Stats = () => {
  const whiteCardRef = useRef(null);
  const blueVideoRef = useRef(null);
  const [isBlueVisible, setIsBlueVisible] = useState(false);

  // Auto-play blue video
  useEffect(() => {
    if (blueVideoRef.current) {
      blueVideoRef.current.play().catch(error => {
        console.log('Blue video auto-play prevented:', error);
      });
    }
  }, []);

  // Scroll effect - blue card slides up and covers white card
  useEffect(() => {
    const handleScroll = () => {
      if (whiteCardRef.current) {
        const rect = whiteCardRef.current.getBoundingClientRect();
        // When white card is halfway up the screen, start showing blue card
        if (rect.top < window.innerHeight * 0.3) {
          setIsBlueVisible(true);
        } else {
          setIsBlueVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F5F5F0] relative min-h-screen">
      {/* White Card - Takes full screen */}
      <div 
        ref={whiteCardRef}
        className={`min-h-screen flex items-center justify-center px-6 transition-all duration-700 ${
          isBlueVisible ? 'scale-95 opacity-30' : 'scale-100 opacity-100'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-16 md:p-20 lg:p-24 flex flex-col justify-center">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                
              </div>
                <div className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-black mb-4">
                  03
                </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                Stats
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-center mb-8">
                <div>
                  <div className="text-7xl md:text-8xl font-bold text-black">10M+</div>
                  <div className="text-xl font-semibold text-gray-800 mt-2">Organische views</div>
                </div>
                <div>
                  <div className="text-7xl md:text-8xl font-bold text-black">30+</div>
                  <div className="text-xl font-semibold text-gray-800 mt-2">Merken geholpen</div>
                </div>
              </div>
              <button className="group inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-all duration-300 text-lg">
                Bekijk case studies
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Card - Slides up and covers white card */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center px-6 transition-all duration-700 ease-out ${
          isBlueVisible 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-[#F5F5F0]"></div>
        
        <div className="relative max-w-7xl w-full mx-auto transform transition-all duration-700 delay-100">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left side - Content */}
              <div className="p-16 md:p-20 lg:p-24 flex flex-col justify-center text-white">
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">
                  
                </div>
                <div className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-4">
                  03
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Data
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Meetbare resultaten
                </h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold">10M+</div>
                    <div className="text-lg font-semibold mt-2 opacity-90">Organische views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold">30+</div>
                    <div className="text-lg font-semibold mt-2 opacity-90">Merken geholpen</div>
                  </div>
                </div>
                <button className="group inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 w-fit text-lg">
                  Bekijk cases
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {/* Right side - Tilted Video */}
              <div className="relative p-16 md:p-20 lg:p-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                <div className="transform rotate-3 transition-all duration-500 hover:rotate-0 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <video
                      ref={blueVideoRef}
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
                        onClick={handleBlueVideoPlay}
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

      {/* Mission Section - Always visible below */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed font-medium">
              Wij maken content die opvalt. Die blijft hangen. 
              Die jouw doelgroep raakt en jouw merk in beweging brengt. 
              Snel, krachtig en energiek.
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 my-12">
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
              Nooit meer content zonder resultaat.
            </p>
          </div>

          <div className="text-center">
            <a 
              href="#" 
              className="inline-block px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Leer ons kennen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

  const handleBlueVideoPlay = () => {
    const video = blueVideoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

export default Stats;
