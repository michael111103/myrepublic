import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type Block =
  | { id: string; type: "paragraph"; content: string }
  | { id: string; type: "heading"; content: string }
  | { id: string; type: "subheading"; content: string }
  | { id: string; type: "image"; url: string; caption: string };

export type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image: string;
  content: Block[];
  published: boolean;
  created_at: string;
  updated_at: string;
};

export async function uploadImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop();
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { data, error } = await supabase.storage
    .from("article-images")
    .upload(filename, file, { upsert: true });
  if (error) throw error;
  const {
    data: { publicUrl },
  } = supabase.storage.from("article-images").getPublicUrl(data.path);
  return publicUrl;
}
