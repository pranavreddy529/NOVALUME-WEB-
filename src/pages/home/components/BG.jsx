import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom pastel color palette
const colors = {
  white: '#F4F1E7',
  pink: '#EBA2A3',
  softPink: '#C0968B'
};

const BulbShape = {
  CIRCLE: 'circle',
  SQUARE: 'square',
  HEXAGON: 'hexagon'
};

const getShapeStyle = (shape, size) => {
  switch (shape) {
    case BulbShape.CIRCLE:
      return {
        borderRadius: '50%',
        width: size,
        height: size,
        backgroundColor: colors.pink
      };
    case BulbShape.SQUARE:
      return {
        width: size,
        height: size,
        backgroundColor: colors.pink
      };
    case BulbShape.HEXAGON:
      return {
        width: size,
        height: size * 0.866,
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        backgroundColor: colors.pink
      };
    default:
      return {};
  }
};

const BulbAnimation = () => {
  const [bulbs, setBulbs] = useState([]);

  useEffect(() => {
    const generateBulbs = () => {
      const newBulbs = [];
      const bulbCount = 100;
      const shapes = Object.values(BulbShape);

      for (let i = 0; i < bulbCount; i++) {
        newBulbs.push({
          id: i,
          isOn: Math.random() > 0.1,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 40 + 20,
          intensity: Math.random() * 0.7 + 0.3,
          dimRate: Math.random() * 0.05 + 0.01,
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }

      setBulbs(newBulbs);
    };

    generateBulbs();
    window.addEventListener('resize', generateBulbs);
    return () => window.removeEventListener('resize', generateBulbs);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colors.white, // ✅ Explicitly matching hero background
        overflow: 'hidden',
        zIndex: -1
      }}
    >
      {bulbs.map((bulb) => (
        <motion.div
          key={bulb.id}
          animate={{ opacity: bulb.intensity }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: bulb.x,
            top: bulb.y,
            ...getShapeStyle(bulb.shape, bulb.size),
            boxShadow: `0 0 ${bulb.size}px ${colors.softPink}`
          }}
        />
      ))}
    </div>
  );
};

export default BulbAnimation;
