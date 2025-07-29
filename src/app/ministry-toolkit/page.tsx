
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Film, FileText, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "Compass: A Discipleship Journey",
    description: "A comprehensive guide to growing in your faith and leading others to Christ. Covers foundational topics.",
    type: "Bible Study Guide",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    tags: ["Discipleship", "English"],
    action: "View Guide"
  },
  {
    title: "The Four Spiritual Laws",
    description: "A simple, effective way to share the Gospel message. Available in multiple languages.",
    type: "Evangelism Tool",
    icon: <FileText className="h-6 w-6 text-emerald-500" />,
    tags: ["Evangelism", "PDF"],
    action: "Download PDF"
  },
  {
    title: "JESUS Film - Evangelism Strategy",
    description: "Learn how to effectively use the JESUS Film in your community outreach events. Includes screening tips.",
    type: "Training Video",
    icon: <Film className="h-6 w-6 text-rose-500" />,
    tags: ["Training", "Video"],
    action: "Watch Video"
  },
  {
    title: "How to Start a Discipleship Group",
    description: "A practical step-by-step article on gathering new believers and fostering a growth environment.",
    type: "Article",
    icon: <BookOpen className="h-6 w-6 text-amber-500" />,
    tags: ["How-To", "Discipleship"],
    action: "Read Article"
  },
  {
    title: "Four Spiritual Laws - Kiswahili",
    description: "Mwongozo wa Sheria Nne za Kiroho kwa ajili ya kueneza injili kwa ufanisi.",
    type: "Evangelism Tool",
    icon: <FileText className="h-6 w-6 text-emerald-500" />,
    tags: ["Evangelism", "Kiswahili"],
    action: "Download PDF"
  },
   {
    title: "Following Up a New Believer",
    description: "Essential guidance on how to nurture and support someone who has just made a commitment to Christ.",
    type: "Article",
    icon: <BookOpen className="h-6 w-6 text-sky-500" />,
    tags: ["How-To", "Follow-up"],
    action: "Read Article"
  },
];

export default function MinistryToolkitPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ministry Toolkit</h1>
        <p className="text-muted-foreground">
          Tools and materials to equip you for evangelism and discipleship.
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
                {resource.action === "Download PDF" ? <Download className="mr-2 h-4 w-4" /> : null}
                {resource.action}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
