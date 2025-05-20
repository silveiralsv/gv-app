import { getInstagramPosts } from "@/lib/get-instagram-posts";

export default async function Posts() {
  const now = Date.now();
  console.log("last time posts were fetched", now);
  const posts = await getInstagramPosts();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="flex flex-col gap-2">
            <h1 className="text-2xl">{post.title}</h1>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}
