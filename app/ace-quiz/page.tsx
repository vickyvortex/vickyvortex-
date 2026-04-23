'use client'

import { useState } from 'react'

const QUESTIONS = [
  "Did a parent or other adult in the household often swear at you, insult you, put you down, or humiliate you?",
  "Did a parent or other adult in the household often push, grab, slap, or throw something at you, or ever hit you so hard that you were injured or left with marks?",
  "Did an adult or person at least 5 years older than you ever touch you sexually, try to make you touch them sexually, or attempt or have oral, anal, or vaginal sex with you?",
  "Did you often feel that no one in your family loved you, understood you, or thought you were important or special?",
  "Did you often feel that your family did not look out for one another, feel close, or support each other?",
  "Did you often not have enough to eat, have to wear dirty clothes, have no one to protect you, or feel that your parents were too impaired or overwhelmed to take care of you?",
  "Were your parents ever separated or divorced?",
  "Was your mother, stepmother, or another caregiver often pushed, grabbed, slapped, kicked, or otherwise physically harmed?",
  "Did you live with anyone who was a problem drinker, used street drugs, or misused medication?",
  "Did a household member struggle with depression, mental illness, suicidal behaviour, or did a household member go to prison?",
]

function getInterpretation(score: number) {
  if (score <= 1) return {
    title: 'Your foundation was relatively stable',
    body: 'This may suggest lower exposure to the kinds of adversity measured here. That does not mean your stress is not real. It simply means this particular assessment may not capture the full picture of what your body has carried. You may still benefit from paying attention to sleep, boundaries, inflammation, emotional suppression, and nervous system regulation.',
    focus: ['Prevention and self-awareness', 'Consistent regulation habits', 'Protecting your energy before breakdown happens']
  }
  if (score <= 3) return {
    title: 'You may be carrying more than you realise',
    body: 'This may suggest that some early stress patterns could still be shaping your body, emotions, or relationships today. You may notice patterns such as hypervigilance, overthinking, tension, poor sleep, difficulty switching off, people-pleasing, or feeling responsible for everyone else. These are not personality flaws. They are often intelligent adaptations to stress.',
    focus: ['Nervous system support', 'Emotional clarity', 'Reducing the body burden of chronic stress', 'Beginning to restore self-trust']
  }
  return {
    title: 'Your body has been carrying a significant load',
    body: 'A higher score can be associated with a greater likelihood of long-term stress effects on the body and nervous system. Many people with higher ACE scores live with chronic tension, emotional exhaustion, sleep disruption, inflammation, difficulty trusting themselves, over-responsibility, and a deep sense of being on alert even when life looks fine from the outside. This does not mean something is wrong with you. It often means your body adapted early to an environment that did not feel fully safe, steady, or supportive. What helped you survive then may now be exhausting your system. This is not weakness. It is adaptation. And this is where rebuilding begins.',
    focus: ['Stabilising the nervous system', 'Reducing chronic stress load', 'Understanding the body impact of old survival patterns', 'Rebuilding with support rather than forcing your way through']
  }
}

