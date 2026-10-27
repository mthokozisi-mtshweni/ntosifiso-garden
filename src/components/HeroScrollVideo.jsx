// // src/components/HeroScrollVideo.jsx
// import { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
// import { ArrowDown } from 'lucide-react';
// import '../styles/layout.css';

// export default function HeroScrollVideo() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

//   const fallbackImage = "src/assets/images/fallBack.png";

//   // 1. Track scroll
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // 2. Smoother spring physics for a more luxurious feel
//   const smoothProgress = useSpring(scrollYProgress, {
//     damping: 40,
//     stiffness: 60,
//     restDelta: 0.001
//   });

//   // 3. Refined Text Timings
  
//   // Phase 1: Welcome (Visible immediately, fades out by 25% scroll)
//   const introOpacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
//   const introY = useTransform(smoothProgress, [0, 0.25], [0, -50]);

//   // Phase 2: Outro (Appears at 60%, stays visible until the end)
//   const outroOpacity = useTransform(smoothProgress, [0.6, 0.75, 1], [0, 1, 1]);
//   const outroY = useTransform(smoothProgress, [0.6, 0.75], [50, 0]);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//     setPrefersReducedMotion(mediaQuery.matches);
//   }, []);

//   // 4. Interpolate video time with a slower lerp (0.05) so it doesn't jump
//   useAnimationFrame(() => {
//     const video = videoRef.current;
//     if (!video || !video.duration || !isVideoLoaded || prefersReducedMotion) return;

//     const targetProgress = smoothProgress.get();
//     const targetTime = targetProgress * video.duration;
    
//     const currentTime = video.currentTime;
//     const diff = targetTime - currentTime;

//     // Lower the multiplier (0.05 instead of 0.1) for a slower, smoother catch-up
//     if (Math.abs(diff) > 0.02) {
//       video.currentTime = currentTime + diff * 0.05;
//     }
//   });

//   const introVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 0.5 } }
//   };

//   return (
//     <section id="home" ref={containerRef} className="hero-scroll-container">
//       <div className="hero-sticky">
        
//         <video
//           ref={videoRef}
//           className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
//           src="/hero-video.mp4"
//           poster={fallbackImage}
//           muted
//           playsInline
//           preload="auto"
//           onLoadedMetadata={() => setIsVideoLoaded(true)}
//           onError={(e) => {
//             e.target.style.display = 'none';
//             setIsVideoLoaded(false);
//           }}
//         />

//         {!isVideoLoaded && (
//           <div 
//             className="hero-fallback-image"
//             style={{ backgroundImage: `url(${fallbackImage})` }}
//           />
//         )}

//         <div className="hero-overlay" />

//         {/* ── PHASE 1: Welcome Text ── */}
//         <motion.div 
//           className="hero-content-layer"
//           style={{ opacity: introOpacity, y: introY }}
//         >
//           <motion.div 
//             className="hero-text-box"
//             initial="hidden"
//             animate="visible"
//             variants={introVariants}
//           >
//             <span className="hero-subtitle">A Sanctuary in Mpumalanga</span>
//             <h1 className="hero-title-welcome">
//               Welcome to <br/>
//               <span className="italic">Ntosifiso Gardens</span>
//             </h1>
//           </motion.div>
//         </motion.div>

//         {/* ── PHASE 2: Outro Headings & Buttons ── */}
//         <motion.div 
//           className="hero-content-layer"
//           style={{ opacity: outroOpacity, y: outroY }}
//         >
//           <div className="hero-text-box">
//             <h2 className="hero-title-outro">
//               Your escape.<br />
//               <span className="italic">Your moments.</span>
//             </h2>
//             <p className="hero-desc">
//               Wander through 10 hectares of lush greenery, cool off by the pools, 
//               and create memories in a space built by the community.
//             </p>
//             <div className="hero-actions">
//               <a href="#day-visits" className="btn btn-gold">
//                 Explore Day Visits
//               </a>
//               <a href="#venue-hire" className="btn btn-outline">
//                 Plan Your Event
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div 
//           className="scroll-indicator"
//           style={{ opacity: introOpacity }}
//         >
//           <span className="scroll-text">Scroll to explore</span>
//           <div className="scroll-line">
//             <motion.div 
//               className="scroll-dot"
//               animate={{ y: [0, 24, 0], opacity: [1, 0.2, 1] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// src/components/HeroScrollVideo.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import '../styles/layout.css';

