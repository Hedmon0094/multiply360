"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kenyanCounties } from "@/lib/data";
import { Upload, Mic, FileText } from "lucide-react";

const activityFormSchema = z.object({
  eventType: z.string({
    required_error: "Please select an event type.",
  }),
  location: z.string({
    required_error: "Please select a county.",
  }),
  attendance: z.coerce.number().min(0, "Attendance cannot be negative."),
  notes: z.string().max(500, "Notes cannot exceed 500 characters.").optional(),
  followUpRequired: z.boolean().default(false).optional(),
  photo: z.any().optional(),
  voiceNote: z.any().optional(),
});

type ActivityFormValues = z.infer<typeof activityFormSchema>;

const defaultValues: Partial<ActivityFormValues> = {
  followUpRequired: false,
};

export function ActivityLogForm() {
  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues,
  });

  function onSubmit(data: ActivityFormValues) {
    console.log(data);
    // Here you would handle form submission, including uploading files to Firebase Storage
    // and saving form data to Firestore.
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log New Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an event type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="evangelism">Evangelism Outreach</SelectItem>
                        <SelectItem value="discipleship">Discipleship Meeting</SelectItem>
                        <SelectItem value="training">Leadership Training</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location (County)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a county" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {kenyanCounties.map((county) => (
                          <SelectItem key={county} value={county}>
                            {county}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attendance</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share details about the event, testimonies, or challenges..."
                      className="resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Upload Photo (Optional)</FormLabel>
                        <FormControl>
                        <div className="relative">
                            <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input type="file" accept="image/*" className="pl-10" {...field} />
                        </div>
                        </FormControl>
                        <FormDescription>
                        A picture from the event for verification.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="voiceNote"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Upload Voice Note (Optional)</FormLabel>
                        <FormControl>
                            <div className="relative">
                                <Mic className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input type="file" accept="audio/*" className="pl-10" {...field} />
                            </div>
                        </FormControl>
                        <FormDescription>
                        A voice recording for those with low literacy.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>

            <FormField
              control={form.control}
              name="followUpRequired"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Follow-up Required?</FormLabel>
                    <FormDescription>
                      Enable if this activity requires a follow-up action.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full md:w-auto">
                <FileText className="mr-2 h-4 w-4" />
                Log Activity
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
