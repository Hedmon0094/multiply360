
"use client";

import { VerseOfTheDay } from "@/components/verse-of-the-day";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookOpen, Headphones, Bookmark, Share2, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const readingPlans = [
    { title: "7 Days on the Life of Jesus", progress: 4, total: 7, color: "bg-primary" },
    { title: "30 Days of Prayer", progress: 12, total: 30, color: "bg-amber-500" },
    { title: "Foundations of Faith", progress: 0, total: 14, color: "bg-accent" },
]

export default function DevotionalCenterPage() {
  const { toast } = useToast();

  const handleActionClick = (message: string) => {
    toast({
      title: "Feature Coming Soon!",
      description: message,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Devotional Center</h1>
        <p className="text-muted-foreground">
          Your daily source of inspiration and spiritual growth.
        </p>
      </div>

       <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="text-primary"/>
                            Scripture Reader
                        </CardTitle>
                        <CardDescription>Explore the Word of God in your language.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Select defaultValue="swahili">
                                <SelectTrigger>
                                    <SelectValue placeholder="Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="swahili">Kiswahili</SelectItem>
                                    <SelectItem value="english">English</SelectItem>
                                    <SelectItem value="luo">Luo</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="genesis">
                                <SelectTrigger>
                                    <SelectValue placeholder="Book" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="genesis">Genesis</SelectItem>
                                    <SelectItem value="matthew">Matthew</SelectItem>
                                    <SelectItem value="revelation">Revelation</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="1">
                                <SelectTrigger>
                                    <SelectValue placeholder="Chapter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Chapter 1</SelectItem>
                                    <SelectItem value="2">Chapter 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/70 border font-serif text-lg leading-loose">
                            <p><strong>1</strong> Hapo mwanzo Mungu aliziumba mbingu na nchi.</p>
                            <p><strong>2</strong> Nayo nchi ilikuwa ukiwa, tena utupu, na giza lilikuwa juu ya uso wa vilindi vya maji; Roho ya Mungu ikatulia juu ya uso wa maji.</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-between items-center gap-2">
                        <div className="flex gap-2">
                             <Button variant="outline" size="sm" onClick={() => handleActionClick("Audio Bible streaming is in development.")}>
                                <Headphones className="mr-2 h-4 w-4 text-sky-500" />
                                Listen
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleActionClick("Prayer prompts are coming soon.")}>
                                🙏 Pray This
                            </Button>
                        </div>
                        <div className="flex gap-2">
                           <Button variant="ghost" size="icon" onClick={() => handleActionClick("Bookmarking functionality is being developed.")}>
                                <Bookmark className="h-5 w-5" />
                            </Button>
                             <Button variant="ghost" size="icon" onClick={() => handleActionClick("Sharing scriptures to social media is coming soon.")}>
                                <Share2 className="h-5 w-5" />
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="space-y-8">
                <VerseOfTheDay />
                 <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Reading Plans</CardTitle>
                        <CardDescription>Follow a plan to grow in your faith.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       {readingPlans.map(plan => (
                           <div key={plan.title} className="p-3 rounded-lg border bg-muted/50 hover:bg-muted/80 transition-colors cursor-pointer" onClick={() => handleActionClick("Reading plans will be fully interactive soon.")}>
                               <div className="flex justify-between items-center">
                                    <div>
                                       <p className="font-semibold">{plan.title}</p>
                                       <p className="text-sm text-muted-foreground">{plan.progress > 0 ? `${plan.progress} of ${plan.total} days completed` : `${plan.total} days`}</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                               </div>
                           </div>
                       ))}
                    </CardContent>
                </Card>
            </div>
       </div>

    </div>
  );
}
