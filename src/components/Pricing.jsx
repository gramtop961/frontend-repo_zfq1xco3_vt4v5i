import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    cadence: 'per user / month',
    highlight: false,
    features: ['Voice & SMS', 'Basic IVR', 'Team chat', 'Email support'],
    cta: 'Get started',
  },
  {
    name: 'Business',
    price: '$79',
    cadence: 'per user / month',
    highlight: true,
    features: [
      'Omnichannel contact center',
      'AI IVR & Agent Assist',
      'Advanced analytics',
      'SSO & RBAC',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual billing',
    highlight: false,
    features: ['Dedicated cluster', 'HIPAA-ready', 'Global data residency', '24/7 premium support'],
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start small, scale globally. No hidden fees.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 ${
                t.highlight
                  ? 'border-indigo-400/40 bg-indigo-500/10 shadow-lg shadow-indigo-500/20'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-indigo-500/20 px-2 py-1 text-xs text-indigo-200">Most popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <div className="text-4xl font-bold">{t.price}</div>
                <div className="pb-2 text-sm text-white/70">{t.cadence}</div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  t.highlight
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/60">Volume discounts available. Talk to sales for 1K+ seats.</p>
      </div>
    </section>
  );
}
