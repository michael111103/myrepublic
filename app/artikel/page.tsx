"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FloatingWA from "../components/FloatingWA";
import { supabase, type Article } from "@/lib/supabase";
import { ImagePlaceholderIcon, SatelliteIcon } from "../components/Icons";

export default function ArtikelPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const { data } = await supabase
        .from("articles").select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      setArticles((data as Article[]) || []);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-white via-purple-50/40 to-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-purple rounded-full" />
              <span className="text-sm font-semibold text-brand-purple tracking-wide">ARTIKEL & TIPS</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
              Tips & Informasi <span className="gradient-text">Internet</span>
            </h1>
            <p className="text-slate-400 max-w-lg mx-auto text-lg">
              Temukan tips, panduan, dan informasi terbaru seputar internet fiber, streaming, dan dunia digital
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 pb-24">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-3xl overflow-hidden bg-white border border-slate-100 animate-pulse">
                  <div className="aspect-video bg-slate-100" />
                  <div className="p-5 flex flex-col gap-3">
                    <div className="h-3 bg-slate-100 rounded w-1/3" />
                    <div className="h-5 bg-slate-100 rounded w-full" />
                    <div className="h-4 bg-slate-100 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-24 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
                <SatelliteIcon className="w-10 h-10" />
              </div>
              <p className="text-slate-400 text-lg">Belum ada artikel tersedia.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link key={article.id} href={`/artikel/${article.slug}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* Cover */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-50 to-slate-100">
                    {article.cover_image ? (
                      <Image src={article.cover_image} alt={article.title} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImagePlaceholderIcon className="w-12 h-12 text-slate-300" />
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-slate-400 mb-2">
                      {new Date(article.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                    <h2 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-purple transition-colors duration-200 line-clamp-2 leading-snug flex-1">
                      {article.title}
                    </h2>
                    {article.description && (
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">{article.description}</p>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple mt-auto">
                      Baca Selengkapnya
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <FloatingWA />
    </>
  );
}
