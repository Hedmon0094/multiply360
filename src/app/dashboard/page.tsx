import { DashboardStats } from "@/components/dashboard-stats";
import { LeadershipPipeline } from "@/components/leadership-pipeline";
import { RegionalEngagementChart } from "@/components/regional-engagement-chart";
import { VerseOfTheDay } from "@/components/verse-of-the-day";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const recentActivities = [
    { disciple: "John Omondi", activity: "Evangelism Outreach", region: "Nairobi Region", county: "Nairobi", status: "Completed" },
    { disciple: "Mary Wanjiru", activity: "Discipleship", region: "Central Region", county: "Kiambu", status: "Follow-up" },
    { disciple: "David Koech", activity: "Leadership Training", region: "South Rift Region", county: "Nakuru", status: "Completed" },
    { disciple: "Grace Akinyi", activity: "Evangelism Outreach", region: "Coast Region", county: "Mombasa", status: "Completed" },
    { disciple: "Peter Musyoka", activity: "Discipleship", region: "Eastern Region", county: "Machakos", status: "Follow-up" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's a summary of your ministry activities.</p>
      </div>
      <DashboardStats />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-8">
            <LeadershipPipeline />
        </div>
        <div className="grid gap-8">
            <VerseOfTheDay />
            <RegionalEngagementChart />
        </div>
      </div>

       <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>
            A log of the most recent activities submitted by the field team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Disciple/Leader</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>County</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{activity.disciple}</TableCell>
                  <TableCell>{activity.activity}</TableCell>
                  <TableCell>{activity.region}</TableCell>
                  <TableCell>{activity.county}</TableCell>
                  <TableCell>
                    <Badge variant={activity.status === 'Completed' ? 'default' : 'secondary'}
                      className={activity.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-700 hover:bg-emerald-500/30' : 'bg-amber-500/20 text-amber-700 hover:bg-amber-500/30'}
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
