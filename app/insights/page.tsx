import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Insights | Dignity Clinic",
  description:
    "Perspectives on Family Scapegoating Abuse recovery, nervous system regulation, and toxic family healing.",
};

const posts = [
  {
    slug: "burnout-is-not-always-about-workload",
    title: "Burnout Is Not Always About Workload",
    excerpt: "For many high-functioning people, the real issue isn't pressure. It's prolonged exposure to environments where you couldn't be yourself.",
    tag: "Nervous System",
  },
  {
    slug: "you-were-never-the-problem",
    title: "You Were Never the Problem",
    excerpt: "Rebecca C. Mandeville calls this Family Scapegoating Abuse. You weren't the problem. You were the pressure valve.",
    tag: "Family Scapegoating Abuse",
  },
  {
    slug: "you-cannot-out-heal-ongoing-harm",
    title: "You Cannot Out-Heal Ongoing Harm",
    excerpt: "You can understand everything and still feel stuck. Because your nervous system responds to environment, not insight.",
    tag: "Recovery",
  },
];

export default function InsightsPage() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <p
          className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-6"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          Insights
        </p>
        <h1
          className="text-4xl md:text-5xl leading-[1.1] max-w-xl"
          style={{ fontFamily: "var(--font-cormorant)", color: '#F8F6F2' }}
        >
          Perspectives on Recovery
        </h1>
      </div>

      {/* Posts grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid md:grid-cols-3" style={{ gap: '1px', background: 'rgba(248,246,242,0.1)' }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="flex flex-col gap-6 p-8 transition-colors duration-200 group"
              style={{ background: '#0D0D0D' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(248,246,242,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0D0D0D')}
            >
              <span
                className="text-xs uppercase tracking-[0.2em] text-[#3D9FA8]"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {post.tag}
              </span>
              <h2
                className="text-xl md:text-2xl leading-snug"
                style={{ fontFamily: "var(--font-cormorant)", color: '#F8F6F2' }}
              >
                {post.title}
              </h2>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-eb-garamond)", color: 'rgba(248,246,242,0.6)' }}
              >
                {post.excerpt}
              </p>
              <span
                className="text-xs uppercase tracking-[0.15em] text-[#3D9FA8]"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
