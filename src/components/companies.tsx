import React from 'react'
import { CompanyCard } from './ui/company-card'
import { CashAppLogo } from './logos/cashapp'
import { RampLogo } from './logos/ramp'
import { AlanLogo } from './logos/alan'
import { ArcLogo } from './logos/arc'
import { DescriptLogo } from './logos/descript'
import { LoomLogo } from './logos/loom'
import { MercuryLogo } from './logos/mercury'
import { OpenSeaLogo } from './logos/opensea'
import { PitchLogo } from './logos/pitch'
import { RaycastLogo } from './logos/raycast'
import { RetoolLogo } from './logos/retool'
import { VercelLogo } from './logos/vercel'

export default function Companies() {
  return (
    <>
    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <RampLogo />
      <LoomLogo />
      <VercelLogo />
      <DescriptLogo  />
      <CashAppLogo />
      <RaycastLogo />
      <MercuryLogo />
      <RetoolLogo />
      <AlanLogo />
      <ArcLogo  />
      <OpenSeaLogo />
      <PitchLogo />
      <DescriptLogo  />
      <AlanLogo />
      <OpenSeaLogo />
      <RetoolLogo />
      <CashAppLogo />
      <RampLogo />
      <LoomLogo />
      <RaycastLogo />
      <ArcLogo  />
      <MercuryLogo />
      <VercelLogo />
      <PitchLogo />
    </div>
  </>
  )
}
