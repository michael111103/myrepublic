"use client";
import { useEffect, useRef, useState } from "react";
import { RocketIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-white via-purple-50/40 to-white">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/8 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-cyan/6 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Headline */}
        <h1
          className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-100 text-slate-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Internet
          <br />
          <span className="gradient-text glow-text">Ultra Cepat</span>
          <br />
          <span className="text-slate-800">Tanpa Batas</span>
        </h1>

        <p
          className={`text-slate-500 text-lg leading-relaxed max-w-lg mx-auto mb-10 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Nikmati koneksi fiber optik berkecepatan tinggi dari MyRepublic.
          Streaming, gaming, work from home — semua lancar tanpa hambatan!
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="#register"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white overflow-hidden animate-border-glow"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
            }}
          >
            <RocketIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Daftar Sekarang</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>

          <a
            href={`https://wa.me/6287720009792?text=${encodeURIComponent("Halo, saya tertarik dengan paket internet MyRepublic. Bisa minta informasi lebih lanjut?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-neon-green/50 hover:shadow-md transition-all duration-300"
          >
            <WhatsAppIcon className="w-5 h-5 text-neon-green group-hover:scale-110 transition-transform" />
            <span>Tanya Sales</span>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
