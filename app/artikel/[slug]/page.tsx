"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import FloatingWA from "../../components/FloatingWA";
import { supabase, type Article, type Block } from "@/lib/supabase";
import { NotFoundIcon, RocketIcon, ImagePlaceholderIcon } from "../../components/Icons";

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-12 mb-4 leading-tight">
          {block.content}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="font-display font-bold text-xl text-slate-800 mt-8 mb-3 leading-snug">
          {block.content}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-slate-600 text-base leading-relaxed mb-5">{block.content}</p>
      );
    case "image":
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
            <Image src={block.url} alt={block.caption || ""} fill className="object-cover" />
          </div>
          {block.caption && (
            <figcaption className="text-center text-sm text-slate-400 mt-3 italic">{block.caption}</figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

export default function ArtikelDetailPage() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      const { data } = await supabase.from("articles").select("*")
        .eq("slug", params.slug as string).eq("published", true).single();
      setArticle(data as Article);
      setLoading(false);
    }
    if (params.slug) fetchArticle();
  }, [params.slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-5 px-4">
          <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
            <NotFoundIcon className="w-10 h-10" />
          </div>
          <div className="text-center">
            <p className="text-slate-700 text-lg font-semibold mb-1">Artikel tidak ditemukan</p>
            <p className="text-slate-400 text-sm">Artikel ini mungkin sudah dihapus atau belum dipublikasikan.</p>
          </div>
          <Link href="/artikel" className="flex items-center gap-2 text-brand-purple font-semibold text-sm hover:underline">
            ← Kembali ke Artikel
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Cover image */}
        {article.cover_image ? (
          <div className="relative w-full h-64 sm:h-[420px] bg-slate-200 mt-16">
            <Image src={article.cover_image} alt={article.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-3xl mx-auto">
              <p className="text-white/70 text-sm mb-2">
                {new Date(article.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h1 className="font-display font-bold text-2xl sm:text-4xl text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="w-full h-32 bg-gradient-to-br from-purple-50 to-slate-100 mt-16 flex items-center justify-center">
            <ImagePlaceholderIcon className="w-10 h-10 text-slate-300" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <Link href="/artikel"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-purple transition-colors duration-200 mb-8">
            ← Kembali ke Artikel
          </Link>

          {/* Header — hanya tampil jika tidak ada cover */}
          {!article.cover_image && (
            <div className="mb-8 pt-4">
              <p className="text-sm text-slate-400 mb-3">
                {new Date(article.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4 leading-tight">
                {article.title}
              </h1>
            </div>
          )}

          {/* Description lead */}
          {article.description && (
            <div className="mb-8 mt-6">
              <p className="text-slate-500 text-lg leading-relaxed border-l-4 border-brand-purple pl-5">
                {article.description}
              </p>
            </div>
          )}

          <div className="h-px bg-gradient-to-r from-brand-purple/40 via-brand-purple/10 to-transparent mb-10" />

          {/* Content blocks */}
          <div>
            {Array.isArray(article.content) &&
              article.content.map((block) => (
                <BlockRenderer key={block.id} block={block} />
              ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-3xl text-center border border-purple-100"
            style={{ background: "linear-gradient(135deg, #f5f3ff, #faf5ff)" }}>
            <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED22, #7C3AED11)" }}>
              <RocketIcon className="w-6 h-6 text-brand-purple" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Tertarik dengan Internet MyRepublic?
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Dapatkan koneksi fiber ultra cepat untuk semua aktivitas digital kamu
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}>
                Lihat Paket Internet →
              </Link>
              <a href={`https://wa.me/6287720009792?text=${encodeURIComponent("Halo, saya tertarik dengan paket MyRepublic setelah membaca artikel 🙏")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl font-bold text-slate-700 bg-white border border-slate-200 text-sm hover:border-brand-purple/40 transition-colors">
                Hubungi Sales
              </a>
            </div>
          </div>
        </div>
      </main>
      <FloatingWA />
    </>
  );
}
