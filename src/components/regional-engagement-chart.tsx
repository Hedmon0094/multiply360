"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"
import { regionalData } from "@/lib/data"

const chartConfig = {
  events: {
    label: "Events",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function RegionalEngagementChart() {
  return (
    <Card className="bg-gradient-to-br from-card to-muted/40 dark:from-card dark:to-secondary/30 shadow-lg">
      <CardHeader>
        <CardTitle>Regional Engagement</CardTitle>
        <CardDescription>Activities per county - Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={regionalData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="county"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                className="bg-background/80 backdrop-blur-sm"
              />}
            />
            <Bar
              dataKey="events"
              fill="hsl(var(--primary))"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
