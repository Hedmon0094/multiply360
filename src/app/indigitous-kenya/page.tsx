
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Mic, Award, GitMerge, GraduationCap, Lightbulb, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const engagementCards = [
    {
        title: "Join a #HACK",
        description: "Participate in our annual hackathon to build digital solutions for real mission challenges.",
        icon: <GitMerge className="h-8 w-8 text-primary" />,
        actionText: "Learn about #HACK2024",
        color: "border-primary"
    },
    {
        title: "Contribute to a Project",
        description: "Use your dev, design, or strategy skills on open-source ministry tools.",
        icon: <Code className="h-8 w-8 text-emerald-500" />,
        actionText: "View Kingdom Projects",
        color: "border-emerald-500"
    },
    {
        title: "Find a Tech Mentor",
        description: "Get guidance from experienced Christians in the tech industry to grow in your faith and skills.",
        icon: <Users className="h-8 w-8 text-sky-500" />,
        actionText: "Request a Mentor",
        color: "border-sky-500"
    },
    {
        title: "Submit a Mission Idea",
        description: "Have an idea for a digital mission tool? Share it with us and find a team to build it.",
        icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
        actionText: "Share Your Idea",
        color: "border-amber-500"
    }
];

const upcomingEvents = [
    {
        title: "#HACK Nairobi 2024 Kick-off",
        date: "October 12, 2024",
        type: "Virtual Event"
    },
    {
        title: "Intro to Git for Missionaries",
        date: "November 5, 2024",
        type: "Webinar"
    }
]

export default function IndigitousKenyaPage() {
    const { toast } = useToast();

    const handleActionClick = (message: string) => {
        toast({
            title: "Feature Coming Soon!",
            description: message,
        });
    };

    return (
        <div className="flex flex-col gap-12 bg-gradient-to-br from-indigo-50 via-background to-blue-50 dark:from-indigo-900/10 dark:via-background dark:to-blue-900/10 -m-4 sm:-m-6 md:-m-8 p-4 sm:p-6 md:p-8">
            <header className="text-center max-w-3xl mx-auto">
                 <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                    <Code className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-primary">Indigitous Kenya</h1>
                <p className="text-lg mt-2 text-muted-foreground italic">“Use your skills for God’s mission.”</p>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Welcome to a movement of Christian innovators, developers, designers, and storytellers using their digital talents to bring the Gospel to every corner of Kenya and beyond.
                </p>
            </header>

            <section>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Indigitous community collaborating"
                            fill
                            className="object-cover"
                            data-ai-hint="people laptop collaboration"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">What is Indigitous?</h2>
                        <p className="text-muted-foreground">
                            Indigitous is a global movement of Christians passionate about connecting people to Jesus using digital strategies. We are part of Cru (known as Life Ministry in Kenya), and we collaborate to create apps, websites, social media campaigns, and other digital tools that advance the Great Commission.
                        </p>
                         <Button onClick={() => handleActionClick("The global Indigitous site link will be active soon.")}>
                            Learn More Globally <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-8">How You Can Get Involved</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {engagementCards.map(card => (
                        <Card key={card.title} className={`text-center flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-b-4 ${card.color}`}>
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-2">
                                    {card.icon}
                                </div>
                                <CardTitle>{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{card.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full" onClick={() => handleActionClick(`The '${card.actionText}' feature is currently in development.`)}>
                                    {card.actionText}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
            
            <section className="grid lg:grid-cols-3 gap-8 items-start">
                 <Card className="lg:col-span-2 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><GraduationCap className="text-primary"/> Learning Hub</CardTitle>
                        <CardDescription>Curated tutorials and resources to help you grow your digital ministry skills.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 gap-4">
                        <Button variant="outline" className="justify-start p-4 h-auto text-left" onClick={() => handleActionClick("Tutorials on Git & GitHub are coming soon.")}>
                            <GitMerge className="mr-3 h-5 w-5 text-primary" />
                            <div>
                                <span className="font-semibold">Intro to Git & GitHub</span>
                                <p className="text-xs text-muted-foreground">Learn version control for collaborative projects.</p>
                            </div>
                        </Button>
                        <Button variant="outline" className="justify-start p-4 h-auto text-left" onClick={() => handleActionClick("Evangelism resources using Canva are being developed.")}>
                             <div className="w-5 h-5 mr-3 bg-cyan-400 rounded-sm flex items-center justify-center font-bold text-white">C</div>
                            <div>
                                <span className="font-semibold">Canva for Christ</span>
                                <p className="text-xs text-muted-foreground">Design compelling Gospel graphics for social media.</p>
                            </div>
                        </Button>
                         <Button variant="outline" className="justify-start p-4 h-auto text-left" onClick={() => handleActionClick("AI for ministry tutorials are coming soon.")}>
                            <Code className="mr-3 h-5 w-5 text-primary" />
                            <div>
                                <span className="font-semibold">AI for the Gospel</span>
                                <p className="text-xs text-muted-foreground">Explore using AI tools for outreach and content creation.</p>
                            </div>
                        </Button>
                         <Button variant="outline" className="justify-start p-4 h-auto text-left" onClick={() => handleActionClick("Social media strategy guides are in development.")}>
                            <Mic className="mr-3 h-5 w-5 text-primary" />
                            <div>
                                <span className="font-semibold">Gospel via TikTok & Reels</span>
                                <p className="text-xs text-muted-foreground">Learn to create short-form video for evangelism.</p>
                            </div>
                        </Button>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                     <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Calendar className="text-primary"/> Upcoming Events</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {upcomingEvents.map(event => (
                                <div key={event.title} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div>
                                        <p className="font-semibold">{event.title}</p>
                                        <p className="text-sm text-muted-foreground">{event.date}</p>
                                    </div>
                                    <Badge variant="secondary">{event.type}</Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                     <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Award className="text-amber-500"/> Digital Missionary Story</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <blockquote className="italic text-muted-foreground border-l-4 pl-4">
                                "Through the Indigitous hackathon, our team developed a chatbot that answers common questions about faith. It's now reaching hundreds of young people online!"
                            </blockquote>
                            <p className="text-right text-sm font-semibold mt-2">- John, Developer from Nairobi</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
