import React from 'react';
import { Menu, MapPin, Boxes, Building2 } from 'lucide-react';

export default function HeaderNav() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { id: 'locations', label: 'Locations' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industries', label: 'Industries' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
            MS
          </span>
          <span className="hidden sm:block">Metro SCG</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#form"
            className="rounded-md bg-[#D21F3C] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b51b33] focus:outline-none focus:ring-2 focus:ring-[#D21F3C] focus:ring-offset-2"
          >
            Request a Consultation
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.id === 'locations' && <MapPin className="h-4 w-4" />}
                {item.id === 'solutions' && <Boxes className="h-4 w-4" />}
                {item.id === 'industries' && <Building2 className="h-4 w-4" />}
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
            <a
              href="#form"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-[#D21F3C] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#b51b33]"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
