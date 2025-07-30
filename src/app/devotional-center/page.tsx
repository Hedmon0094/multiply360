
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
    swahili: { verse: "Mwanzo 1:1", text: "Hapo mwanzo Mungu aliziumba mbingu na nchi." },
    english: { verse: "Genesis 1:1", text: "In the beginning God created the heavens and the earth." }
  },
  "John-1": {
    swahili: { verse: "Yohana 1:1", text: "Hapo mwanzo kulikuwako Neno, naye Neno alikuwako kwa Mungu, naye Neno alikuwa Mungu." },
    english: { verse: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." }
  },
  "Romans-1": {
     swahili: { verse: "Warumi 1:16", text: "Kwa maana siionei haya Injili; kwa sababu ni uweza wa Mungu uuletao wokovu, kwa kila aaminiye, kwa Myahudi kwanza, na kwa Myunani pia." },
     english: { verse: "Romans 1:16", text: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile." }
  },
   "Matthew-1": {
    swahili: { verse: "Mathayo 1:21", text: "Naye atazaa mwana, nawe utamwita jina lake Yesu; maana, yeye ndiye atakayewaokoa watu wake na dhambi zao." },
    english: { verse: "Matthew 1:21", text: "She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins." }
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
  const displayScripture = sampleVerses[scriptureKey] || sampleVerses[`${selectedBook}-1`] || sampleVerses["Genesis-1"];

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
                            <p><strong>{displayScripture[language]?.verse}</strong></p>
                            <p>{displayScripture[language]?.text}</p>
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
