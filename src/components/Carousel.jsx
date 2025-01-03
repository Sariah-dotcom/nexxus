import React from 'react';
import { SiNetflix, SiNike, SiAdidas, SiMcdonalds, SiShell } from 'react-icons/si';
import { TbBrandDisney } from 'react-icons/tb';

export default function Carousel() {
  return (
    <div className="text-center overflow-hidden relative">
      <h3 className="uppercase mb-5">Trusted by Hundreds of Businesses</h3>
      <div className="flex gap-10 text-light-grey animate-carousel">
        <SiNetflix className='text-8xl' />
        <SiNike className='text-8xl' />
        <TbBrandDisney className='text-8xl' />
        <SiAdidas className='text-8xl' />
        <SiMcdonalds className='text-8xl' />
        <SiShell className='text-8xl' />
        <SiNetflix className='text-8xl' />
        <SiNike className='text-8xl'/>
        <TbBrandDisney className='text-8xl'/>
        <SiAdidas className='text-8xl' />
        <SiMcdonalds className='text-8xl'/>
        <SiShell className='text-8xl' />
      </div>
    </div>
  );
};

