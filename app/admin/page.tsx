"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  supabase, uploadImage, type Block, type Article,
} from "@/lib/supabase";
import {
  ImageIcon, HeadingIcon, SubheadingIcon, ParagraphIcon,
  DocumentEmptyIcon, NewspaperIcon, SatelliteIcon,
  ArrowUpIcon, ArrowDownIcon, XIcon,
  TrashIcon, PencilIcon, EyeIcon, PlusIcon,
  LogoutIcon, ExternalLinkIcon,
  PublishedDotIcon, DraftDotIcon,
  ImagePlaceholderIcon,
} from "../components/Icons";

type FormState = {
  title: string;
  slug: string;
  description: string;
  cover_image: string;
  published: boolean;
  content: Block[];
};

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER!;
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS!;

function generateId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function slugify(text: string) {
  return text.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* ─── Block Editor ─── */
function BlockEditor({
  block, isFirst, isLast, onUpdate, onRemove, onMoveUp, onMoveDown, onImageUpload,
}: {
  block: Block;
  isFirst: boolean;
  isLast: boolean;
  onUpdate: (key: string, value: string) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onImageUpload: (file: File) => Promise<void>;
}) {
  const imgRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const blockMeta: Record<string, { icon: React.ReactNode; label: string }> = {
    heading:    { icon: <HeadingIcon className="w-3.5 h-3.5" />,    label: "Judul" },
    subheading: { icon: <SubheadingIcon className="w-3.5 h-3.5" />, label: "Sub Judul" },
    paragraph:  { icon: <ParagraphIcon className="w-3.5 h-3.5" />,  label: "Paragraf" },
    image:      { icon: <ImageIcon className="w-3.5 h-3.5" />,       label: "Gambar" },
  };

  async function handleImg(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    await onImageUpload(file);
    setUploading(false);
    if (imgRef.current) imgRef.current.value = "";
  }

  const meta = blockMeta[block.type];

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-50 px-3 py-2 border-b border-slate-200">
        <div className="flex items-center gap-2 text-slate-500">
          {meta.icon}
          <span className="text-xs font-semibold">{meta.label}</span>
        </div>
        <div className="flex items-center gap-0.5">
          <button
            type="button" onClick={onMoveUp} disabled={isFirst}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 disabled:opacity-25 transition-colors"
          >
            <ArrowUpIcon className="w-3.5 h-3.5" />
          </button>
          <button
            type="button" onClick={onMoveDown} disabled={isLast}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 disabled:opacity-25 transition-colors"
          >
            <ArrowDownIcon className="w-3.5 h-3.5" />
          </button>
          <button
            type="button" onClick={onRemove}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors ml-1"
          >
            <XIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {block.type === "heading" && (
          <input
            type="text" value={block.content}
            onChange={e => onUpdate("content", e.target.value)}
            placeholder="Masukkan judul..."
            className="w-full text-xl font-bold text-slate-900 border-0 outline-none bg-transparent placeholder:text-slate-200 placeholder:font-normal"
          />
        )}
        {block.type === "subheading" && (
          <input
            type="text" value={block.content}
            onChange={e => onUpdate("content", e.target.value)}
            placeholder="Masukkan sub judul..."
            className="w-full text-lg font-semibold text-slate-800 border-0 outline-none bg-transparent placeholder:text-slate-200 placeholder:font-normal"
          />
        )}
        {block.type === "paragraph" && (
          <textarea
            value={block.content}
            onChange={e => onUpdate("content", e.target.value)}
            placeholder="Tulis paragraf di sini..."
            rows={5}
            className="w-full text-sm text-slate-600 border-0 outline-none bg-transparent resize-y leading-relaxed placeholder:text-slate-200"
          />
        )}
        {block.type === "image" && (
          <div>
            <div
              onClick={() => imgRef.current?.click()}
              className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-slate-200 hover:border-brand-purple cursor-pointer bg-slate-50 flex items-center justify-center transition-colors group"
            >
              {block.url ? (
                <>
                  <Image src={block.url} alt={block.caption || ""} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all">
                    <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Ganti Gambar</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center p-8 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-300">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-slate-400">
                    {uploading ? "Mengupload..." : "Klik untuk upload gambar"}
                  </p>
                </div>
              )}
              {uploading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            <input ref={imgRef} type="file" accept="image/*" className="hidden" onChange={handleImg} />
            <input
              type="text" value={block.caption}
              onChange={e => onUpdate("caption", e.target.value)}
              placeholder="Caption gambar (opsional)..."
              className="w-full mt-3 text-xs text-slate-400 border-0 outline-none bg-transparent text-center placeholder:text-slate-200"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Admin Page ─── */
export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [view, setView] = useState<"list" | "form">("list");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    title: "", slug: "", description: "", cover_image: "", published: true, content: [],
  });
  const [coverUploading, setCoverUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("mr_admin") === "true") setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && view === "list") fetchArticles();
  }, [isLoggedIn, view]);

  async function fetchArticles() {
    setLoading(true);
    const { data } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    setArticles((data as Article[]) || []);
    setLoading(false);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loginForm.username === ADMIN_USER && loginForm.password === ADMIN_PASS) {
      sessionStorage.setItem("mr_admin", "true");
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Username atau password salah");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("mr_admin");
    setIsLoggedIn(false);
    setView("list");
  }

  function openCreate() {
    setEditingId(null);
    setForm({ title: "", slug: "", description: "", cover_image: "", published: true, content: [] });
    setView("form");
  }

  function openEdit(a: Article) {
    setEditingId(a.id);
    setForm({
      title: a.title, slug: a.slug,
      description: a.description || "",
      cover_image: a.cover_image || "",
      published: a.published,
      content: Array.isArray(a.content) ? a.content : [],
    });
    setView("form");
  }

  async function handleDelete(id: string) {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return;
    setDeleting(id);
    await supabase.from("articles").delete().eq("id", id);
    await fetchArticles();
    setDeleting(null);
  }

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverUploading(true);
    try {
      const url = await uploadImage(file);
      setForm(f => ({ ...f, cover_image: url }));
    } catch { alert("Upload cover gagal, coba lagi."); }
    setCoverUploading(false);
    if (coverRef.current) coverRef.current.value = "";
  }

  async function handleSave() {
    if (!form.title.trim()) return alert("Judul artikel wajib diisi.");
    if (!form.slug.trim()) return alert("Slug wajib diisi.");
    setSaving(true);
    const payload = {
      title: form.title.trim(), slug: form.slug.trim(),
      description: form.description.trim(), cover_image: form.cover_image,
      published: form.published, content: form.content,
      updated_at: new Date().toISOString(),
    };
    try {
      if (editingId) {
        const { error } = await supabase.from("articles").update(payload).eq("id", editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("articles").insert({ ...payload, created_at: new Date().toISOString() });
        if (error) throw error;
      }
      setView("list");
    } catch (err) { alert("Gagal menyimpan: " + (err as Error).message); }
    setSaving(false);
  }

  function addBlock(type: Block["type"]) {
    const block: Block = type === "image"
      ? { id: generateId(), type: "image", url: "", caption: "" }
      : { id: generateId(), type, content: "" };
    setForm(f => ({ ...f, content: [...f.content, block] }));
    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 100);
  }

  function updateBlock(id: string, key: string, value: string) {
    setForm(f => ({ ...f, content: f.content.map(b => b.id === id ? { ...b, [key]: value } as Block : b) }));
  }

  function removeBlock(id: string) {
    setForm(f => ({ ...f, content: f.content.filter(b => b.id !== id) }));
  }

  function moveBlock(id: string, dir: -1 | 1) {
    setForm(f => {
      const arr = [...f.content];
      const idx = arr.findIndex(b => b.id === id);
      const to = idx + dir;
      if (to < 0 || to >= arr.length) return f;
      [arr[idx], arr[to]] = [arr[to], arr[idx]];
      return { ...f, content: arr };
    });
  }

  async function handleBlockImageUpload(blockId: string, file: File) {
    const url = await uploadImage(file);
    updateBlock(blockId, "url", url);
  }

  /* ── LOGIN ── */
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 w-full max-w-sm">
          <div className="text-center mb-8">
            <Image src="/myrepublic.svg" alt="MyRepublic" width={140} height={40} className="h-10 w-auto mx-auto mb-5" />
            <h1 className="font-display font-bold text-xl text-slate-900">Admin Panel</h1>
            <p className="text-slate-400 text-sm mt-1">Masuk untuk mengelola artikel</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text" placeholder="Username" value={loginForm.username}
              autoComplete="username"
              onChange={e => setLoginForm(f => ({ ...f, username: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-purple transition-colors"
            />
            <div className="relative">
              <input
                type={showPass ? "text" : "password"} placeholder="Password"
                value={loginForm.password} autoComplete="current-password"
                onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-purple transition-colors pr-24"
              />
              <button type="button" onClick={() => setShowPass(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600">
                {showPass ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>
            {loginError && (
              <p className="text-red-500 text-xs text-center bg-red-50 py-2 rounded-lg">{loginError}</p>
            )}
            <button type="submit"
              className="w-full py-3 rounded-xl font-bold text-white text-sm hover:opacity-90 transition-opacity mt-1"
              style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
              Masuk
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── FORM ── */
  if (view === "form") {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Topbar */}
        <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("list")} className="text-sm text-slate-400 hover:text-slate-700 transition-colors">
              ← Kembali
            </button>
            <span className="text-slate-200 hidden sm:inline">|</span>
            <h1 className="font-bold text-slate-900 text-sm hidden sm:inline">
              {editingId ? "Edit Artikel" : "Artikel Baru"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button type="button"
              onClick={() => setForm(f => ({ ...f, published: !f.published }))}
              className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 transition-colors">
              <div className={`w-9 h-5 rounded-full transition-colors duration-300 flex items-center px-0.5 ${form.published ? "bg-brand-purple" : "bg-slate-300"}`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${form.published ? "translate-x-4" : "translate-x-0"}`} />
              </div>
              <span className="font-semibold hidden sm:inline">{form.published ? "Published" : "Draft"}</span>
            </button>
            <button onClick={handleSave} disabled={saving}
              className="px-5 py-2 rounded-xl font-semibold text-white text-sm disabled:opacity-60 hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
              {saving ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">

          {/* Cover Image */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-700 mb-3">Gambar Cover Artikel</p>
            <div onClick={() => coverRef.current?.click()}
              className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-slate-200 hover:border-brand-purple cursor-pointer bg-slate-50 flex items-center justify-center transition-colors group">
              {form.cover_image ? (
                <>
                  <Image src={form.cover_image} alt="Cover" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all">
                    <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="w-4 h-4" />
                      <span className="text-sm font-semibold">Ganti Cover</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center p-10 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{coverUploading ? "Mengupload..." : "Klik untuk upload gambar cover"}</p>
                    <p className="text-xs text-slate-300 mt-1">JPG, PNG, WebP • 16:9 direkomendasikan</p>
                  </div>
                </div>
              )}
              {coverUploading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                  <div className="w-7 h-7 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            <input ref={coverRef} type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
            {form.cover_image && (
              <button type="button" onClick={() => setForm(f => ({ ...f, cover_image: "" }))}
                className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 mt-2 transition-colors">
                <XIcon className="w-3 h-3" /> Hapus gambar cover
              </button>
            )}
          </div>

          {/* Title, Slug, Description */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Judul Artikel <span className="text-red-400">*</span>
              </label>
              <input type="text" value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value, slug: editingId ? f.slug : slugify(e.target.value) }))}
                placeholder="Contoh: 5 Tips Internet Cepat untuk WFH..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-purple transition-colors font-medium placeholder:font-normal"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Slug URL <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-brand-purple transition-colors">
                <span className="px-3 py-3 text-xs text-slate-400 bg-slate-50 border-r border-slate-200 whitespace-nowrap">/artikel/</span>
                <input type="text" value={form.slug}
                  onChange={e => setForm(f => ({ ...f, slug: slugify(e.target.value) }))}
                  className="flex-1 px-3 py-3 text-sm outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Deskripsi Singkat</label>
              <textarea value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Ringkasan artikel yang tampil di halaman listing..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-purple transition-colors resize-none placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Content Blocks */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-700 mb-5">Isi Artikel</p>

            {form.content.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-14 text-slate-300 gap-3">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center">
                  <DocumentEmptyIcon className="w-8 h-8" />
                </div>
                <p className="text-sm">Belum ada konten. Tambahkan blok di bawah.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 mb-6">
                {form.content.map((block, idx) => (
                  <BlockEditor
                    key={block.id} block={block}
                    isFirst={idx === 0} isLast={idx === form.content.length - 1}
                    onUpdate={(key, value) => updateBlock(block.id, key, value)}
                    onRemove={() => removeBlock(block.id)}
                    onMoveUp={() => moveBlock(block.id, -1)}
                    onMoveDown={() => moveBlock(block.id, 1)}
                    onImageUpload={file => handleBlockImageUpload(block.id, file)}
                  />
                ))}
              </div>
            )}

            {/* Add block */}
            <div className={form.content.length > 0 ? "pt-4 border-t border-slate-100" : ""}>
              <p className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wide">Tambah Blok</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { type: "heading" as const, icon: <HeadingIcon className="w-4 h-4" />, label: "Judul" },
                  { type: "subheading" as const, icon: <SubheadingIcon className="w-4 h-4" />, label: "Sub Judul" },
                  { type: "paragraph" as const, icon: <ParagraphIcon className="w-4 h-4" />, label: "Paragraf" },
                  { type: "image" as const, icon: <ImageIcon className="w-4 h-4" />, label: "Gambar" },
                ].map(({ type, icon, label }) => (
                  <button key={type} type="button" onClick={() => addBlock(type)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-600 hover:border-brand-purple hover:text-brand-purple hover:bg-purple-50 transition-all duration-200">
                    {icon}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Save bottom */}
          <button onClick={handleSave} disabled={saving}
            className="w-full py-4 rounded-2xl font-bold text-white text-sm disabled:opacity-60 hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
            {saving ? "Menyimpan..." : editingId ? "Simpan Perubahan" : "Publikasikan Artikel"}
          </button>
        </div>
      </div>
    );
  }

  /* ── LIST ── */
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Topbar */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <Image src="/myrepublic.svg" alt="MyRepublic" width={120} height={36} className="h-8 w-auto" />
          <span className="text-slate-200 hidden sm:inline">|</span>
          <span className="font-semibold text-slate-600 text-sm hidden sm:inline">Admin Panel</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/artikel" target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors">
            <ExternalLinkIcon className="w-3.5 h-3.5" />
            Lihat Halaman Artikel
          </a>
          <button onClick={openCreate}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white text-sm hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
            <PlusIcon className="w-4 h-4" />
            Artikel Baru
          </button>
          <button onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors">
            <LogoutIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Keluar</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-2xl text-slate-900">Semua Artikel</h2>
          <span className="text-sm text-slate-400">{articles.length} artikel</span>
        </div>

        {loading ? (
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 animate-pulse">
                <div className="w-16 h-12 rounded-xl bg-slate-100 flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-4 bg-slate-100 rounded w-1/2" />
                  <div className="h-3 bg-slate-100 rounded w-1/4" />
                </div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-100 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
              <NewspaperIcon className="w-10 h-10" />
            </div>
            <p className="text-slate-400">Belum ada artikel. Buat artikel pertama Anda!</p>
            <button onClick={openCreate}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
              <PlusIcon className="w-4 h-4" />
              Buat Artikel Pertama
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {articles.map(article => (
              <div key={article.id} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
                {/* Thumbnail */}
                <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 flex items-center justify-center">
                  {article.cover_image ? (
                    <Image src={article.cover_image} alt={article.title} width={80} height={56} className="w-full h-full object-cover" />
                  ) : (
                    <SatelliteIcon className="w-6 h-6 text-slate-300" />
                  )}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 text-sm truncate">{article.title}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${article.published ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-400"}`}>
                      {article.published
                        ? <PublishedDotIcon className="w-2 h-2" />
                        : <DraftDotIcon className="w-2 h-2" />}
                      {article.published ? "Published" : "Draft"}
                    </span>
                    <span className="text-slate-200 text-xs">•</span>
                    <span className="text-xs text-slate-400">
                      {new Date(article.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="text-slate-200 text-xs hidden sm:inline">•</span>
                    <span className="text-xs text-slate-400 hidden sm:inline">{article.content?.length || 0} blok</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a href={`/artikel/${article.slug}`} target="_blank" rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 transition-colors">
                    <EyeIcon className="w-3.5 h-3.5" /> Lihat
                  </a>
                  <button onClick={() => openEdit(article)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-brand-purple/30 text-brand-purple hover:bg-purple-50 transition-colors">
                    <PencilIcon className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button onClick={() => handleDelete(article.id)} disabled={deleting === article.id}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-red-200 text-red-400 hover:bg-red-50 transition-colors disabled:opacity-50">
                    <TrashIcon className="w-3.5 h-3.5" />
                    {deleting === article.id ? "..." : "Hapus"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
