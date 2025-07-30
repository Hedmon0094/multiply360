
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { lmkRegions } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Users, Calendar, Filter, UserPlus, Send } from "lucide-react";

const fellowships = [
  {
    name: "UoN Main Campus Fellowship",
    region: "Nairobi Region",
    type: "Campus",
    schedule: "Wednesdays, 5 PM",
    leader: "Sarah Johnson",
  },
  {
    name: "Mombasa CBD Prayer Group",
    region: "Coast Region",
    type: "Prayer Group",
    schedule: "Fridays, 6 AM",
    leader: "David Charo",
  },
  {
    name: "Kisumu Young Professionals",
    region: "Nyanza Region",
    type: "Community",
    schedule: "Saturdays, 10 AM",
    leader: "Grace Akinyi",
  },
   {
    name: "Nakuru Discipleship House",
    region: "South Rift Region",
    type: "Discipleship Group",
    schedule: "Tuesdays, 7 PM",
    leader: "Peter Koech",
  },
   {
    name: "Eldoret Town Church Plant",
    region: "North Rift Region",
    type: "Church Plant",
    schedule: "Sundays, 10 AM",
    leader: "Mary Wambui",
  },
   {
    name: "Kiambu Family Fellowship",
    region: "Central Region",
    type: "Community",
    schedule: "Bi-weekly, Saturdays",
    leader: "Joseph Kamau",
  },
];

const fellowshipTypes = ["Campus", "Prayer Group", "Community", "Discipleship Group", "Church Plant"];

export default function ConnectPage() {
  const { toast } = useToast();

  const handleRequestJoin = (fellowshipName: string) => {
    toast({
      title: "Request Sent!",
      description: `Your request to join ${fellowshipName} has been sent to the leader.`,
      action: <Send className="h-5 w-5 text-primary" />,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Connect with a Fellowship</h1>
        <p className="text-muted-foreground">
          Find nearby disciples, local fellowships, and campus groups to foster spiritual community.
        </p>
      </div>

       <div className="flex flex-col md:flex-row gap-4 items-center p-4 rounded-lg bg-muted/70 border">
          <div className="flex items-center gap-2 text-primary font-semibold w-full md:w-auto">
            <Filter className="h-5 w-5"/>
            <span>Filter Groups:</span>
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
                    {fellowshipTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fellowships.map((group) => (
          <Card key={group.name} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                         <Badge variant="secondary" className="mb-2">{group.type}</Badge>
                         <CardTitle>{group.name}</CardTitle>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted shrink-0">
                        <Users className="h-6 w-6 text-primary" />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>{group.region}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 text-accent" />
                <span>{group.schedule}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <UserPlus className="h-4 w-4 mr-2 text-accent" />
                <span>Led by {group.leader}</span>
              </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={() => handleRequestJoin(group.name)}>
                    Request to Join
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
