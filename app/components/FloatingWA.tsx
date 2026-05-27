"use client";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWA() {
  const waLink = `https://wa.me/6287720009792?text=${encodeURIComponent("Halo, saya tertarik berlangganan MyRepublic. Bisa bantu saya? 🙏")}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        <div className="glass-purple px-4 py-2 rounded-2xl whitespace-nowrap">
          <span className="text-sm font-semibold text-white">Tanya Sales</span>
        </div>
      </div>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 0 30px rgba(37,211,102,0.5)",
        }}
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(37,211,102,0.3)" }} />
      </div>
    </a>
  );
}
