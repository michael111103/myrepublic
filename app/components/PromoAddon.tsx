"use client";
import { StarIcon, CheckIcon, ArrowRightIcon } from "./Icons";

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
    glow: "rgba(236,72,153,0.3)",
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
    glow: "rgba(34,197,94,0.3)",
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
    glow: "rgba(245,158,11,0.3)",
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

export default function PromoAddon() {
  const handlePromo = (title: string) => {
    const msg = `Halo! Saya tertarik dengan promo *${title}* dari MyRepublic. Bisa minta info lebih lanjut? 🙏`;
    window.open(`https://wa.me/6287720009792?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* Promo section */}
      <section id="promo" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-cyan/8 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-6">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-semibold text-brand-light tracking-wider uppercase">Promo & Penawaran</span>
            </div>
            <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mb-4 tracking-tight">
              Hemat Lebih Banyak<br /><span className="gradient-text">Promo Spesial</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
              <div
                key={i}
                className="relative rounded-3xl p-6 card-hover"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${promo.color}33`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: promo.badgeColor }}
                  >
                    {promo.badge}
                  </span>
                  <span
                    className="font-display font-800 text-3xl"
                    style={{ color: promo.color }}
                  >
                    {promo.discount}
                  </span>
                </div>

                <h3 className="font-display font-700 text-lg text-white mb-2">{promo.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{promo.desc}</p>
                <div className="text-xs text-white/30 mb-6">Berlaku hingga: {promo.validUntil}</div>

                <button
                  onClick={() => handlePromo(promo.title)}
                  className="w-full py-3 rounded-2xl font-semibold text-sm text-white flex items-center justify-center gap-2 group transition-all duration-300"
                  style={{
                    background: `${promo.color}22`,
                    border: `1px solid ${promo.color}44`,
                  }}
                >
                  {promo.cta}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Addon section */}
      <section id="addon" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-semibold text-brand-light tracking-wider uppercase">✨ Addon Layanan</span>
            </div>
            <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mb-4 tracking-tight">
              Lengkapi Pengalaman<br /><span className="gradient-text">Digitalmu</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Tambahkan layanan ekstra untuk pengalaman internet yang makin sempurna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 card-hover"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${addon.color}33`,
                }}
              >
                <div
                  className="inline-flex px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                  style={{ background: addon.color }}
                >
                  NEW
                </div>
                <h3 className="font-display font-700 text-lg text-white mb-2">{addon.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{addon.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {addon.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-3 py-1.5 rounded-xl font-medium"
                      style={{
                        background: `${addon.color}18`,
                        color: addon.color,
                        border: `1px solid ${addon.color}33`,
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-800 text-2xl text-white">
                      Rp {addon.price.toLocaleString("id-ID")}
                    </div>
                    <div className="text-white/30 text-xs">per bulan</div>
                  </div>
                  <button
                    onClick={() => handlePromo(`Addon ${addon.name}`)}
                    className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                    style={{ background: addon.color, boxShadow: `0 0 20px ${addon.color}44` }}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
