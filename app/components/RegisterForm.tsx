"use client";
import { useState, FormEvent } from "react";
import { RocketIcon, WhatsAppIcon, CheckIcon } from "./Icons";

const packages = [
  "Neo 100Mbps - Rp 233.100/bulan",
  "Velo 150Mbps - Rp 290.000/bulan",
  "Nexus 300Mbps - Rp 410.000/bulan",
  "MyGamer 250Mbps - Rp 380.000/bulan",
  "Prime 500Mbps - Rp 570.000/bulan",
  "Combo Starter 100Mbps+TV - Rp 320.000/bulan",
  "Combo Family 300Mbps+TV - Rp 520.000/bulan",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  package: string;
  agreed: boolean;
}

function IconFlash() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L4.5 13.5H11L10 22L20 10H13.5L13 2Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconSatellite() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="#06B6D4" strokeWidth="2"/>
      <path d="M6.3 6.3a8 8 0 000 11.4M17.7 6.3a8 8 0 010 11.4M3.5 3.5a13 13 0 000 17M20.5 3.5a13 13 0 010 17" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function RegisterForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    package: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || !form.package || !form.agreed) return;

    const msg = `🚀 *REQUEST PEMASANGAN MYREPUBLIC*\n\n👤 *Nama:* ${form.name}\n📱 *No. HP:* ${form.phone}\n📧 *Email:* ${form.email || "-"}\n📍 *Alamat:* ${form.address}\n📦 *Paket:* ${form.package}\n\nMohon diproses ya kak, terima kasih! 🙏`;

    window.open(`https://wa.me/6287720009792?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-2xl bg-white border text-slate-800 placeholder-slate-400 text-sm transition-all duration-300 outline-none ${
      focused === field
        ? "border-brand-purple shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
        : "border-slate-200 hover:border-slate-300"
    }`;

  if (submitted) {
    return (
      <section id="register" className="py-24 relative bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white border border-slate-100 shadow-lg rounded-3xl p-12">
            <div className="w-20 h-20 rounded-full bg-neon-green/15 border border-neon-green/30 flex items-center justify-center mx-auto mb-6" style={{ boxShadow: "0 0 40px rgba(34,197,94,0.2)" }}>
              <CheckIcon className="w-10 h-10 text-neon-green" />
            </div>
            <h3 className="font-display font-bold text-3xl text-slate-900 mb-3">Request Terkirim!</h3>
            <p className="text-slate-500 mb-8">Tim sales kami akan segera menghubungi kamu via WhatsApp. Terima kasih sudah memilih MyRepublic! 🚀</p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3.5 rounded-2xl bg-brand-purple text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Daftar Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left info */}
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6 tracking-tight leading-tight">
              Mulai Nikmati<br /><span className="gradient-text">Internet Cepat</span><br />Hari Ini
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Isi formulir di samping dan tim sales kami akan menghubungi kamu via WhatsApp untuk proses pemasangan yang cepat dan mudah.
            </p>

            <div className="space-y-4">
              {[
                { icon: <IconFlash />, title: "Proses Cepat", desc: "Tim kami respons dalam 30 menit" },
                { icon: <IconWrench />, title: "Instalasi Gratis", desc: "Teknisi berpengalaman ke lokasi kamu" },
                { icon: <IconSatellite />, title: "Langsung Online", desc: "Aktif dalam 1-3 hari kerja" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-slate-100 shadow-sm rounded-2xl p-4">
                  <span className="flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                    <div className="text-slate-400 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <div
              className="rounded-3xl p-8 bg-white border border-slate-100 shadow-lg"
            >
              <h3 className="font-display font-bold text-xl text-slate-900 mb-6">Formulir Langganan Internet</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("name")}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    placeholder="Contoh: 081234567890"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("phone")}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    placeholder="Contoh: nama@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("email")}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Alamat Pemasangan *
                  </label>
                  <textarea
                    placeholder={`Contoh: Jl. Sudirman No. 123, Kel. Suka Maju, Kec. Jaya`}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    onFocus={() => setFocused("address")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("address")} resize-none min-h-[90px]`}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Pilihan Paket Internet *
                  </label>
                  <select
                    value={form.package}
                    onChange={(e) => setForm({ ...form, package: e.target.value })}
                    onFocus={() => setFocused("package")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("package")} cursor-pointer`}
                    required
                  >
                    <option value="" disabled className="bg-white text-slate-400">Pilih Paket...</option>
                    {packages.map((pkg) => (
                      <option key={pkg} value={pkg} className="bg-white text-slate-800">{pkg}</option>
                    ))}
                  </select>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={form.agreed}
                      onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                        form.agreed
                          ? "bg-brand-purple border-brand-purple"
                          : "border-slate-300 group-hover:border-slate-400"
                      }`}
                    >
                      {form.agreed && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 leading-relaxed">
                    Anda telah membaca dan menyetujui{" "}
                    <span className="text-brand-purple hover:underline cursor-pointer">Kebijakan Privasi</span> kami.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!form.agreed}
                  className="w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                  style={{
                    background: "linear-gradient(135deg, #22C55E, #16A34A)",
                    boxShadow: form.agreed ? "0 0 30px rgba(34,197,94,0.3)" : "none",
                  }}
                >
                  <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  REQUEST PEMASANGAN
                </button>

                <p className="text-center text-slate-400 text-xs">
                  Form ini akan mengarahkan ke WhatsApp sales kami
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
