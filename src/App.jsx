import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="inline-flex items-center gap-2 font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-yellow-400/20">
              <Phone className="h-4 w-4 text-yellow-300" />
            </span>
            Agilis Communication Services
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#customers" className="hover:text-white">Customers</a>
            <a href="#contact" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10">Talk to an expert</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Benefits />
        <SocialProof />

        {/* Focused CTA section */}
        <section id="contact" className="bg-black py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2 md:p-10">
              <div>
                <h3 className="text-2xl font-semibold">Ready to unify communications and accelerate growth?</h3>
                <p className="mt-2 max-w-xl text-white/70">
                  Tell us about your goals and receive a customized plan covering UCaaS, contact center, IVR, bulk messaging, and security.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-1">Free consultation</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Deployment in under 7 days</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Enterprise-grade security</span>
                </div>
              </div>
              <form className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:border-yellow-400/60"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:border-yellow-400/60"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:border-yellow-400/60 sm:col-span-2"
                />
                <button
                  type="button"
                  className="sm:col-span-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  Request a demo
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Agilis Communication Services. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
