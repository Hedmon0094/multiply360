
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { lmkRegions } from "@/lib/data";
import { Map, Filter, Users, Target, Heart, Film, BookOpen, HandHelping } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const missionFilters = [
    { label: "All Missions", icon: <Map className="h-4 w-4 mr-2" /> },
    { label: "Discipleship", icon: <Users className="h-4 w-4 mr-2" /> },
    { label: "Jesus Film", icon: <Film className="h-4 w-4 mr-2" /> },
    { label: "Prayer", icon: <Heart className="h-4 w-4 mr-2" /> },
    { label: "Leadership", icon: <Target className="h-4 w-4 mr-2" /> },
];

export default function DigitalMissionsExplorerPage() {
    const { toast } = useToast();
    const [activeFilter, setActiveFilter] = useState("All Missions");

    const handleAdoptClick = () => {
        toast({
            title: "Thank you for your heart!",
            description: "You've committed to praying for Nakuru County. Feature to track this is coming soon!",
            action: <Heart className="h-5 w-5 text-rose-500" />,
        });
    };

    return (
        <div className="flex flex-col gap-8 bg-gradient-to-br from-card via-blue-50 to-emerald-50 dark:from-card dark:via-blue-900/10 dark:to-emerald-900/10 -m-4 sm:-m-6 md:-m-8 p-4 sm:p-6 md:p-8">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-primary">Digital Missions Explorer</h1>
                <p className="text-lg mt-2 text-muted-foreground italic">“See how God is moving across Kenya – county by county.”</p>
            </div>

            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                             <CardTitle className="flex items-center gap-2"><Filter /> Filter Missions</CardTitle>
                             <CardDescription>Tap a category to see it on the map.</CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {missionFilters.map(filter => (
                               <Button 
                                key={filter.label} 
                                variant={activeFilter === filter.label ? 'default' : 'outline'}
                                onClick={() => setActiveFilter(filter.label)}
                                >
                                   {filter.icon}
                                   {filter.label}
                               </Button>
                           ))}
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                     <Card className="shadow-xl w-full h-[400px] lg:h-[600px] overflow-hidden">
                        <div className="relative w-full h-full bg-blue-200 flex items-center justify-center">
                            <Image
                                src="https://placehold.co/800x600.png"
                                alt="Map of Kenya showing mission activities"
                                fill
                                className="object-cover opacity-80"
                                data-ai-hint="kenya map"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-4 h-4 rounded-full bg-emerald-500 animate-ping" />
                            </div>
                            <p className="absolute bottom-4 text-center text-white font-semibold bg-black/50 p-2 rounded-md">
                                Interactive Map Placeholder
                            </p>
                        </div>
                     </Card>
                </div>
                <div className="space-y-8">
                    <Card className="shadow-lg sticky top-24">
                        <CardHeader className="bg-muted rounded-t-xl">
                            <CardTitle className="text-primary">Nakuru County</CardTitle>
                            <CardDescription>Last outreach: August 2024</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                <div className="flex items-center gap-3">
                                    <Users className="h-5 w-5 text-primary"/>
                                    <span className="font-semibold">Disciples</span>
                                </div>
                                <span className="font-bold text-lg">2,320</span>
                            </div>
                             <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                <div className="flex items-center gap-3">
                                    <Target className="h-5 w-5 text-accent"/>
                                    <span className="font-semibold">Active Leaders</span>
                                </div>
                                <span className="font-bold text-lg">98</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                <div className="flex items-center gap-3">
                                    <Film className="h-5 w-5 text-rose-500"/>
                                    <span className="font-semibold">Jesus Film Views</span>
                                </div>
                                <span className="font-bold text-lg">1,500+</span>
                            </div>
                             <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700" onClick={handleAdoptClick}>
                                <HandHelping className="mr-2 h-5 w-5" />
                                Adopt in Prayer
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Field Story</CardTitle>
                        </CardHeader>
                         <CardContent>
                            <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="https://placehold.co/600x400.png"
                                    alt="Field story from Nakuru"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="people community"
                                />
                            </div>
                            <blockquote className="italic text-muted-foreground border-l-4 pl-4">
                                "A new church was planted after a recent Jesus Film screening. To God be the glory!"
                            </blockquote>
                            <p className="text-right text-sm font-semibold mt-2">- Field Team</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
