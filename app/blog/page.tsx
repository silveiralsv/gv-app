import InstagramPost from "@/components/instagram-post";
import { fetchInstagramPosts } from "./actions";

export const dynamic = "force-static";

export default async function BlogPage() {
  const posts = await fetchInstagramPosts();

  return (
    <main className="w-full p-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Posts recentes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {posts.map((post) => (
          <InstagramPost
            key={post.id}
            mediaUrl={post.media_url}
            caption={post.caption}
            permalink={post.permalink}
          />
        ))}
      </div>
    </main>
  );
}
