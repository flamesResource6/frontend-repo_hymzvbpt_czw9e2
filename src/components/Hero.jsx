import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20 lg:py-24">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Strategic, scalable 3PL fulfilment in Canada
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            Use our end-to-end 3PL solutions, national network, automation, and real-time visibility to reduce cost, improve delivery performance, and scale with confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#form"
              className="rounded-md bg-[#D21F3C] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b51b33] focus:outline-none focus:ring-2 focus:ring-[#D21F3C] focus:ring-offset-2"
            >
              Get pricing
            </a>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Star className="h-4 w-4 text-amber-500" />
              <span>Trusted by leading brands</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-4">
            {[
              ['20M sq ft', 'warehousing'],
              ['175+ sites', 'in 6 countries'],
              ['7M', 'last-mile deliveries/yr'],
              ['355M+ units', 'packed in 2024'],
            ].map(([stat, label]) => (
              <div key={stat} className="">
                <div className="text-base font-semibold text-slate-900">{stat}</div>
                <div className="text-xs text-slate-600">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <blockquote className="text-slate-700">
              “Metro SCG scaled our Canadian fulfilment with speed and precision — on-time, on-budget, and a true partner to our growth.”
            </blockquote>
            <div className="mt-3 text-sm font-medium text-slate-900">— Dr. Squatch, Operations Leader</div>
          </div>
        </div>

        <div id="form" className="">
          <div className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">Request a consultation</h3>
            <p className="mt-1 text-sm text-slate-600">Talk to a specialist to get pricing and timelines.</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input type="text" placeholder="Full name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0" />
              <input type="email" placeholder="Work email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0" />
              <input type="text" placeholder="Company" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0" />
              <input type="tel" placeholder="Phone" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0" />
              <textarea placeholder="What challenges can we help with?" rows={3} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0" />
              <button type="button" className="mt-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Submit</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
