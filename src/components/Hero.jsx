import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle radial gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_0%,rgba(15,23,42,0.6)_55%,rgba(15,23,42,0.95)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28 lg:pt-32">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-400" />
          <span>AI-powered Unified Communications</span>
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Connect, automate, and scale with our UCaaS platform
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Voice, messaging, IVR, and call center software unified into one secure, enterprise-grade cloud. Build custom workflows, integrate quickly, and deliver world-class customer experiences.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <Rocket className="h-4 w-4" />
            Start free trial
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Explore features
          </a>
        </div>
        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: '99.99% uptime', value: 'SLA' },
            { label: 'Global POPs', value: '24+' },
            { label: 'Avg. CSAT', value: '4.9/5' },
            { label: 'Deploy time', value: '<7 days' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
              <div className="text-sm text-white/60">{item.label}</div>
              <div className="mt-1 text-lg font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
