"use client";
import { WifiIcon, SpeedIcon, ShieldIcon, TvIcon, GameIcon, StreamIcon } from "./Icons";

const features = [
  {
    icon: SpeedIcon,
    title: "Ultra High Speed",
    desc: "Kecepatan fiber optik hingga 1 Gbps untuk semua aktivitas digital tanpa buffering.",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    icon: ShieldIcon,
    title: "Koneksi Stabil",
    desc: "Garansi uptime 99.9% dengan infrastruktur jaringan terpercaya yang terus dipantau.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.3)",
  },
  {
    icon: StreamIcon,
    title: "Streaming 4K",
    desc: "Nikmati streaming Netflix, YouTube, Disney+ dalam kualitas 4K tanpa lag.",
    color: "#22C55E",
    glow: "rgba(34,197,94,0.3)",
  },
  {
    icon: GameIcon,
    title: "Gaming Tanpa Hambatan",
    desc: "Latency rendah di bawah 5ms untuk pengalaman gaming online yang kompetitif.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: TvIcon,
    title: "Hiburan Terlengkap",
    desc: "Paket combo internet + TV dengan 150+ channel dan platform streaming populer.",
    color: "#EC4899",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    icon: WifiIcon,
    title: "WiFi Seluruh Rumah",
    desc: "Router WiFi 6 generasi terbaru untuk jangkauan sinyal optimal di seluruh rumah.",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.3)",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-6">
            <WifiIcon className="w-4 h-4 text-brand-light" />
            <span className="text-xs font-semibold text-brand-light tracking-wider uppercase">Keunggulan Kami</span>
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Kenapa <span className="gradient-text">MyRepublic</span>?
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Teknologi terdepan, layanan terpercaya, dan harga terjangkau untuk semua kebutuhan digital kamu
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-6 card-hover cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `inset 0 0 0 1px ${feat.color}44` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${feat.color}18`,
                  border: `1px solid ${feat.color}33`,
                  boxShadow: `0 0 20px ${feat.glow}`,
                  ["--feat-color" as string]: feat.color,
                }}
              >
                <feat.icon className={`w-7 h-7 [color:var(--feat-color)]`} />
              </div>

              <h3 className="font-display font-700 text-lg text-white mb-2">{feat.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: `linear-gradient(to right, transparent, ${feat.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-20 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, rep) =>
              ["Ultra Fast", "Unlimited", "Low Latency", "Fiber Optic", "24/7 Support", "Gaming Ready", "4K Streaming", "Stable Connection"].map((text, i) => (
                <div key={`${rep}-${i}`} className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-brand-purple rounded-full" />
                  <span className="text-sm font-semibold text-white/60">{text}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
