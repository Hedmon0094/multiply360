
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Headphones, Video } from "lucide-react";

const resources = [
  {
    title: "The Four Spiritual Laws (Kiswahili)",
    description: "Mwongozo wa Sheria Nne za Kiroho kwa ajili ya kueneza injili kwa ufanisi.",
    type: "Evangelism Tool",
    media: "PDF",
    icon: <FileText className="h-6 w-6 text-emerald-500" />,
    language: "Kiswahili",
    action: "Download PDF"
  },
  {
    title: "Discipleship Journey Audio (Kiswahili)",
    description: "Masomo ya sauti ya Safari ya Uanafunzi, kamili kwa vikundi vidogo.",
    type: "Discipleship Lesson",
    media: "Audio",
    icon: <Headphones className="h-6 w-6 text-sky-500" />,
    language: "Kiswahili",
    action: "Listen Now"
  },
  {
    title: "The Four Spiritual Laws (English)",
    description: "A simple, effective way to share the Gospel message.",
    type: "Evangelism Tool",
    media: "PDF",
    icon: <FileText className="h-6 w-6 text-emerald-500" />,
    language: "English",
    action: "Download PDF"
  },
  {
    title: "JESUS Film Clip (Luo)",
    description: "Klipu fupi kutoka Filamu ya YESU, inayofaa kwa kushiriki kwenye mitandao ya kijamii.",
    type: "Evangelism Tool",
    media: "Video",
    icon: <Video className="h-6 w-6 text-rose-500" />,
    language: "Luo",
    action: "Watch Clip"
  },
];

export default function LanguageHubPage() {
  const languages = ["All", "English", "Kiswahili", "Luo", "Kalenjin"];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Language Hub</h1>
        <p className="text-muted-foreground">
          Resources in local languages to reach every heart.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
          {languages.map(lang => (
            <TabsTrigger key={lang} value={lang}>{lang}</TabsTrigger>
          ))}
        </TabsList>
        
        {languages.map(lang => (
          <TabsContent key={lang} value={lang}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {resources
                .filter(r => lang === "All" || r.language === lang)
                .map((resource) => (
                  <Card key={resource.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle className="text-xl">{resource.title}</CardTitle>
                                <CardDescription>{resource.type}</CardDescription>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                                {resource.icon}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline">{resource.language}</Badge>
                        <Badge variant="secondary">{resource.media}</Badge>
                      </div>
                      <Button>
                        {resource.action.startsWith("Download") ? <Download className="mr-2 h-4 w-4" /> : null}
                        {resource.action}
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
            {resources.filter(r => lang === "All" || r.language === lang).length === 0 && (
                <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50 border border-dashed mt-6">
                    <p className="text-muted-foreground">No resources available in {lang} yet.</p>
                </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
