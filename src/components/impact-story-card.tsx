
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, MapPin, Tag, User } from "lucide-react";

type Story = {
  title: string;
  region: string;
  theme: string;
  storySnippet: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  submittedBy: string;
  likes: number;
  date: string;
  dataAiHint: string;
};

export function ImpactStoryCard({ story }: { story: Story }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-amber-50/20 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/50">
      <CardHeader>
        <div className="relative h-48 w-full rounded-lg overflow-hidden">
            <Image 
                src={story.mediaUrl}
                alt={story.title}
                fill
                className="object-cover"
                data-ai-hint={story.dataAiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
                 <h3 className="text-xl font-bold text-white tracking-tight">{story.title}</h3>
            </div>
             <div className="absolute top-2 right-2 flex gap-2">
                <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-black/80">
                    <MapPin className="mr-1 h-3 w-3" />
                    {story.region}
                </Badge>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{story.storySnippet}</p>
        <div className="flex items-center text-xs text-muted-foreground gap-2">
             <User className="h-3 w-3" />
            <span>Shared by {story.submittedBy}</span>
        </div>
        <div className="flex items-center text-xs text-muted-foreground gap-2 mt-1">
             <Tag className="h-3 w-3" />
            <span>Theme: {story.theme}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-amber-100/30 dark:bg-amber-900/20 p-4 flex justify-end">
        <Button variant="outline" className="bg-white dark:bg-card">
            <Heart className="mr-2 h-4 w-4 text-rose-500"/>
            <span className="font-semibold">{story.likes}</span>
            <span className="sr-only">Likes</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
