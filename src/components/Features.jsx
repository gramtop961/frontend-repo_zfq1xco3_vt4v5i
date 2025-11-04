import React from 'react';
import { Phone, Headphones, Code2, Server, Cpu, Shield, MessageSquare, Mic, Check } from 'lucide-react';

const features = [
  {
    icon: <Phone className="h-6 w-6 text-yellow-400" />,
    title: 'UCaaS Platform',
    desc: 'HD voice, SMS/MMS, team chat, and meetings unified across devices with zero-touch provisioning.',
  },
  {
    icon: <Headphones className="h-6 w-6 text-yellow-400" />,
    title: 'Call Center Suite',
    desc: 'Omnichannel routing, live dashboards, quality management, and workforce optimization built-in.',
  },
  {
    icon: <Mic className="h-6 w-6 text-yellow-400" />,
    title: 'AI IVR & Voicebots',
    desc: 'Natural language IVR, intent detection, and real-time agent assist to reduce handling time.',
  },
  {
    icon: <Code2 className="h-6 w-6 text-yellow-400" />,
    title: 'Custom Software',
    desc: 'Tailor-made apps and integrations delivering the exact workflows your business needs.',
  },
  {
    icon: <Server className="h-6 w-6 text-yellow-400" />,
    title: 'Enterprise Solutions',
    desc: 'Single sign-on, RBAC, audit trails, and global data residency for regulated industries.',
  },
  {
    icon: <Shield className="h-6 w-6 text-yellow-400" />,
    title: 'Security & Compliance',
    desc: 'SOC 2 Type II, HIPAA-ready, and end-to-end encryption to safeguard your communications.',
  },
  {
    icon: <Cpu className="h-6 w-6 text-yellow-400" />,
    title: 'Automation & Workflows',
    desc: 'Drag-and-drop flows, webhooks, and event streams to automate customer journeys.',
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-yellow-400" />,
    title: 'Analytics & Insights',
    desc: 'Real-time metrics, SLA alerts, and conversation intelligence to drive performance.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to talk to customers</h2>
          <p className="mt-3 text-white/70">
            Combine voice, messaging, and automation with enterprise-grade reliability.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:translate-y-[-2px] hover:border-yellow-400/50 hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-white/60">
                <Check className="h-4 w-4 text-yellow-400" />
                <span>Included in Business plan</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
