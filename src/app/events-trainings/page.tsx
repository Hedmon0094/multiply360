
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Video, List, Filter, PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { lmkRegions } from "@/lib/data";

const upcomingEvents = [
  {
    title: "Nairobi Region Campus Outreach",
    date: "Saturday, September 14, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "University of Nairobi",
    type: "Evangelism",
    color: "border-emerald-500",
    icon: <Calendar className="h-5 w-5 text-emerald-500" />
  },
  {
    title: "Digital Discipleship 101 Training",
    date: "Tuesday, September 17, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Online via Zoom",
    type: "Training",
    color: "border-sky-500",
    icon: <Video className="h-5 w-5 text-sky-500" />
  },
  {
    title: "Prayer Walk for Nakuru County",
    date: "Friday, September 20, 2024",
    time: "6:00 AM - 7:00 AM",
    location: "Nakuru CBD",
    type: "Prayer",
    color: "border-amber-500",
    icon: <MapPin className="h-5 w-5 text-amber-500" />
  },
];

const eventTypes = ["Evangelism", "Training", "Prayer", "Conference", "Community"];

export default function EventsTrainingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Events & Trainings</h1>
            <p className="text-muted-foreground">
            Find upcoming events, register for trainings, and watch past sessions.
            </p>
        </div>
         <Button size="lg" className="w-full md:w-auto">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create an Event
        </Button>
      </div>

       <div className="flex flex-col md:flex-row gap-4 items-center p-4 rounded-lg bg-muted/70 border">
          <div className="flex items-center gap-2 text-primary font-semibold w-full md:w-auto">
            <Filter className="h-5 w-5"/>
            <span>Filter Events:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full flex-1">
             <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Filter by Region" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {lmkRegions.map(region => (
                        <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                     <SelectItem value="all">All Types</SelectItem>
                    {eventTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 h-auto sm:h-10">
          <TabsTrigger value="list"><List className="mr-2 h-4 w-4" /> List View</TabsTrigger>
          <TabsTrigger value="calendar"><Calendar className="mr-2 h-4 w-4" /> Calendar View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="mt-6">
            <div className="space-y-6">
                {upcomingEvents.map(event => (
                    <Card key={event.title} className={`shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 ${event.color}`}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex-1">
                                    <Badge variant="secondary" className="mb-2">{event.type}</Badge>
                                    <CardTitle>{event.title}</CardTitle>
                                    <CardDescription className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2">
                                        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {event.date}</span>
                                        <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</span>
                                    </CardDescription>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                    <Button variant="outline" className="w-full sm:w-auto">View Details</Button>
                                    <Button className="w-full sm:w-auto">RSVP</Button>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="calendar" className="mt-6">
            <Card>
                <CardContent className="p-0">
                    <div className="flex items-center justify-center h-96 rounded-lg bg-muted/50 border border-dashed">
                        <div className="text-center text-muted-foreground p-4">
                            <Calendar className="h-10 w-10 mx-auto mb-4 text-primary" />
                            <p className="font-semibold">Interactive Calendar Coming Soon</p>
                            <p className="text-sm">A full calendar view of all events will be available here.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
