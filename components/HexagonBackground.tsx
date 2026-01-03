import React from 'react';

const HexagonBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden opacity-20 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="#333" strokeWidth="0.5" transform="translate(0, -14.4)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0" />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="1" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>
    </div>
  );
};

export default HexagonBackground;