import Image from "next/image";
import { Card, CardContent } from "./ui/card";

type InstagramPostProps = {
  mediaUrl: string;
  caption?: string;
  permalink: string;
};

export default function InstagramPost({
  mediaUrl,
  caption,
  permalink,
}: InstagramPostProps) {
  return (
    <Card className="overflow-hidden">
      <a href={permalink} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-square w-full">
          <Image
            src={mediaUrl}
            alt={caption ?? "Instagram post"}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </a>
      {caption ? (
        <CardContent className="p-4">
          <p className="text-sm line-clamp-3">{caption}</p>
        </CardContent>
      ) : null}
    </Card>
  );
}
