"use client";
import { StarIcon } from "./Icons";
import { useEffect, useRef, useState } from "react";

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
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(idx);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple/4 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
            Kata Mereka<br /><span className="gradient-text">Tentang Kami</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            50.000+ pelanggan puas di seluruh area Bandung mempercayai MyRepublic untuk kebutuhan internet mereka
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group rounded-3xl p-6 card-hover bg-white border border-slate-100 shadow-sm hover:shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 p-6 bg-white border border-slate-100 shadow-sm rounded-3xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <StarIcon key={j} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="transition-all duration-300 rounded-full border-2 border-brand-purple"
                style={{
                  width: i === current ? 20 : 10,
                  height: 10,
                  background: i === current ? "#7C3AED" : "white",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
