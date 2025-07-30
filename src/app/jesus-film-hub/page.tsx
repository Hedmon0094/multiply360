
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Film, Share2, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const languages = ["All", "Kiswahili", "English", "Luo", "Kalenjin"];

const videoContent = [
  {
    title: "Jesus Film - Kiswahili",
    description: "The full gospel film in the Kiswahili language.",
    duration: "2h 7min",
    language: "Kiswahili",
    type: "Full Film",
    videoUrl: "https://www.youtube.com/embed/0_yMrq1iE5Y",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "Jesus teaching crowd",
  },
  {
    title: "The Resurrection (Luo)",
    description: "A short clip of the resurrection story from the Jesus Film.",
    duration: "4min 32s",
    language: "Luo",
    type: "Gospel Clip",
    videoUrl: "https://www.youtube.com/embed/0_yMrq1iE5Y",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "empty tomb sunrise",
  },
  {
    title: "Jesus Heals the Blind (English)",
    description: "Witness the miracle of Jesus restoring sight to the blind.",
    duration: "3min 15s",
    language: "English",
    type: "Gospel Clip",
    videoUrl: "https://www.youtube.com/embed/0_yMrq1iE5Y",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "Jesus helping man",
  },
  {
    title: "A Disciple's Testimony (Kalenjin)",
    description: "A powerful testimony from a life transformed by the Jesus Film.",
    duration: "5min 10s",
    language: "Kalenjin",
    type: "Testimony",
    videoUrl: "https://www.youtube.com/embed/0_yMrq1iE5Y",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "person speaking",
  },
];


export default function JesusFilmHubPage() {
    const [activeLanguage, setActiveLanguage] = useState("All");
    const { toast } = useToast();

    const handleActionClick = (message: string) => {
        toast({
            title: "Feature Coming Soon!",
            description: message,
        });
    };

    const filteredContent = videoContent.filter(
        (video) => activeLanguage === "All" || video.language === activeLanguage
    );

    return (
        <div className="flex flex-col gap-8 bg-gradient-to-b from-card via-blue-50 to-blue-100 dark:from-card dark:via-blue-900/20 dark:to-blue-900/40 -m-4 sm:-m-6 md:-m-8 p-4 sm:p-6 md:p-8">
            <header className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-primary">🎥 Jesus Film Hub</h1>
                <p className="text-lg text-muted-foreground mt-2 italic">“That all may see and believe.” — Inspired by John 20:31</p>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Let every screen be a mission field. Watch the story of Jesus, share it with others, and see lives transformed by the Gospel.
                </p>
            </header>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                {languages.map((lang) => (
                    <Button 
                        key={lang}
                        variant={activeLanguage === lang ? "default" : "outline"}
                        onClick={() => setActiveLanguage(lang)}
                        className="rounded-full transition-all duration-300"
                    >
                        {lang}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContent.map((video) => (
                    <Card key={video.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                        <CardHeader className="p-0 relative">
                            <div className="w-full aspect-video bg-muted flex items-center justify-center">
                                 <Youtube className="h-16 w-16 text-muted-foreground/50" />
                            </div>
                            <Badge variant="secondary" className="absolute top-2 right-2">{video.type}</Badge>
                        </CardHeader>
                        <CardContent className="p-4 flex-grow">
                            <h3 className="text-lg font-semibold">{video.title}</h3>
                            <p className="text-sm text-muted-foreground">{video.description}</p>
                        </CardContent>
                        <CardFooter className="p-4 bg-muted/50 flex justify-between items-center">
                             <p className="text-sm font-medium text-muted-foreground">{video.duration}</p>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => handleActionClick("Offline download functionality is in development.")}>
                                    <Download className="mr-2 h-4 w-4" /> Download
                                </Button>
                                <Button size="sm" onClick={() => handleActionClick("Sharing to WhatsApp and other platforms is coming soon!")}>
                                    <Share2 className="mr-2 h-4 w-4" /> Share
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

             {filteredContent.length === 0 && (
                <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50 border border-dashed mt-6 text-center">
                    <p className="text-muted-foreground">No videos available in {activeLanguage} yet. <br/> Check back soon!</p>
                </div>
            )}
        </div>
    );
}
