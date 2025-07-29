"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleCheckedChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border">
        <div className="mb-2 sm:mb-0">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <p className="text-sm text-muted-foreground">Enable for better viewing at night.</p>
        </div>
        <Switch 
            id="dark-mode" 
            checked={theme === 'dark'}
            onCheckedChange={handleCheckedChange}
        />
    </div>
  )
}
