import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const logos = ['ClientOne', 'AcmeCorp', 'Globex', 'Umbrella', 'Initech', 'Stark'];

export default function SocialProof() {
  return (
    <section id="customers" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Trusted by leaders</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Proven reliability. Enterprise-grade security.</h2>
            <p className="mt-3 text-white/70">
              Our platform powers millions of conversations each month with a 99.99% uptime SLA, advanced encryption,
              and compliance frameworks designed for regulated industries.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">99.99%</div>
                <div className="text-xs text-white/60">Uptime SLA</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">4.9/5</div>
                <div className="text-xs text-white/60">CSAT</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">+38%</div>
                <div className="text-xs text-white/60">Avg. ROI in 6 mo.</div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
              <Star className="h-4 w-4 text-yellow-300" />
              <span>Security certifications and attestations available upon request.</span>
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-white/50">Trusted by</div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {logos.map((name) => (
                <div key={name} className="flex h-16 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-white/70">
                  {name}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <ShieldCheck className="h-5 w-5 text-yellow-300" />
              <span>Privacy-first, compliant by design.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
