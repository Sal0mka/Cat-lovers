import { useState, useEffect } from 'react';

export function FloatingPaw() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showPaw = () => {
      const randomX = Math.random() * (window.innerWidth - 50);
      const randomY = Math.random() * (window.innerHeight - 50);
      setPosition({ x: randomX, y: randomY });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    // Show paw every 10 seconds
    const interval = setInterval(showPaw, 10000);
    
    // Show first paw after 3 seconds
    const timeout = setTimeout(showPaw, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 text-4xl animate-float"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'opacity 0.5s ease-in-out',
        opacity: visible ? 1 : 0,
      }}
    >
      🐾
    </div>
  );
}
