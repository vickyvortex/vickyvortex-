// app/approach/page.tsx
import type { Metadata } from 'next'
import Approach from '@/components/Approach'

export const metadata: Metadata = {
  title: 'Approach | Dignity Clinic',
  description:
    'The tools, modalities and practices behind Dignity Clinic. Nutritional therapy, breathwork, embodiment, energy medicine and more — chosen for your nervous system, not handed to you as a list.',
}

export default function ApproachPage() {
  return (
    <main className="bg-[#0D0D0D] text-[#F8F6F2] min-h-screen pt-20">
      <Approach />
    </main>
  )
}
