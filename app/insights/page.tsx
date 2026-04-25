import Link from "next/link";

export const metadata = {
  title: "Insights | Dignity Clinic",
  description:
    "Perspectives on Family Scapegoating Abuse recovery, nervous system regulation, and toxic family healing.",
};

const posts = [
  {
    slug: "burnout-is-not-always-about-workload",
    title: "Burnout Is Not Always About Workload",
    excerpt:
      "For many high-functioning people, the real issue isn't pressure. It's prolonged exposure to environments where you couldn't be yourself.",
    tag: "Nervous System",
    lines: [
      "Burnout is not always about workload.",
      "As Gabor Maté explains, trauma isn't just what happens to you. It's what happens inside you as a result.",
      "For many high-functioning people, the real issue isn't pressure.",
      "It's prolonged exposure to environments where:",
      ["you couldn't be yourself", "you had to over-adapt", "you were emotionally unsafe"],
      "That pattern shows up as:",
      ["exhaustion", "anxiety", "people-pleasing"],
      "Insight helps.",
      "But insight doesn't regulate your nervous system.",
      "You don't need more resilience. You need less activation.",
    ],
  },
  {
    slug: "you-were-never-the-problem",
    title: "You Were Never the Problem",
    excerpt:
      "Rebecca C. Mandeville calls this Family Scapegoating Abuse. You weren't the problem. You were the pressure valve.",
    tag: "Family Scapegoating Abuse",
    lines: [
      "There's a reason some people feel like the \"problem\" in their family.",
      "Rebecca C. Mandeville calls this Family Scapegoating Abuse.",
      "One person is assigned the role of:",
      ["the difficult one", "the emotional one", "the one to blame"],
      "Not because it's true.",
      "But because the system needs a pressure valve.",
      "You weren't the problem. You were the pressure valve.",
    ],
  },
  {
    slug: "you-cannot-out-heal-ongoing-harm",
    title: "You Cannot Out-Heal Ongoing Harm",
    excerpt:
      "You can understand everything and still feel stuck. Because your nervous system responds to environment, not insight.",
    tag: "Recovery",
    lines: [
      "Most people trying to heal are still exposed to the pattern.",
      "You can understand everything and still feel stuck.",
      "Because your nervous system responds to environment, not insight.",
      "Remove what activates you. Then rebuild.",
      "That's when change happens.",
    ],
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <p
          className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mb-6"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          Insights
        </p>
        <h1
          className="text-4xl md:text-5xl text-[#0D0D0D] leading-[1.1] max-w-xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Perspectives on Recovery
        </h1>
      </div>

      {/* Posts grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid md:grid-cols-3 gap-px bg-[#E8E5E0]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="bg-white p-8 flex flex-col gap-6 hover:bg-[#F4F2EE] transition-colors duration-200 group"
            >
              <span
                className="text-xs text-[#3D9FA8] uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {post.tag}
              </span>
              <h2
                className="text-xl md:text-2xl text-[#0D0D0D] leading-snug group-hover:text-[#3D9FA8] transition-colors duration-200"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {post.title}
              </h2>
              <p
                className="text-sm text-[#5a5a5a] leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-eb-garamond)" }}
              >
                {post.excerpt}
              </p>
              <span
                className="text-xs text-[#3D9FA8] uppercase tracking-[0.15em]"
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