export default function ACEQuiz() {
  const [step, setStep] = useState<'intro' | 'capture' | 'quiz' | 'result'>('intro')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState<boolean[]>([])
  const [currentQ, setCurrentQ] = useState(0)

  const score = answers.filter(Boolean).length
  const interp = getInterpretation(score)

  const btnBase: React.CSSProperties = { borderColor: '#F8F6F2', color: '#F8F6F2', background: 'transparent' }
  const inputStyle: React.CSSProperties = { background: 'transparent', border: '1px solid rgba(248,246,242,0.25)', color: '#F8F6F2', width: '100%', padding: '0.875rem 1rem', fontSize: '18px', outline: 'none', fontFamily: 'inherit' }
  const labelStyle: React.CSSProperties = { fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.35)', marginBottom: '2rem', display: 'block' }

  function handleAnswer(yes: boolean) {
    const newAnswers = [...answers, yes]
    setAnswers(newAnswers)
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(q => q + 1)
    } else {
      setStep('result')
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, score: newAnswers.filter(Boolean).length }),
      }).catch(console.error)
    }
  }

  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh', color: '#F8F6F2' }}>
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">

        {step === 'intro' && (
          <div className="space-y-8">
            <span style={labelStyle}>Dignity Clinic</span>
            <h1 className="font-cormorant font-light leading-tight tracking-tight" style={{ fontSize: 'clamp(2.2rem,6vw,4rem)' }}>
              The Hidden Stress Score
            </h1>
            <p className="font-cormorant italic text-2xl md:text-3xl" style={{ color: 'rgba(248,246,242,0.5)' }}>
              What your past may still be costing your body
            </p>
            <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
              Not everyone who has lived through chronic stress, family dysfunction, emotional suppression, or scapegoating realises how deeply those experiences can shape the body.
            </p>
            <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
              Many adults spend years trying to push through fatigue, inflammation, anxiety, sleep disruption, emotional exhaustion, or a constant sense of being on guard — without realising these patterns may have roots much earlier in life.
            </p>
            <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
              This short assessment is designed to help you understand whether early stress may still be affecting your nervous system, health, and sense of self today. It is simple, private, and takes only a few minutes.
            </p>
            <p className="font-cormorant italic text-2xl" style={{ color: 'rgba(248,246,242,0.5)' }}>
              You are not broken. Your body may have adapted to stress in ways that once helped you survive, but may now be costing you energy, clarity, and ease.
            </p>
            <button
              onClick={() => setStep('capture')}
              className="inline-flex items-center justify-center font-sans font-medium text-[11px] tracking-[0.22em] uppercase px-10 py-4 border transition-all duration-300"
              style={btnBase}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#F8F6F2'; el.style.color = '#0D0D0D' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#F8F6F2' }}
            >
              Take the assessment
            </button>
            <p className="font-garamond text-sm leading-relaxed" style={{ color: 'rgba(248,246,242,0.3)', fontStyle: 'italic' }}>
              This is not a diagnostic tool and does not constitute medical or psychiatric advice. It is a self-reflection resource based on the CDC-Kaiser Permanente ACE Study framework.
            </p>
          </div>
        )}

        {step === 'capture' && (
          <form onSubmit={e => { e.preventDefault(); setStep('quiz') }} className="space-y-8">
            <span style={labelStyle}>Before we begin</span>
            <h2 className="font-cormorant font-light leading-tight tracking-tight" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
              Where should we send your result?
            </h2>
            <p className="font-garamond text-xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
              Enter your name and email to receive your personalised result and a short guide to what your score means for your nervous system and long-term health.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block font-sans text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: '#F8F6F2' }}>Your name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
              </div>
              <div>
                <label className="block font-sans text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: '#F8F6F2' }}>Your email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
              </div>
            </div>
            <p className="font-garamond text-sm leading-relaxed" style={{ color: 'rgba(248,246,242,0.3)' }}>
              Your information is private. You will receive your result and occasional insights from Dignity Clinic. You can unsubscribe at any time.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center font-sans font-medium text-[11px] tracking-[0.22em] uppercase px-10 py-4 border transition-all duration-300"
              style={btnBase}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#F8F6F2'; el.style.color = '#0D0D0D' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#F8F6F2' }}
            >
              Continue to assessment
            </button>
          </form>
        )}

        {step === 'quiz' && (
          <div className="space-y-10">
            <div className="mb-8">
              <div className="w-full h-px mb-2" style={{ background: 'rgba(248,246,242,0.08)' }}>
                <div className="h-px transition-all duration-500" style={{ background: 'rgba(248,246,242,0.35)', width: `${(currentQ / QUESTIONS.length) * 100}%` }} />
              </div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(248,246,242,0.3)' }}>
                Question {currentQ + 1} of {QUESTIONS.length}
              </p>
            </div>
            <p className="font-garamond text-sm mb-6" style={{ color: 'rgba(248,246,242,0.4)', fontStyle: 'italic' }}>
              Please answer based on your experience before the age of 18.
            </p>
            <h2 className="font-cormorant font-light leading-relaxed tracking-tight" style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)' }}>
              {QUESTIONS[currentQ]}
            </h2>
            <div className="flex gap-4 pt-4">
              {['Yes', 'No'].map(label => (
                <button
                  key={label}
                  onClick={() => handleAnswer(label === 'Yes')}
                  className="flex-1 font-sans font-medium text-[11px] tracking-[0.22em] uppercase px-8 py-4 border transition-all duration-300"
                  style={{ borderColor: 'rgba(248,246,242,0.3)', color: '#F8F6F2', background: 'transparent' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#F8F6F2'; el.style.color = '#0D0D0D' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#F8F6F2' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="space-y-12">
            <span style={labelStyle}>Your Hidden Stress Score</span>
            <div className="flex items-end gap-4">
              <span className="font-cormorant font-light" style={{ fontSize: 'clamp(5rem,15vw,9rem)', lineHeight: 1, color: 'rgba(180,140,255,0.9)' }}>
                {score}
              </span>
              <span className="font-cormorant font-light text-2xl mb-6" style={{ color: 'rgba(248,246,242,0.35)' }}>/ 10</span>
            </div>
            <p className="font-garamond text-lg" style={{ color: 'rgba(248,246,242,0.4)', fontStyle: 'italic' }}>
              This score is not a diagnosis. It is simply one way of understanding whether early stress, instability, or emotional harm may still be affecting your body and life today.
            </p>
            <div style={{ borderTop: '1px solid rgba(248,246,242,0.1)', paddingTop: '2.5rem' }}>
              <h2 className="font-cormorant font-light leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
                {interp.title}
              </h2>
              <p className="font-garamond text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(248,246,242,0.7)' }}>
                {interp.body}
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgba(248,246,242,0.1)', paddingTop: '2.5rem' }}>
              <h3 className="font-cormorant font-light text-2xl mb-6" style={{ color: '#F8F6F2' }}>
                What to focus on next
              </h3>
              <ul className="space-y-3">
                {interp.focus.map(f => (
                  <li key={f} className="font-garamond text-xl flex items-start gap-3" style={{ color: 'rgba(248,246,242,0.65)' }}>
                    <span style={{ color: 'rgba(248,246,242,0.25)', marginTop: '2px' }}>—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: '1px solid rgba(61,31,110,0.5)', background: 'rgba(61,31,110,0.07)', padding: '2.5rem' }}>
              <h3 className="font-cormorant font-light text-2xl md:text-3xl mb-4" style={{ color: '#F8F6F2' }}>
                What this score may be telling you
              </h3>
              <p className="font-garamond text-xl leading-relaxed mb-6" style={{ color: 'rgba(248,246,242,0.7)' }}>
                If this assessment resonates, it may be giving language to something your body has known for a long time. Dignity Clinic works with adults who are ready to understand what has happened, reduce the body burden of chronic stress, and begin rebuilding with clarity, dignity, and real support.
              </p>
              <p className="font-garamond text-xl leading-relaxed mb-8" style={{ color: 'rgba(248,246,242,0.7)' }}>
                A Dignity Reset session is a grounded first step — a deep, structured conversation designed to help you understand your patterns, feel accurately seen, and identify a clear path forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                  href="/#contact"
                  className="inline-flex items-center justify-center font-sans font-medium text-[11px] tracking-[0.22em] uppercase px-10 py-4 border transition-all duration-300"
                  style={btnBase}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#F8F6F2'; el.style.color = '#0D0D0D' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#F8F6F2' }}
                >
                  Book a Dignity Reset
                </a>
                
                  href="/#services"
                  className="inline-flex items-center justify-center font-sans font-medium text-[11px] tracking-[0.22em] uppercase px-10 py-4 border transition-all duration-300"
                  style={{ borderColor: 'rgba(248,246,242,0.3)', color: 'rgba(248,246,242,0.6)', background: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(248,246,242,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  View all services
                </a>
              </div>
            </div>
            <p className="font-garamond text-sm leading-relaxed" style={{ color: 'rgba(248,246,242,0.25)', fontStyle: 'italic' }}>
              This assessment is not a diagnostic tool and does not constitute medical or psychiatric advice. It is a self-reflection resource based on the CDC-Kaiser Permanente ACE Study framework. If you are in crisis, please contact a mental health professional or crisis service.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}
