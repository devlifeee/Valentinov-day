import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti'; 
import './App.css';

// Компонент для плавающих сердечек на фоне
const FloatingHearts = () => {
  return (
    <div className="hearts-container">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="heart-bg"
          initial={{ 
            opacity: 0, 
            y: '110vh', 
            x: Math.random() * 100 + 'vw' 
          }}
          animate={{ 
            opacity: [0, 1, 0], 
            y: '-10vh',
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            delay: Math.random() * 10 
          }}
          style={{ position: 'fixed', zIndex: 5, fontSize: Math.random() * 20 + 15 + 'px' }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};


const FinalSurprise = () => {
  const [showText, setShowText] = useState(false);

  const launchHeartConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4d6d', '#ff758f', '#c9184a']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4d6d', '#ff758f', '#c9184a']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

   
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      scalar: 2,
      shapes: ['heart']
    });


    setShowText(true);
  };

  return (
    <motion.div className="surprise-container">
      {!showText && (
        <>
          <p className="surprise-text">И ещё кое-что...</p>
          <motion.button 
            className="surprise-button" 
            onClick={launchHeartConfetti}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Нажми меня! 
          </motion.button>
        </>
      )}

      {showText && (
        <motion.div 
          initial={{ scale: 0, opacity: 0, rotate: -10 }}
          animate={{ scale: 1.2, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="valentine-greeting"
        >
          <h2 className="congrats-text">
            С днем Святого Валентина!!!
          </h2>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            style={{ fontSize: '3rem' }}
          >
            ❤️
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};


function App() {
  // Базовая анимация появления
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Анимация для сетки фото (появление по очереди)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="App">
      <FloatingHearts />

      {/* --- ГЛАВНЫЙ ЭКРАН (HERO) --- */}
      <header className="hero-section">
        <div className="hero-overlay">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="title"
          >
            Lina and Vanya
          </motion.h1>
        </div>
        <img 
          src={process.env.PUBLIC_URL + '/assets/hero.jpg'} 
          alt="Lina and Vanya Hero" 
          className="hero-image" 
        />
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="scroll-indicator"
        >
          Листай вниз ↓
        </motion.div>
      </header>

      {/* --- ГАЛЕРЕЯ --- */}
      <section className="gallery-section">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Наши моменты
        </motion.h2>
        
        <motion.div 
          className="photo-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div key={num} className="photo-card" variants={fadeInUp}>
              <img 
                src={process.env.PUBLIC_URL + `/assets/photo${num}.jpg`} 
                alt={`Memory ${num}`} 
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- ВИДЕО ИСТОРИЯ --- */}
      <section className="memory-section">
        <motion.h2 
          className="memory-title"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          А помнишь, как это было?
        </motion.h2>

        <div className="video-block">
          <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            Наше первое свидание...
          </motion.p>
          <motion.video 
            controls 
            playsInline
            className="styled-video"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <source src={process.env.PUBLIC_URL + '/assets/video1.mp4'} type="video/mp4" />
          </motion.video>
        </div>

        <div className="video-block">
          <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            Самый лучший день...
          </motion.p>
          <motion.video 
            controls 
            playsInline
            className="styled-video"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <source src={process.env.PUBLIC_URL + '/assets/video2.mp4'} type="video/mp4" />
          </motion.video>
        </div>
        
        {/* Вставляем наш сюрприз сюда */}
        <FinalSurprise />

        <motion.div 
          className="footer-love"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ❤️ Люблю тебя ❤️
        </motion.div>
      </section>
    </div>
  );
}

export default App;