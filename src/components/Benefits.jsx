import React from 'react';
import { Zap, BarChart3, Plug, Shield, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: 'Automation that accelerates sales',
    desc: 'Trigger campaigns, auto-assign leads, and eliminate manual steps with event-driven workflows that move faster than your pipeline.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-yellow-400" />,
    title: 'AI-driven insights',
    desc: 'Conversation intelligence, intent detection, and next-best-action guidance to improve conversions and customer satisfaction.',
  },
  {
    icon: <Plug className="h-6 w-6 text-yellow-400" />,
    title: 'Seamless CRM integration',
    desc: 'Native connectors and webhooks for Salesforce, HubSpot, Dynamics, and more—so your data stays in sync.',
  },
  {
    icon: <Shield className="h-6 w-6 text-yellow-400" />,
    title: 'Security and compliance',
    desc: 'SSO, RBAC, audit trails, and encryption by default. Built for enterprises with strict regulatory requirements.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Business outcomes that compound</h2>
          <p className="mt-3 text-white/70">
            Deploy quickly, integrate deeply, and scale confidently. Reduce costs and improve CX with measurable impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <CheckCircle2 className="h-4 w-4 text-yellow-400" />
                <span>Enterprise-ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
