import React from 'react';
import { ShieldCheck, Network, Gauge, Eye } from 'lucide-react';

export default function IndustriesAndAuthority() {
  const industries = [
    'Omni-channel retail',
    'Consumer brands',
    'Apparel & footwear',
    'Health & beauty',
    'CPG & food',
    'Public sector',
  ];

  const authority = [
    'National network with cross-border capability, 175+ sites and 20M sq ft powered by a 9K-strong team.',
    'Proven delivery at scale with 7M last-mile deliveries a year and 355M+ units packed.',
    'Real-time visibility through integrated TMS and WMS plus a client track-and-trace portal.',
    '$150M+ invested in robotics automation and analytics for speed accuracy and predictability',
    'Annual performance: on-time delivery targets, accuracy goals, peak support',
  ];

  const process = [
    'Onboarding and integration',
    'Inbound and storage',
    'Pick, pack, and value-add',
    'Transport and last-mile',
    'Performance and analytics',
  ];

  return (
    <>
      <section id="industries" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Proven 3PL across key sectors</h2>
            <p className="mt-3 text-slate-700">Omni-channel retail to public sector, tailored workflows and compliance built in.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((name) => (
              <div key={name} className="rounded-lg border border-slate-200 bg-white p-4 text-center text-sm font-medium text-slate-900 shadow-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Data-driven 3PL with measurable impact</h2>
            <p className="mt-3 text-slate-700">A streamlined process designed for speed, accuracy, and outstanding customer experience.</p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <li key={step} className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="absolute -top-3 left-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#D21F3C] text-xs font-bold text-white shadow">{i + 1}</span>
                <p className="mt-2 text-sm font-semibold text-slate-900">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2 rounded-xl bg-slate-900 p-6 text-white">
              <h3 className="text-lg font-semibold">Trusted by leading brands for Performance & Partnership</h3>
              <p className="mt-2 text-sm text-slate-300">50+ years of tech-enabled 3PL across Canada the US and the UK delivering scale precision and real results.</p>
              <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-slate-100">
                {authority.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <a href="#form" className="mt-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100">Request a consultation</a>
            </div>
            <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[ShieldCheck, Network, Gauge, Eye].map((Icon, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center rounded-lg border border-slate-200 p-4 text-center">
                    <Icon className="h-6 w-6 text-[#D21F3C]" />
                    <div className="mt-2 text-xs font-medium text-slate-900">Enterprise-ready</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">Real-time visibility, governance, and automation investment built for enterprise scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h3 className="text-xl font-semibold text-slate-900">Ready to optimize your supply chain?</h3>
            <a href="#form" className="inline-flex items-center rounded-md bg-[#D21F3C] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#b51b33]">Request a consultation</a>
          </div>
        </div>
      </section>
    </>
  );
}
