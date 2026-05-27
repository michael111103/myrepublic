"use client";
import { ArrowRightIcon } from "./Icons";
import { useRef, useState } from "react";

const addons = [
  {
    name: "MyRep Pride TV Box",
    price: 99000,
    desc: "Set-top box streaming dengan akses 150+ channel TV dan platform streaming populer.",
    features: ["Netflix", "Disney+", "YouTube 4K", "150+ Channel"],
    color: "#7C3AED",
  },
  {
    name: "Static IP Address",
    price: 50000,
    desc: "IP statis untuk kebutuhan server, remote access, atau bisnis yang membutuhkan IP tetap.",
    features: ["IP Tetap", "Full Control", "Cocok untuk Server", "Business Ready"],
    color: "#06B6D4",
  },
  {
    name: "WiFi Extender",
    price: 35000,
    desc: "Perpanjang jangkauan WiFi ke seluruh sudut rumah dengan extender berkualitas tinggi.",
    features: ["Jangkauan Lebih Luas", "Plug & Play", "Dual Band", "Easy Setup"],
    color: "#22C55E",
  },
];

function HorizontalCarousel({ items, renderCard }: {
  items: unknown[];
  renderCard: (item: unknown, i: number) => React.ReactNode;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / items.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIdx(Math.min(idx, items.length - 1));
  };

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / items.length;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
    setActiveIdx(idx);
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto carousel-scroll pb-2 snap-x snap-mandatory"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-start flex-shrink-0 w-[85vw] max-w-sm">
            {renderCard(item, i)}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {items.map((_, i) => (
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

export default function PromoAddon() {
  const handlePromo = (title: string) => {
    const msg = `Halo! Saya tertarik dengan *${title}* dari MyRepublic. Bisa minta info lebih lanjut? 🙏`;
    window.open(`https://wa.me/6287720009792?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const renderAddonCard = (addon: unknown) => {
    const a = addon as typeof addons[0];
    return (
      <div
        className="rounded-3xl p-6 h-full bg-white border shadow-sm"
        style={{ borderColor: a.color + "33" }}
      >
        <div className="inline-flex px-3 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ background: a.color }}>
          NEW
        </div>
        <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{a.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{a.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {a.features.map((feat) => (
            <span
              key={feat}
              className="text-xs px-3 py-1.5 rounded-xl font-medium"
              style={{ background: `${a.color}18`, color: a.color, border: `1px solid ${a.color}33` }}
            >
              {feat}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-display font-bold text-2xl text-slate-900">
              Rp {a.price.toLocaleString("id-ID")}
            </div>
            <div className="text-slate-400 text-xs">per bulan</div>
          </div>
          <button
            onClick={() => handlePromo(`Addon ${a.name}`)}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300"
            style={{ background: a.color, boxShadow: `0 0 20px ${a.color}44` }}
          >
            Tambah
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="addon" className="py-24 relative bg-slate-50/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
            Lengkapi Pengalaman<br /><span className="gradient-text">Digitalmu</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Tambahkan layanan ekstra untuk pengalaman internet yang makin sempurna
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {addons.map((addon, i) => (
            <div key={i}>{renderAddonCard(addon)}</div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <HorizontalCarousel items={addons} renderCard={renderAddonCard} />
        </div>
      </div>
    </section>
  );
}
