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
      icon: <Users className="h-6 w-6 text-blue-500" />,
      color: "border-t-4 border-blue-500"
    },
    {
      title: "Events this Month",
      value: "72",
      change: "+15 since last week",
      icon: <Calendar className="h-6 w-6 text-emerald-500" />,
      color: "border-t-4 border-emerald-500"
    },
    {
      title: "Active Counties",
      value: "38",
      change: "2 new counties this quarter",
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
       color: "border-t-4 border-amber-500"
    },
    {
      title: "New Leaders",
      value: "45",
      change: "+5 this month",
      icon: <TrendingUp className="h-6 w-6 text-rose-500" />,
       color: "border-t-4 border-rose-500"
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className={`shadow-lg transition-transform transform hover:-translate-y-1 ${stat.color}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
