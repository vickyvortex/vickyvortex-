"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0D0D0D' }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/julia-photoshoot/16.jpg"
          alt="Vicky Vong"
          fill
          className="object-cover object-[50%_20%]"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0) 40%, rgba(13,13,13,0.95) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="max-w-xl">
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-8 font-medium"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Nervous System Recovery
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-[#F8F6F2] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Family Scapegoating Abuse
            <br />
            Is Not a Personality Issue.
            <br />
            <span className="italic">It&apos;s a Nervous System Injury.</span>
          </h1>

          <p
            className="text-base md:text-lg text-[#F8F6F2]/70 leading-relaxed mb-6 max-w-md"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            I help high-functioning