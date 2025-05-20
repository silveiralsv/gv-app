export async function getInstagramPosts() {
  "use server";
  return new Promise<{ id: number; title: string; description: string }[]>(
    (resolve) => {
      const posts = [
        {
          id: 1,
          title: "Direito Civil",
          description:
            "Atuamos em diversas áreas do Direito Civil, oferecendo soluções jurídicas personalizadas para cada cliente.",
        },
      ];
      console.log("Fetching Instagram posts...");
      resolve(posts);
    }
  );
}
