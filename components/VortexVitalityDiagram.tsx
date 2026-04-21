'use client'

import Image from 'next/image'

export default function VortexVitalityDiagram() {
  return (
    <div className="w-full my-8" style={{ maxWidth: '520px' }}>
      <Image
        src="/images/VortexVitalityMethodHydrationwheel.png"
        alt="The Vortex Vitality Method — Hydration at the centre, surrounded by Body, Environment, Nutrition, and Mindset"
        width={800}
        height={800}
        className="w-full h-auto"
        style={{ borderRadius: '4px' }}
      />
    </div>
  )
}