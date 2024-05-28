import React from "react";

export function GridBackground() {
  return (
    <div 
      className='fixed inset-0 z-[-1] h-full w-full dark:bg-black bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.2]'
    >
      {/* Radial gradient for the container to give a faded look */}
      <div 
        className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'>
      </div>
    </div>
  );
};