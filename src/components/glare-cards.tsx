import React from 'react';
import Image from 'next/image';
import { GlareCard } from './ui/glare-card';

function GlareCards() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src="/CashApp.jpg" width={500} height={500} alt="CashApp" />
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src="/Vercel.jpg" width={500} height={500} alt="Vercel" />
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src="/Ramp.jpg" width={500} height={500} alt="Ramp" />
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src="/Remote.jpg" width={500} height={500} alt="Remote" />
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src="/Arc.jpg" width={500} height={500} alt="Arc" />
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src="/Retool.jpg" width={500} height={500} alt="Retool" />
        </GlareCard>
      </div>
    </div>
  );
}

export default GlareCards;
