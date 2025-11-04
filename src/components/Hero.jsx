import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for contrast; doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28 lg:pt-32">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur">
          <Phone className="h-3.5 w-3.5 text-yellow-300" />
          <span>Agilis Communication Services</span>
        </div>
        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Transform enterprise communications with unified, intelligent, and secure cloud solutions
        </h1>
        <p className="mt-5 max-w-3xl text-base text-white/80 sm:text-lg">
          Consolidate telephony, contact center, IVR, and messaging into one scalable platform. Automate outreach,
          integrate with your CRM, and deliver world-class customer experiences with confidence.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <Rocket className="h-4 w-4" />
            Get a free quote
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Request a demo
          </a>
        </div>
        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: 'Uptime', value: '99.99% SLA' },
            { label: 'Customer satisfaction', value: '4.9/5 CSAT' },
            { label: 'Faster deployment', value: '< 7 days' },
            { label: 'ROI in 6 months', value: '+38%' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
              <div className="text-sm text-white/60">{item.label}</div>
              <div className="mt-1 text-lg font-semibold text-yellow-300">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
