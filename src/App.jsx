import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import Solutions from './components/Solutions';
import IndustriesAndAuthority from './components/IndustriesAndAuthority';

export default function App() {
  return (
    <div className="font-inter text-slate-900">
      <HeaderNav />
      <main>
        <Hero />
        <MapSection />
        <Solutions />
        <IndustriesAndAuthority />
      </main>
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Metro Supply Chain Group</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
