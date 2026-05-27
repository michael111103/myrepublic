"use client";
import { StarIcon } from "./Icons";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Content Creator",
    avatar: "RP",
    rating: 5,
    text: "Udah 2 tahun pake MyRepublic, koneksinya stabil banget buat upload video 4K. Gak pernah ada gangguan, mantap!",
    color: "#7C3AED",
  },
  {
    name: "Dewi Anggraeni",
    role: "Work From Home",
    avatar: "DA",
    rating: 5,
    text: "Meeting zoom setiap hari gak pernah putus. Instalasi juga cepat, langsung aktif hari itu juga. Recommended!",
    color: "#06B6D4",
  },
  {
    name: "Ahmad Farid",
    role: "Gamer Profesional",
    avatar: "AF",
    rating: 5,
    text: "Ping drop ke 5ms sejak pake MyRepublic. Serius ini game changer buat gaming online. Gak bakal ganti provider lain!",
    color: "#22C55E",
  },
  {
    name: "Sari Indah",
    role: "Ibu Rumah Tangga",
    avatar: "SI",
    rating: 5,
    text: "Paket combo TV + internet keren banget, anak-anak bisa nonton dan belajar online sekaligus. Harganya terjangkau!",
    color: "#F59E0B",
  },
  {
    name: "Budi Santoso",
    role: "Pengusaha Online",
    avatar: "BS",
    rating: 5,
    text: "Bisnis online lancar berkat MyRepublic. Upload produk, livestream, payment — semua mulus tanpa gangguan.",
    color: "#EC4899",
  },
  {
    name: "Maya Putri",
    role: "Mahasiswi",
    avatar: "MP",
    rating: 5,
    text: "Streamingnya kenceng, tugas kuliah online lancar. Customer service juga responsif banget saat ada masalah.",
    color: "#8B5CF6",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-6">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-semibold text-brand-light tracking-wider uppercase">Testimoni Pelanggan</span>
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Kata Mereka<br /><span className="gradient-text">Tentang Kami</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            50.000+ pelanggan puas di seluruh area Bandung mempercayai MyRepublic untuk kebutuhan internet mereka
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group rounded-3xl p-6 card-hover"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage area */}
        <div className="mt-20 text-center">
          <h3 className="font-display font-700 text-2xl text-white mb-8">
            Area Layanan <span className="gradient-text">Bandung & Sekitarnya</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Bandung Kota", "Bandung Barat", "Cimahi", "Padalarang",
              "Lembang", "Soreang", "Banjaran", "Majalaya", "Cileunyi", "Rancaekek",
              "Margahayu", "Katapang", "Bojongsoang", "Dayeuhkolot", "Baleendah",
            ].map((area, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                style={{
                  background: "rgba(124, 58, 237, 0.1)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                }}
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-white/30 text-sm mt-6">
            * Belum tersedia di area kamu? Hubungi kami untuk informasi ekspansi jaringan.
          </p>
        </div>
      </div>
    </section>
  );
}
