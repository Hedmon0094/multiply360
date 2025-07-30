
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Send, BookOpen, Clock, CheckCircle, LifeBuoy, Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const questionCategories = ["Personal Growth", "Evangelism", "Theology", "Relationships", "Leadership"];

const myQuestions = [
    {
        id: 1,
        title: "How do I overcome fear in evangelism?",
        category: "Evangelism",
        status: "Answered",
        question: "I want to share my faith, but I get really nervous and scared of what people will think. What does the Bible say about this, and do you have any practical advice?",
        answer: "That's a very common and honest question! The Bible reminds us in 2 Timothy 1:7, 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.' Remember that it's not about your own strength, but God's. Start by praying for divine appointments and for God to give you a heart of love for the person you're talking to. Sometimes, just sharing your own story is the most powerful way to start.",
        mentor: { name: "David K.", avatar: "https://placehold.co/40x40.png" }
    },
    {
        id: 2,
        title: "Struggling with consistent prayer",
        category: "Personal Growth",
        status: "Pending",
        question: "I find it hard to pray consistently every day. My mind wanders, and I'm not sure what to say. How can I build a better prayer life?",
        answer: null,
        mentor: null
    }
];

const browseTopics = ["Prayer", "Faith & Doubt", "Discipleship", "Finding Your Calling", "Relationships & Purity", "Leadership"];

export default function SpiritualGuidancePage() {
    const { toast } = useToast();
    const [newQuestion, setNewQuestion] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newQuestion.trim() || !category) {
            toast({
                variant: "destructive",
                title: "Incomplete Request",
                description: "Please write a question and select a category.",
            });
            return;
        }

        toast({
            title: "Question Submitted",
            description: "Your question has been sent to a mentor. You will be notified when they respond.",
        });

        setNewQuestion("");
        setCategory("");
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Spiritual Guidance</h1>
                <p className="text-muted-foreground">
                    A safe place to ask questions about your faith journey and get guidance from a trusted mentor.
                </p>
            </div>

            <Tabs defaultValue="ask" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
                    <TabsTrigger value="ask"><Send className="mr-2 h-4 w-4" /> Submit a Question</TabsTrigger>
                    <TabsTrigger value="my-questions"><LifeBuoy className="mr-2 h-4 w-4" /> My Questions</TabsTrigger>
                    <TabsTrigger value="browse"><Search className="mr-2 h-4 w-4" /> Browse Topics</TabsTrigger>
                </TabsList>

                <TabsContent value="ask" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ask a Mentor</CardTitle>
                            <CardDescription>Your question will be sent privately to a trained LMK mentor. They will respond prayerfully within 24-48 hours.</CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="question-category">Category</Label>
                                    <Select value={category} onValueChange={setCategory}>
                                        <SelectTrigger id="question-category">
                                            <SelectValue placeholder="Select a topic for your question" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {questionCategories.map(cat => (
                                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="question-text">Your Question</Label>
                                    <Textarea
                                        id="question-text"
                                        placeholder="Type your question here..."
                                        rows={6}
                                        value={newQuestion}
                                        onChange={(e) => setNewQuestion(e.target.value)}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit">
                                    <Send className="mr-2 h-4 w-4" />
                                    Send to Mentor
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent>

                <TabsContent value="my-questions" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Your Questions</CardTitle>
                            <CardDescription>Here are the questions you've submitted and their current status.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {myQuestions.map(q => (
                                <Accordion key={q.id} type="single" collapsible className="w-full">
                                    <AccordionItem value={`item-${q.id}`}>
                                        <AccordionTrigger className="p-4 rounded-lg bg-muted/70 hover:bg-muted transition-colors">
                                           <div className="flex justify-between items-center w-full pr-4">
                                                <div className="text-left">
                                                    <p className="font-semibold">{q.title}</p>
                                                    <Badge variant="outline" className="mt-1">{q.category}</Badge>
                                                </div>
                                                <Badge variant={q.status === 'Answered' ? 'default' : 'secondary'} className={q.status === 'Answered' ? 'bg-accent/20 text-accent-foreground' : 'bg-amber-500/20 text-amber-700'}>
                                                    {q.status === 'Answered' ? <CheckCircle className="h-4 w-4 mr-1" /> : <Clock className="h-4 w-4 mr-1" />}
                                                    {q.status}
                                                </Badge>
                                           </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="p-4 border-t-0">
                                            <p className="font-semibold text-muted-foreground mb-4">Your Question: <span className="italic font-normal">"{q.question}"</span></p>
                                            {q.answer ? (
                                                <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <Avatar>
                                                            <AvatarImage src={q.mentor?.avatar} alt={q.mentor?.name} />
                                                            <AvatarFallback>{q.mentor?.name.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                        <p className="font-semibold">Mentor's Response</p>
                                                    </div>
                                                    <p className="text-foreground/90">{q.answer}</p>
                                                </div>
                                            ) : (
                                                <p className="text-muted-foreground italic">A mentor will respond to your question soon.</p>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="browse" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Browse Common Questions</CardTitle>
                            <CardDescription>Explore answers to frequently asked questions by topic.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {browseTopics.map(topic => (
                                <Button key={topic} variant="outline" className="justify-start p-4 h-auto">
                                    <BookOpen className="mr-3 h-5 w-5 text-primary" />
                                    <span className="font-semibold">{topic}</span>
                                </Button>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
