"use server";

export type InstagramPost = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
};

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    console.error("Missing INSTAGRAM_ACCESS_TOKEN environment variable");
    return [];
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${token}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("Failed to fetch Instagram posts", res.status);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data.data) ? (data.data as InstagramPost[]) : [];
  } catch (err) {
    console.error("Error fetching Instagram posts", err);
    return [];
  }
}
