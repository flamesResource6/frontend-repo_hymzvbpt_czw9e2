import React from 'react';
import { Boxes, Truck, ScanLine, BarChart3 } from 'lucide-react';

export default function Solutions() {
  const items = [
    {
      icon: Boxes,
      title: 'Omni-channel fulfilment',
      body:
        'B2C and B2B orders from a single inventory with SLAs built for CX and cost.',
    },
    {
      icon: Truck,
      title: 'Transportation & last-mile',
      body:
        'Integrated linehaul, parcel, and final-mile to optimize speed and spend.',
    },
    {
      icon: ScanLine,
      title: 'Automation & robotics',
      body:
        'Pick, pack, and sortation powered by proven robotics for accuracy at scale.',
    },
    {
      icon: BarChart3,
      title: 'Visibility & analytics',
      body:
        'Real-time tracking via WMS/TMS and client portal to manage performance.',
    },
  ];

  const bullets = [
    'Intake to delivery managed end-to-end',
    'Flexible network capacity with seasonal support',
    'Proven cross-border workflows to the US',
    'Dedicated implementation and governance',
  ];

  return (
    <section id="solutions" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Advanced logistics and fulfilment simplified</h2>
          <p className="mt-3 text-slate-700">
            We solve real supply chain pain points, from customer satisfaction to rising costs, through integrated, technology-enabled 3PL services that evolve with your needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="h-6 w-6 text-[#D21F3C]" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-slate-900 p-6 text-white sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">Meet your next 3PL partner</h3>
              <p className="mt-1 text-sm text-slate-300">Talk to a specialist, get pricing and timelines for Canada and cross-border shipping.</p>
            </div>
            <a href="#form" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100">Meet with our team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
