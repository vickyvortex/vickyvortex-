import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  {
    title: string;
    tag: string;
    blocks: (string | { list: string[] })[];
  }
> = {
  "burnout-is-not-always-about-workload": {
    title: "Burnout Is Not Always About Workload",
    tag: "Nervous System",
    blocks: [
      "Burnout is not always about workload.",
      "As Gabor Maté explains, trauma isn't just what happens to you. It's what happens inside you as a result.",
      "For many high-functioning people, the real issue isn't pressure.",
      "It's prolonged exposure to environments where:",
      { list: ["you couldn't be yourself", "you had to over-adapt", "you were emotionally unsafe"] },
      "That pattern shows up as:",
      { list: ["exhaustion", "anxiety", "people-pleasing"] },
      "Insight helps.",
      "But insight doesn't regulate your nervous system.",
      "You don't need more resilience. You need less activation.",
    ],
  },
  "you-were-never-the-problem": {
    title: "You Were Never the Problem",
    tag: "Family Scapegoating Abuse",
    blocks: [
      "There's a reason some people feel like the \"problem\" in their family.",
      "Rebecca C. Mandeville calls this Family Scapegoating Abuse.",
      "One person is assigned the role of:",
      { list: ["the difficult one", "the emotional one", "the one to blame"] },
      "Not because it's true.",
      "But because the system needs a pressure valve.",
      "You weren't the problem. You were the pressure valve.",
    ],
  },
  "you-cannot-out-heal-ongoing-harm": {
    title: "You Cannot Out-Heal Ongoing Harm",
    tag: "Recovery",
    blocks: [
      "Most people trying to heal are still exposed to the pattern.",
      "You can understand everything and still feel stuck.",
      "Because your nervous system responds to environment, not insight.",
      "Remove what activates you. Then rebuild.",
      "That's when change happens.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: `${post.title} | Dignity Clinic` };
}

export default async function InsightPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6 md:px-12 pt-32 pb-32">
        <Link
          href="/insights"
          className="text-xs uppercase tracking-[0.2em] text-[#3D9FA8] mb-12 inline-block hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          ← Insights
        </Link>

        <p
          className="text-xs uppercase tracking-[0.25em] text-[#3D9FA8] mt-8 mb-6"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
        >
          {post.tag}
        </p>

        <h1
          className="text-4xl md:text-5xl text-[#0D0D0D] leading-[1.1] mb-12"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {post.title}
        </h1>

        <div className="space-y-5">
          {post.blocks.map((block, i) => {
            if (typeof block === "string") {
              return (
                <p
                  key={i}
                  className="text-base md:text-lg text-[#3a3a3a] leading-relaxed"
                  style={{ fontFamily: "var(--font-eb-garamond)" }}
                >
                  {block}
                </p>
              );
            }
            return (
              <ul key={i} className="space-y-2 pl-2">
                {block.list.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-base text-[#3a3a3a]"
                    style={{ fontFamily: "var(--font-eb-garamond)" }}
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3D9FA8] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>

        <div className="mt-16 pt-10 border-t border-[#E8E5E0]">
          <Link
            href="/contact"
            className="inline-block bg-[#3D9FA8] text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#2d8a93] transition-colors duration-300"
            style={{ fontFamily: "var(--font-eb-garamond)" }}
          >
            Begin the Reset
          </Link>
        </div>
      </div>
    </main>
  );
}
