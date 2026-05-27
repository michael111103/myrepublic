"use client";
import { useState, useRef } from "react";
import { CheckIcon, ArrowRightIcon, RocketIcon, SpeedIcon } from "./Icons";

type PackageType = "fiber" | "combo";

const fiberPackages = [
  {
    id: "neo",
    name: "Neo",
    speed: "100 Mbps",
    price: 233100,
    originalPrice: 600000,
    discount: 36,
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.3)",
    tag: null,
    features: [
      "Unlimited kuota",
      "Teknologi Fiber Optik",
      "Router WiFi 6 gratis",
      "Garansi Uptime 99.9%",
      "Customer service 24/7",
    ],
  },
  {
    id: "velo",
    name: "Velo",
    speed: "150 Mbps",
    price: 290000,
    originalPrice: 750000,
    discount: 38,
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.3)",
    tag: "POPULER",
    features: [
      "Unlimited kuota",
      "Teknologi Fiber Optik",
      "Router WiFi 6 gratis",
      "Garansi Uptime 99.9%",
      "Customer service 24/7",
      "Static IP tersedia",
    ],
  },
  {
    id: "nexus",
    name: "Nexus",
    speed: "300 Mbps",
    price: 410000,
    originalPrice: 900000,
    discount: 40,
    color: "#22C55E",
    glow: "rgba(34,197,94,0.3)",
    tag: null,
    features: [
      "Unlimited kuota",
      "Teknologi Fiber Optik",
      "Router WiFi 6 gratis",
      "Garansi Uptime 99.9%",
      "Customer service 24/7",
      "Static IP tersedia",
      "Prioritas bandwidth",
    ],
  },
  {
    id: "mygamer",
    name: "MyGamer",
    speed: "250 Mbps",
    price: 380000,
    originalPrice: 850000,
    discount: 39,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.3)",
    tag: "GAMING",
    features: [
      "Unlimited kuota",
      "Low latency <5ms",
      "Router Gaming WiFi 6",
      "Garansi Uptime 99.9%",
      "Customer service 24/7",
      "Optimized for gaming",
    ],
  },
  {
    id: "prime",
    name: "Prime",
    speed: "500 Mbps",
    price: 570000,
    originalPrice: 1200000,
    discount: 42,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.3)",
    tag: "BEST VALUE",
    features: [
      "Unlimited kuota",
      "Teknologi Fiber Optik",
      "Router WiFi 6E gratis",
      "Garansi Uptime 99.9%",
      "Dedicated support",
      "Static IP included",
      "Prioritas bandwidth",
      "Free instalasi",
    ],
  },
];

const comboPackages = [
  {
    id: "combo-starter",
    name: "Combo Starter",
    speed: "100 Mbps",
    price: 320000,
    originalPrice: 800000,
    discount: 40,
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.3)",
    tag: null,
    features: [
      "Internet 100 Mbps",
      "MyRep Pride Box TV",
      "100+ channel TV",
      "Platform streaming",
      "Garansi Uptime 99.9%",
    ],
  },
  {
    id: "combo-family",
    name: "Combo Family",
    speed: "300 Mbps",
    price: 520000,
    originalPrice: 1100000,
    discount: 45,
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.3)",
    tag: "TERLARIS",
    features: [
      "Internet 300 Mbps",
      "MyRep Pride Box TV",
      "150+ channel TV",
      "Netflix + Disney+",
      "Garansi Uptime 99.9%",
      "2 perangkat STB",
    ],
  },
];

type PkgType = typeof fiberPackages[0];

