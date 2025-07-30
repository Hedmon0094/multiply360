
"use client";

import { useState, useMemo } from "react";
import { VerseOfTheDay } from "@/components/verse-of-the-day";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookOpen, Headphones, Bookmark, Share2, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { bibleBooks } from "@/lib/bible-data";

const readingPlans = [
    { title: "7 Days on the Life of Jesus", progress: 4, total: 7, color: "bg-primary" },
    { title: "30 Days of Prayer", progress: 12, total: 30, color: "bg-amber-500" },
    { title: "Foundations of Faith", progress: 0, total: 14, color: "bg-accent" },
];

const sampleVerses: { [key: string]: { [lang: string]: { verse: string; text: string } } } = {
  "Genesis-1": {
    swahili: { verse: "Genesis 1:1", text: "Hapo mwanzo Mungu aliziumba mbingu na nchi." },
    english: { verse: "Genesis 1:1", text: "In the beginning God created the heavens and the earth." }
  },
  "John-3": {
    swahili: { verse: "Yohana 3:16", text: "Kwa maana jinsi hii Mungu aliupenda ulimwengu, hata akamtoa Mwanawe pekee, ili kila mtu amwaminiye asipotee, bali awe na uzima wa milele." },
    english: { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." }
  },
  "Romans-8": {
     swahili: { verse: "Warumi 8:28", text: "Nasi twajua ya kuwa katika mambo yote Mungu hufanya kazi pamoja na wale wampendao katika kuwapatia mema, yaani, wale walioitwa kwa kusudi lake." },
     english: { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." }
  },
   "Matthew-28": {
    swahili: { verse: "Mathayo 28:19", text: "Basi, enendeni, mkawafanye mataifa yote kuwa wanafunzi, mkiwabatiza kwa jina la Baba, na la Mwana, na la Roho Mtakatifu;" },
    english: { verse: "Matthew 28:19", text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit," }
  },
};


export default function DevotionalCenterPage() {
  const { toast } = useToast();
  const [language, setLanguage] = useState("swahili");
  const [selectedBook, setSelectedBook] = useState("Genesis");
  const [selectedChapter, setSelectedChapter] = useState("1");

  const handleActionClick = (message: string) => {
    toast({
      title: "Feature Coming Soon!",
      description: message,
    });
  };

  const chapters = useMemo(() => {
    const book = bibleBooks.find(b => b.name === selectedBook);
    return book ? Array.from({ length: book.chapters }, (_, i) => i + 1) : [];
  }, [selectedBook]);

  const scriptureKey = `${selectedBook}-${selectedChapter}`;
  const displayScripture = sampleVerses[scriptureKey] || sampleVerses["Genesis-1"];

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
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="swahili">Kiswahili</SelectItem>
                                    <SelectItem value="english">English</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={selectedBook} onValueChange={(book) => { setSelectedBook(book); setSelectedChapter("1"); }}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Book" />
                                </SelectTrigger>
                                <SelectContent>
                                    {bibleBooks.map(book => (
                                        <SelectItem key={book.name} value={book.name}>{book.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Chapter" />
                                </SelectTrigger>
                                <SelectContent>
                                   {chapters.map(chapter => (
                                        <SelectItem key={chapter} value={String(chapter)}>Chapter {chapter}</SelectItem>
                                   ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/70 border font-serif text-lg leading-loose">
                            <p><strong>{displayScripture[language]?.verse.split(' ')[1]}</strong> {displayScripture[language]?.text}</p>
                            <p className="text-base text-muted-foreground mt-2 italic">
                                Note: This is a sample verse. Full chapter content is coming soon.
                            </p>
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
