import { WifiIcon, WhatsAppIcon, TiktokIcon, InstagramIcon, FacebookIcon, LocationIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  const waLink = `https://wa.me/6287720009792?text=${encodeURIComponent("Halo, saya ingin bertanya tentang paket internet MyRepublic 🙏")}`;

  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* CTA Banner */}
        <div
          className="rounded-3xl p-10 mb-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(6,182,212,0.15) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent" />

          <h2 className="font-display font-800 text-3xl sm:text-4xl text-white mb-4">
            Untuk Segala Kebutuhan Online &<br />
            Hiburan, <span className="gradient-text">MyRepublic</span> Tersedia Untuk Kamu
          </h2>
          <p className="text-white/50 mb-8">Hubungi sales kami sekarang dan dapatkan penawaran terbaik!</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #22C55E, #16A34A)",
                boxShadow: "0 0 30px rgba(34,197,94,0.4)",
              }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              0812 1244 9194
            </a>
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white glass border border-white/10 hover:border-brand-purple/50 transition-all duration-300"
            >
              Daftar Online Sekarang
            </a>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-purple flex items-center justify-center">
                <WifiIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-800 text-xl text-white">
                  My<span className="gradient-text">Republic</span>
                </span>
                <div className="text-[9px] text-brand-light/50 tracking-widest uppercase leading-none">Bandung</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Sales resmi MyRepublic Bandung. Melayani pemasangan internet fiber optik ultra cepat dan unlimited untuk area Bandung dan sekitarnya.
            </p>

            <div className="flex items-start gap-2 text-white/40 text-sm mb-3">
              <LocationIcon className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-purple" />
              <span>Jl. Pungkur No.217c, Balonggede, Kec. Lengkong, Kota Bandung, Jawa Barat 40252</span>
            </div>

            <div className="flex items-center gap-2 text-white/40 text-sm">
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
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-purple/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-5">Paket Internet</h4>
            <ul className="space-y-3">
              {["Neo 100Mbps", "Velo 150Mbps", "Nexus 300Mbps", "MyGamer 250Mbps", "Prime 500Mbps"].map((pkg) => (
                <li key={pkg}>
                  <a
                    href="#packages"
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-purple rounded-full group-hover:w-2 transition-all duration-200" />
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-5">Quick Link</h4>
            <ul className="space-y-3">
              {[
                { label: "Promo", href: "#promo" },
                { label: "Addon", href: "#addon" },
                { label: "Daftar", href: "#register" },
                { label: "Paket Combo TV", href: "#packages" },
                { label: "Kontak Sales", href: waLink },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-neon-cyan rounded-full group-hover:w-2 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2024 MyRepublic Bandung. Sales Resmi MyRepublic Indonesia.
          </p>
          <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((link) => (
              <a key={link} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