function PackageCarousel({ packages }: { packages: PkgType[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / packages.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIdx(Math.min(idx, packages.length - 1));
  };

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / packages.length;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
    setActiveIdx(idx);
  };

  const handleSubscribe = (pkg: PkgType) => {
    const msg = `Halo! Saya tertarik berlangganan paket *${pkg.name} ${pkg.speed}* seharga Rp ${pkg.price.toLocaleString("id-ID")}/bulan. Mohon informasi lebih lanjut 🙏`;
    window.open(`https://wa.me/6287720009792?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto carousel-scroll pb-2 snap-x snap-mandatory"
      >
        {packages.map((pkg) => (
          <div key={pkg.id} className="snap-start flex-shrink-0 w-[85vw] max-w-sm">
            <div className="relative card-hover">
              {pkg.tag && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold text-white z-10 tracking-wider"
                  style={{ background: pkg.color, boxShadow: `0 4px 20px ${pkg.glow}` }}
                >
                  {pkg.tag}
                </div>
              )}
              <div
                className="h-full rounded-3xl p-6 flex flex-col bg-white border shadow-sm"
                style={{ borderColor: pkg.color + "33" }}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900">{pkg.name}</h3>
                      <div className="text-sm font-semibold mt-1" style={{ color: pkg.color }}>
                        {pkg.speed}
                      </div>
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${pkg.color}15`, border: `1px solid ${pkg.color}33`, color: pkg.color }}
                    >
                      <RocketIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-slate-400 line-through text-sm">
                        Rp {pkg.originalPrice.toLocaleString("id-ID")}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: pkg.color }}>
                        -{pkg.discount}%
                      </span>
                    </div>
                    <div className="font-display font-bold text-3xl text-slate-900">
                      Rp {pkg.price.toLocaleString("id-ID")}
                    </div>
                    <div className="text-slate-400 text-xs mt-1">per bulan · sudah termasuk PPN 11%</div>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckIcon className="w-5 h-5 flex-shrink-0" style={{ color: pkg.color } as React.CSSProperties} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(pkg)}
                  className="w-full py-3.5 rounded-2xl font-bold text-white flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}bb)`, boxShadow: `0 0 20px ${pkg.glow}` }}
                >
                  Langganan Sekarang
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {packages.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="transition-all duration-300 rounded-full border-2 border-brand-purple"
            style={{
              width: i === activeIdx ? 20 : 10,
              height: 10,
              background: i === activeIdx ? "#7C3AED" : "white",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState<PackageType>("fiber");

  const packages = activeTab === "fiber" ? fiberPackages : comboPackages;

  const handleSubscribe = (pkg: PkgType) => {
    const msg = `Halo! Saya tertarik berlangganan paket *${pkg.name} ${pkg.speed}* seharga Rp ${pkg.price.toLocaleString("id-ID")}/bulan. Mohon informasi lebih lanjut 🙏`;
    window.open(`https://wa.me/6287720009792?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="packages" className="py-24 relative overflow-hidden bg-slate-50/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
            Pilih Paket <span className="gradient-text">Terbaik</span> Kamu
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Sesuaikan kebutuhan digitalmu dengan paket internet fiber ultra cepat dan unlimited dari MyRepublic
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-slate-200 p-1.5 rounded-2xl inline-flex gap-1 shadow-sm">
            {(["fiber", "combo"] as PackageType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-purple text-white shadow-lg"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                style={activeTab === tab ? { boxShadow: "0 0 20px rgba(124,58,237,0.3)" } : {}}
              >
                {tab === "fiber" ? "Internet Fiber" : "Combo Internet + TV"}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className={`hidden sm:grid gap-6 ${packages.length > 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} justify-items-center`}>
          {packages.map((pkg) => (
            <div key={pkg.id} className="relative w-full max-w-sm card-hover">
              {pkg.tag && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold text-white z-10 tracking-wider"
                  style={{ background: pkg.color, boxShadow: `0 4px 20px ${pkg.glow}` }}
                >
                  {pkg.tag}
                </div>
              )}
              <div
                className="h-full rounded-3xl p-6 flex flex-col bg-white border shadow-sm"
                style={{ borderColor: pkg.color + "33" }}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900">{pkg.name}</h3>
                      <div className="text-sm font-semibold mt-1" style={{ color: pkg.color }}>
                        {pkg.speed}
                      </div>
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${pkg.color}15`, border: `1px solid ${pkg.color}33`, color: pkg.color }}
                    >
                      <RocketIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-slate-400 line-through text-sm">
                        Rp {pkg.originalPrice.toLocaleString("id-ID")}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: pkg.color }}>
                        -{pkg.discount}%
                      </span>
                    </div>
                    <div className="font-display font-bold text-3xl text-slate-900">
                      Rp {pkg.price.toLocaleString("id-ID")}
                    </div>
                    <div className="text-slate-400 text-xs mt-1">per bulan · sudah termasuk PPN 11%</div>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckIcon className="w-5 h-5 flex-shrink-0" style={{ color: pkg.color } as React.CSSProperties} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(pkg)}
                  className="w-full py-3.5 rounded-2xl font-bold text-white flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}bb)`, boxShadow: `0 0 20px ${pkg.glow}` }}
                >
                  Langganan Sekarang
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <PackageCarousel packages={packages} />
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          * Harga sudah termasuk PPN 11%. Syarat & ketentuan berlaku. Hubungi sales untuk info lebih lanjut.
        </p>
      </div>
    </section>
  );
}
