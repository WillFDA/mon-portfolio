'use client'
import React from 'react';

interface TechnologiesIconsProps {
    component: React.ReactElement;
    color: string;
  }

  const hexToRGBA = (hex: string, alpha: number): string => {
    const match = hex.match(/\w\w/g);
    
    if (match === null) {
      throw new Error(`Invalid hex color: ${hex}`);
    }
    
    const [r, g, b] = match.map((x) => parseInt(x, 16));
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  

const TechnologiesIcons = ({ component, color }: TechnologiesIconsProps) => {
  if (!component) return null;

  const modifiedIcon = React.cloneElement(component, {
    className: 'icon-techno-components__icon',
  });

  return (
    <div
      className="icon-techno-components"
      style={{
        backgroundColor: hexToRGBA(color, 0.1),
        color: color,
      }}
    >
      {modifiedIcon}
    </div>
  );
};

export default TechnologiesIcons;
