import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  // Настройки анимации (появление снизу)
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="App">
      
      {/* --- ГЛАВНЫЙ ЭКРАН --- */}
      <header className="hero-section">
        <div className="hero-overlay">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="title"
          >
            Lina and Vanya
          </motion.h1>
        </div>
        {/* Замени src на свое фото: process.env.PUBLIC_URL + '/assets/hero.jpg' */}
        <img 
            src={process.env.PUBLIC_URL + '/assets/hero.jpg'} 
            alt="Lina and Vanya" 
            className="hero-image" 
        />
        <div className="scroll-indicator">↓ Листай вниз ↓</div>
      </header>

      {/* --- ГАЛЕРЕЯ (6 ФОТО) --- */}
      <section className="gallery-section">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Наши моменты
        </motion.h2>
        
        <div className="photo-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div key={item} className="photo-card" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                    <img 
                        src={process.env.PUBLIC_URL + `/assets/photo${item}.jpg`} 
                        alt={`Memory ${item}`} 
                    />
                </motion.div>
            ))}
        </div>
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

        {/* Блок Видео 1 */}
        <div className="video-block">
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible">
            Что-то тут придумаю...
          </motion.p>
          <motion.video 
            controls 
            className="styled-video"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Замени на свои видео */}
            <source 
                src={process.env.PUBLIC_URL + '/assets/video1.mp4'} 
                type="video/mp4" 
            />
            </motion.video>
        </div>

        {/* Блок Видео 2 */}
        <div className="video-block">
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible">
            и тут тоже придумаю...
          </motion.p>
          <motion.video 
            controls 
            className="styled-video"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
             {/* Замени на свои видео */}
            <source 
                src={process.env.PUBLIC_URL + '/assets/video2.mp4'} 
                type="video/mp4" 
            />
          </motion.video>
        </div>

        <motion.div 
          className="footer-love"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          ❤️ Люблю тебя ❤️
        </motion.div>
      </section>
    </div>
  );
}

export default App;