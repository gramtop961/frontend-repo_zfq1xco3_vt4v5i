import React from 'react';
import { Phone, Headset, Layers, Shield, MessageSquare, Settings, Bot, Send } from 'lucide-react';

const solutions = [
  {
    icon: <Phone className="h-6 w-6 text-yellow-400" />,
    title: 'Cloud Telephony & Call Center',
    desc: 'Enterprise-grade voice with omnichannel contact center: routing, recording, QA, dashboards, and WFM.',
  },
  {
    icon: <Send className="h-6 w-6 text-yellow-400" />,
    title: 'Outbound Dialers (OBD)',
    desc: 'Preview, power, and predictive dialers to scale outreach compliantly while maintaining call quality.',
  },
  {
    icon: <Bot className="h-6 w-6 text-yellow-400" />,
    title: 'Interactive Voice Response (IVR)',
    desc: 'AI IVR and voicebots with natural language understanding to deflect calls and speed up resolutions.',
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-yellow-400" />,
    title: 'Bulk Messaging',
    desc: 'WhatsApp, Email, and SMS campaigns with templates, compliance tools, and deliverability analytics.',
  },
  {
    icon: <Layers className="h-6 w-6 text-yellow-400" />,
    title: 'Digital & IT Consulting',
    desc: 'Infrastructure, cybersecurity, and modernization services to align your stack with business goals.',
  },
  {
    icon: <Shield className="h-6 w-6 text-yellow-400" />,
    title: 'Security & Compliance',
    desc: 'SSO, RBAC, encryption, and audit trails with global data residency and industry certifications.',
  },
  {
    icon: <Settings className="h-6 w-6 text-yellow-400" />,
    title: 'Customization at scale',
    desc: 'Tailor-made workflows and integrations that fit your processes—not the other way around.',
  },
  {
    icon: <Headset className="h-6 w-6 text-yellow-400" />,
    title: 'Partnership-driven support',
    desc: 'Dedicated success team with solution architects who co-design and optimize with you over time.',
  },
];

export default function Features() {
  return (
    <section id="solutions" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Solutions built for revenue and reliability</h2>
          <p className="mt-3 text-white/70">
            Everything you need for modern customer engagement—customized to your enterprise.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:translate-y-[-2px] hover:border-yellow-400/50 hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
