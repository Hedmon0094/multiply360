
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Compass, Video, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Does God Exist?",
    description: "A logical, honest look at the evidence for God's existence.",
    category: "About God",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Why is Life So Hard?",
    description: "Exploring the reasons for pain and suffering in the world.",
    category: "Life & Purpose",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Can I Know God Personally?",
    description: "Learn how you can begin a relationship with God right now.",
    category: "About God",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Is Jesus the Only Way?",
    description: "Addressing one of the most common questions about Christianity.",
    category: "About God",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Faith and Science: Friends or Foes?",
    description: "Discover how faith and science can coexist and complement each other.",
    category: "Faith & Science",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Finding Your Purpose",
    description: "What does it mean to live a life of meaning and purpose?",
    category: "Life & Purpose",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
];

const videos = [
    {
        title: "Why Jesus?",
        description: "A short animated video explaining the significance of Jesus.",
        duration: "3:45",
    },
    {
        title: "Is the Bible Reliable?",
        description: "Explore the historical evidence for the Bible's accuracy.",
        duration: "5:12",
    }
];

const nextSteps = [
    {
        title: "What Just Happened?",
        description: "You've made the most important decision of your life. So, what's next?",
        status: "Completed"
    },
    {
        title: "How to Walk With God",
        description: "Learn the basics of growing in your new relationship with Jesus.",
        status: "In Progress"
    },
    {
        title: "Learning to Hear God",
        description: "Discover how God speaks and how you can listen.",
        status: "Locked"
    }
]

export default function EveryStudentPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">EveryStudent Discovery</h1>
        <p className="text-muted-foreground">
          A place to explore life's big questions and discover what it means to follow Jesus.
        </p>
      </div>

       <Tabs defaultValue="explore" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
          <TabsTrigger value="explore"><Search className="mr-2 h-4 w-4" /> Explore Questions</TabsTrigger>
          <TabsTrigger value="next-steps"><Compass className="mr-2 h-4 w-4" /> Next Steps</TabsTrigger>
          <TabsTrigger value="watch"><Video className="mr-2 h-4 w-4" /> Watch & Learn</TabsTrigger>
        </TabsList>
        
        <TabsContent value="explore" className="mt-6">
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                <Card key={article.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <CardTitle className="text-xl">{article.title}</CardTitle>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted shrink-0">
                                {article.icon}
                            </div>
                        </div>
                         <Badge variant="secondary" className="w-fit">{article.category}</Badge>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{article.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="next-steps" className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle>Your Journey with God</CardTitle>
                    <CardDescription>Follow these simple guides to grow in your new faith.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {nextSteps.map((step, index) => (
                        <div key={step.title} className={`p-4 rounded-lg border flex items-center justify-between ${step.status === "Locked" ? "bg-muted/50" : "bg-card"}`}>
                            <div className="flex items-center gap-4">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step.status === "Completed" ? "bg-accent" : step.status === "In Progress" ? "bg-primary" : "bg-muted-foreground/30" } text-white font-bold`}>
                                    {step.status === "Completed" ? <CheckCircle className="h-6 w-6"/> : index + 1}
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${step.status === "Locked" ? "text-muted-foreground" : "text-foreground"}`}>{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                            <Button variant={step.status === "Locked" ? "secondary" : "default"} disabled={step.status === "Locked"}>
                                {step.status === "In Progress" ? "Continue" : "Start"}
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="watch" className="mt-6">
             <div className="grid gap-6 md:grid-cols-2">
                {videos.map((video) => (
                    <Card key={video.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="relative aspect-video w-full bg-muted rounded-t-lg flex items-center justify-center">
                             <Video className="h-16 w-16 text-muted-foreground/50" />
                        </div>
                        <CardHeader>
                            <CardTitle>{video.title}</CardTitle>
                            <CardDescription>{video.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                           <Badge variant="outline">{video.duration}</Badge>
                           <Button>Watch Now</Button>
                        </CardFooter>
                    </Card>
                ))}
             </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
