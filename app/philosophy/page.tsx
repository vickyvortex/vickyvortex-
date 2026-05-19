import type { Metadata } from 'next'
import PhilosophyManifesto from '@/components/PhilosophyManifesto'

export const metadata: Metadata = {
  title: 'The Wound Is the Doorway | Dignity Clinic',
  description:
    'The wound is not the self. The wound is the doorway. Wholeness is the truth. The philosophy behind Dignity Clinic and nervous system recovery.',
}

export default function PhilosophyPage() {
  return <PhilosophyManifesto />
}