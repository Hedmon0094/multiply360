import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Calendar, MapPin, TrendingUp } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      title: "Total Disciples",
      value: "1,284",
      change: "+20.1% from last month",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Events this Month",
      value: "72",
      change: "+15 since last week",
      icon: <Calendar className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Active Counties",
      value: "38",
      change: "2 new counties this quarter",
      icon: <MapPin className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "New Leaders",
      value: "45",
      change: "+5 this month",
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
