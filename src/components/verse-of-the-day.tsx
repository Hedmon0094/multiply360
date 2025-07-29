
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Share, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function VerseOfTheDay() {
  return (
    <Card className="relative flex flex-col justify-between overflow-hidden text-primary-foreground shadow-lg h-full bg-gradient-to-br from-amber-400 to-amber-600">
        <Image 
            src="https://placehold.co/600x400.png"
            alt="Inspirational background"
            fill
            className="object-cover opacity-20"
            data-ai-hint="sunrise landscape"
        />
        <div className="relative z-10 p-6 flex flex-col h-full">
            <div className="flex-grow">
                <blockquote className="border-l-2 border-white/80 pl-4 italic text-lg">
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
                </blockquote>
                <p className="text-right font-semibold mt-4 text-base">Matthew 28:19</p>
            </div>

            <div className="flex justify-end gap-2 mt-4">
                <Button variant="ghost" size="icon" className="text-white/80 hover:bg-white/20 hover:text-white rounded-full">
                    <Share className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white/80 hover:bg-white/20 hover:text-white rounded-full">
                    <Bookmark className="h-5 w-5" />
                     <span className="sr-only">Bookmark</span>
                </Button>
            </div>
        </div>
    </Card>
  );
}
