import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Designing AI IVR that customers actually love',
    excerpt: 'Turn frustrating phone trees into natural conversations with intent detection and real-time guidance.',
    tag: 'AI & Voice',
    date: 'Oct 2025',
  },
  {
    title: 'UCaaS vs. CCaaS: why enterprises choose a unified stack',
    excerpt: 'Reduce complexity and cost by consolidating communications and contact center operations.',
    tag: 'Enterprise',
    date: 'Sep 2025',
  },
  {
    title: 'Security checklist for regulated industries (HIPAA/SOC2)',
    excerpt: 'A practical guide to deploying communications in highly regulated environments.',
    tag: 'Security',
    date: 'Aug 2025',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From the blog</h2>
            <p className="mt-3 text-white/70">Insights on AI voice, customer experience, and enterprise communications.</p>
          </div>
          <a href="#" className="hidden items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 sm:inline-flex">
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-indigo-400/40 hover:bg-white/10">
              <div className="aspect-[16/9] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-amber-500/20" />
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-xs text-white/60">
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-white/70">{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-indigo-300">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
