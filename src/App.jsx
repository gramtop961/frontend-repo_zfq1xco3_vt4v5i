import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="inline-flex items-center gap-2 font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/20">
              <Phone className="h-4 w-4 text-indigo-300" />
            </span>
            NimbusComm
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#contact" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Blog />
      </main>

      {/* Footer / CTA */}
      <footer id="contact" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Ready to modernize your communications?</h3>
              <p className="mt-2 max-w-xl text-white/70">
                Talk to our solution architects about UCaaS, CCaaS, IVR, and custom software tailored to your enterprise.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:border-indigo-400/50"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:border-indigo-400/50"
              />
              <button
                type="button"
                className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Request demo
              </button>
            </form>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
            <p>© {new Date().getFullYear()} NimbusComm, Inc. All rights reserved.</p>
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
