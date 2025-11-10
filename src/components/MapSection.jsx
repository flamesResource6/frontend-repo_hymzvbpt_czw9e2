import React from 'react';

export default function MapSection() {
  return (
    <section id="locations" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">National footprint, North American fulfilment</h2>
          <p className="mt-3 text-slate-700">Strategic regional hubs shorten domestic lead times, integrated cross-border workflows get orders to US customers faster.</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Metro SCG map"
              src="https://www.google.com/maps/d/u/0/embed?mid=1k0kq7yW2r9T8i9o7L8C4Z3vQv8I&ehbc=2E312F"
              className="h-full w-full"
            />
          </div>
          <div className="grid grid-cols-2 divide-x divide-slate-200 bg-slate-50 text-center text-sm text-slate-700 sm:grid-cols-4">
            {['Vancouver', 'Calgary', 'Toronto', 'Montreal'].map((city) => (
              <div key={city} className="p-3">{city} hubs</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