export default function HeroScrollVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2200&q=85";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // FIX: Tighter spring for less delay and immediate response
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,      // Reduced from 40 for less floaty feel
    stiffness: 120,   // Increased from 60 to snap to scroll faster
    restDelta: 0.001
  });

  const introOpacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const introY = useTransform(smoothProgress, [0, 0.25], [0, -50]);
  const outroOpacity = useTransform(smoothProgress, [0.6, 0.75, 1], [0, 1, 1]);
  const outroY = useTransform(smoothProgress, [0.6, 0.75], [50, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // iOS UNLOCK: Force the video to load and unlock, then pause immediately.
    const video = videoRef.current;
    if (video) {
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          video.pause(); 
          setIsVideoLoaded(true);
        }).catch(() => {
          console.log("iOS blocked autoplay. Showing fallback image.");
        });
      }
    }
  }, []);

  // Dedicated animation loop strictly for scrubbing
  useEffect(() => {
    let reqId;
    const video = videoRef.current;

    const scrubVideo = () => {
      if (video && video.readyState >= 2 && isVideoLoaded && !prefersReducedMotion) {
        // STRICT ENFORCEMENT: Keep the video paused so it doesn't auto-play
        if (!video.paused) {
          video.pause();
        }

        const targetProgress = smoothProgress.get();
        const targetTime = targetProgress * video.duration;
        
        const diff = targetTime - video.currentTime;
        
        // FIX: Increased from 0.1 to 0.5 for snappier tracking
        if (Math.abs(diff) > 0.02) {
          video.currentTime = video.currentTime + diff * 0.5;
        }
      }
      reqId = requestAnimationFrame(scrubVideo);
    };

    if (isVideoLoaded && !prefersReducedMotion) {
      reqId = requestAnimationFrame(scrubVideo);
    }

    return () => cancelAnimationFrame(reqId);
  }, [isVideoLoaded, prefersReducedMotion, smoothProgress]);

  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 0.5 } }
  };

  return (
    <section id="home" ref={containerRef} className="hero-scroll-container">
      <div className="hero-sticky">
        
        <video
          ref={videoRef}
          className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
          src="/hero-video.mp4"
          poster={fallbackImage}
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onLoadedMetadata={() => setIsVideoLoaded(true)}
          onError={(e) => {
            e.target.style.display = 'none';
            setIsVideoLoaded(false);
          }}
        />

        {!isVideoLoaded && (
          <div 
            className="hero-fallback-image"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        )}

        <div className="hero-overlay" />

        <motion.div 
          className="hero-content-layer"
          style={{ opacity: introOpacity, y: introY }}
        >
          <motion.div 
            className="hero-text-box"
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
            <span className="hero-subtitle">A Sanctuary in Mpumalanga</span>
            <h1 className="hero-title-welcome">
              Welcome to <br/>
              <span className="italic">Ntosifiso Gardens</span>
            </h1>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-content-layer"
          style={{ opacity: outroOpacity, y: outroY }}
        >
          <div className="hero-text-box">
            <h2 className="hero-title-outro">
              Your escape.<br />
              <span className="italic">Your moments.</span>
            </h2>
            <p className="hero-desc">
              Wander through 10 hectares of lush greenery, cool off by the pools, 
              and create memories in a space built by the community.
            </p>
            <div className="hero-actions">
              <a href="#day-visits" className="btn btn-gold">
                Explore Day Visits
              </a>
              <a href="#venue-hire" className="btn btn-outline">
                Plan Your Event
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          style={{ opacity: introOpacity }}
        >
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line">
            <motion.div 
              className="scroll-dot"
              animate={{ y: [0, 24, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}