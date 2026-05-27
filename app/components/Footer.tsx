import Image from "next/image";
import { WhatsAppIcon, TiktokIcon, InstagramIcon, FacebookIcon, LocationIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  const waLink = `https://wa.me/6287720009792?text=${encodeURIComponent("Halo, saya ingin bertanya tentang paket internet MyRepublic 🙏")}`;

  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* CTA Banner */}
        <div
          className="rounded-3xl p-10 mb-16 text-center relative overflow-hidden bg-white border border-purple-100 shadow-sm"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent" />

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Untuk Segala Kebutuhan Online &<br />
            Hiburan, <span className="gradient-text">MyRepublic</span> Tersedia Untuk Kamu
          </h2>
          <p className="text-slate-500 mb-8">Hubungi sales kami sekarang dan dapatkan penawaran terbaik!</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #22C55E, #16A34A)",
                boxShadow: "0 0 30px rgba(34,197,94,0.3)",
              }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              0812 1244 9194
            </a>
            
              href="#register"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-brand-purple/50 transition-all duration-300"
            >
              Daftar Online Sekarang
            </a>
          </div>
        </div>

        {/* Footer brand only */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <Image
              src="/myrepublic.svg"
              alt="MyRepublic Bandung"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
            Sales resmi MyRepublic Bandung. Melayani pemasangan internet fiber optik ultra cepat dan unlimited untuk area Bandung dan sekitarnya.
          </p>

          <div className="flex items-start gap-2 text-slate-400 text-sm mb-3">
            <LocationIcon className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-purple" />
            <span>Jl. Pungkur No.217c, Balonggede, Kec. Lengkong, Kota Bandung, Jawa Barat 40252</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <PhoneIcon className="w-4 h-4 text-brand-purple" />
            <span>0812 1244 9194</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-6">
            {[
              { icon: TiktokIcon, href: "#" },
              { icon: FacebookIcon, href: "#" },
              { icon: InstagramIcon, href: "#" },
              { icon: WhatsAppIcon, href: waLink },
            ].map((social, i) => (
              
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-purple hover:border-brand-purple/40 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © 2024 MyRepublic Bandung. Sales Resmi MyRepublic Indonesia.
          </p>
          <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((link) => (
              <a key={link} href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
