"use client";
import { CheckIcon, ArrowRightIcon } from "./Icons";
import { useRef, useState } from "react";

const promos = [
  {
    title: "Promo Spesial Lebaran",
    badge: "TERBATAS",
    badgeColor: "#EC4899",
    discount: "50%",
    desc: "Dapatkan diskon 50% untuk 3 bulan pertama berlangganan paket Neo & Velo. Berlaku untuk pendaftaran baru.",
    validUntil: "31 Desember 2024",
    cta: "Klaim Promo",
    color: "#EC4899",
  },
  {
    title: "Gratis Instalasi",
    badge: "NEW",
    badgeColor: "#22C55E",
    discount: "FREE",
    desc: "Gratis biaya instalasi untuk semua paket! Hemat hingga Rp 350.000 untuk pemasangan baru di area Bandung.",
    validUntil: "31 Januari 2025",
    cta: "Daftar Sekarang",
    color: "#22C55E",
  },
  {
    title: "Refer A Friend",
    badge: "CASHBACK",
    badgeColor: "#F59E0B",
    discount: "Rp 100K",
    desc: "Ajak teman berlangganan MyRepublic dan dapatkan cashback Rp 100.000 untuk setiap referral yang berhasil.",
    validUntil: "Berlaku terus",
    cta: "Mulai Referral",
    color: "#F59E0B",
  },
];

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
    const msg = `Halo! Saya tertarik dengan promo *${title}* dari MyRepublic. Bisa minta info lebih lanjut? 🙏`;
    window.open(`https://wa.me/6287720009792?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const renderPromoCard = (promo: unknown) => {
    const p = promo as typeof promos[0];
    return (
      <div
        className="relative rounded-3xl p-6 card-hover h-full bg-white border shadow-sm"
        style={{ borderColor: p.color + "33" }}
      >
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: p.badgeColor }}>
            {p.badge}
          </span>
          <span className="font-display font-bold text-3xl" style={{ color: p.color }}>
            {p.discount}
          </span>
        </div>
        <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{p.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
        <div className="text-xs text-slate-400 mb-6">Berlaku hingga: {p.validUntil}</div>
        <button
          onClick={() => handlePromo(p.title)}
          className="w-full py-3 rounded-2xl font-semibold text-sm text-white flex items-center justify-center gap-2 group transition-all duration-300"
          style={{ background: p.color + "22", border: `1px solid ${p.color}44`, color: p.color }}
        >
          {p.cta}
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    );
  };

  const renderAddonCard = (addon: unknown) => {
    const a = addon as typeof addons[0];
    return (
      <div
        className="rounded-3xl p-6 card-hover h-full bg-white border shadow-sm"
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
            className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
            style={{ background: a.color, boxShadow: `0 0 20px ${a.color}44` }}
          >
            Tambah
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Promo section */}
      <section id="promo" className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-cyan/4 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
              Hemat Lebih Banyak<br /><span className="gradient-text">Promo Spesial</span>
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {promos.map((promo, i) => (
              <div key={i}>{renderPromoCard(promo)}</div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <HorizontalCarousel items={promos} renderCard={renderPromoCard} />
          </div>
        </div>
      </section>

      {/* Addon section */}
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
    </>
  );
}
