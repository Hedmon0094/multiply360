
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Film, FileText, Languages, Share2, MessagesSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "Knowing God Personally",
    description: "A simple, effective way to share the core message of the Gospel using four key principles.",
    type: "Gospel Presentation",
    icon: <MessagesSquare className="h-6 w-6 text-emerald-500" />,
    tags: ["Evangelism", "English"],
    action: "Start Presentation"
  },
  {
    title: "The Four Spiritual Laws (Swahili)",
    description: "Mwongozo wa Sheria Nne za Kiroho kwa ajili ya kueneza injili kwa ufanisi.",
    type: "Gospel Presentation",
    icon: <MessagesSquare className="h-6 w-6 text-emerald-500" />,
    tags: ["Evangelism", "Kiswahili"],
    action: "Anza Uwasilishaji"
  },
  {
    title: "Satisfied? Spirit-Filled Life",
    description: "Help believers understand how to live a life empowered and guided by the Holy Spirit.",
    type: "Discipleship Tool",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    tags: ["Discipleship", "English"],
    action: "View Guide"
  },
  {
    title: "Honor & Shame Presentation",
    description: "A culturally relevant Gospel presentation for communities where honor and shame are core values.",
    type: "Gospel Presentation",
    icon: <MessagesSquare className="h-6 w-6 text-amber-500" />,
    tags: ["Contextual", "Evangelism"],
    action: "Start Presentation"
  },
  {
    title: "Teach Me To Share",
    description: "A practical training guide on how to initiate spiritual conversations and share your faith.",
    type: "Training Article",
    icon: <BookOpen className="h-6 w-6 text-sky-500" />,
    tags: ["How-To", "Training"],
    action: "Read Article"
  },
   {
    title: "JESUS Film Link",
    description: "Share the full JESUS film directly with a friend or contact via a simple link.",
    type: "Media Tool",
    icon: <Film className="h-6 w-6 text-rose-500" />,
    tags: ["Evangelism", "Video"],
    action: "Share Film"
  },
];

export default function GodToolsHubPage() {
  return (
    <div className="flex flex-col gap-8 bg-gradient-to-br from-card via-blue-50 to-emerald-50 dark:from-card dark:via-blue-900/10 dark:to-emerald-900/10 -m-4 sm:-m-6 md:-m-8 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">GodTools Hub</h1>
        <p className="text-muted-foreground mt-2">
          Tools to help you share the Gospel, clearly and confidently, in any language.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
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
                {resource.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <Button>
                {resource.action.startsWith("Share") ? <Share2 className="mr-2 h-4 w-4" /> : null}
                {resource.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
