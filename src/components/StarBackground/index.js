import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './StarBackground.css';

const StarBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="star-bg"
      init={particlesInit}
      options={{
        background: { color: { value: '#0a0a0f' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        particles: {
          color: { value: ['#ffffff', '#854CE6', '#a78bfa'] },
          links: {
            color: '#854CE6',
            distance: 140,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 120 },
          opacity: { value: { min: 0.1, max: 0.7 }, animation: { enable: true, speed: 0.5 } },
          shape: { type: 'circle' },
          size: { value: { min: 0.5, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default StarBackground;
