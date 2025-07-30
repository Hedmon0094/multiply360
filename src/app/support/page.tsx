
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { LifeBuoy, Send, ShieldQuestion, Bug, Lightbulb, Heart } from "lucide-react";

const faqItems = [
    {
        question: "How do I log an activity?",
        answer: "Navigate to the 'Log Activity' page from the sidebar. Fill in the form with details about your event, such as the type, location, and attendance, then click 'Log Activity'."
    },
    {
        question: "Can I use the app offline?",
        answer: "Certain features like activity logging are designed to work offline and will sync automatically when you reconnect to the internet. Full offline support for all features is in development."
    },
    {
        question: "How do I reset my password?",
        answer: "You can reset your password from the login screen by clicking the 'Forgot your password?' link. If you are already logged in, you can change it from the 'Settings' page."
    }
];

export default function SupportPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent, type: string) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: `Thank you for your ${type}. Our team will get back to you shortly.`,
            action: <Send className="h-5 w-5 text-primary" />
        });
        // Here you would typically handle form submission logic
        (e.target as HTMLFormElement).reset();
    };


  return (
    <div className="flex flex-col gap-8 bg-gradient-to-br from-card via-blue-50 to-sky-100 dark:from-card dark:via-blue-900/10 dark:to-sky-900/20 -m-4 sm:-m-6 md:-m-8 p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Support & Contact Center</h1>
        <p className="text-muted-foreground mt-2">
          Need help, have a question, or want to share feedback? We’re here for you.
        </p>
      </div>

       <Tabs defaultValue="contact" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="contact"><Send className="mr-2 h-4 w-4" /> Contact Us</TabsTrigger>
          <TabsTrigger value="faq"><ShieldQuestion className="mr-2 h-4 w-4" /> FAQs</TabsTrigger>
          <TabsTrigger value="bug"><Bug className="mr-2 h-4 w-4" /> Report a Bug</TabsTrigger>
          <TabsTrigger value="feedback"><Lightbulb className="mr-2 h-4 w-4" /> Give Feedback</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact" className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>Have a question or need assistance? Fill out the form below and we'll get back to you.</CardDescription>
                </CardHeader>
                 <form onSubmit={(e) => handleSubmit(e, 'message')}>
                    <CardContent className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" placeholder="John Doe" required/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Your Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" required/>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="topic">Topic</Label>
                            <Select required>
                                <SelectTrigger id="topic">
                                    <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General Inquiry</SelectItem>
                                    <SelectItem value="discipleship">Discipleship Help</SelectItem>
                                    <SelectItem value="partnership">Partnership Info</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..." rows={5} required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Send Message</Button>
                    </CardFooter>
                 </form>
            </Card>
        </TabsContent>

        <TabsContent value="faq" className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Find quick answers to common questions about the Multiply360 app.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                             <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>
                                {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="bug" className="mt-6">
             <Card>
                <CardHeader>
                    <CardTitle>Report a Bug</CardTitle>
                    <CardDescription>Spotted something not working right? Please let us know so we can fix it.</CardDescription>
                </CardHeader>
                <form onSubmit={(e) => handleSubmit(e, 'bug report')}>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="bug-description">Bug Description</Label>
                            <Textarea id="bug-description" placeholder="Describe the issue in detail. What did you expect to happen?" rows={5} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="bug-steps">Steps to Reproduce</Label>
                            <Textarea id="bug-steps" placeholder="e.g., 1. Go to Dashboard. 2. Click on 'Log Activity'. 3. See error." rows={4} />
                        </div>
                         <div className="grid gap-2">
                            <Label htmlFor="screenshot">Upload Screenshot (Optional)</Label>
                            <Input id="screenshot" type="file" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Submit Bug Report</Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>

        <TabsContent value="feedback" className="mt-6">
             <Card>
                <CardHeader>
                    <CardTitle>Give Feedback or Suggest a Feature</CardTitle>
                    <CardDescription>We'd love to hear your ideas for making this app better for your ministry.</CardDescription>
                </CardHeader>
                 <form onSubmit={(e) => handleSubmit(e, 'feedback')}>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="feedback-message">Your Feedback or Idea</Label>
                            <Textarea id="feedback-message" placeholder="What would make this app more helpful for you?" rows={6} required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Submit Feedback</Button>
                    </CardFooter>
                 </form>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
