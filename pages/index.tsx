'use client'

import { ArrowLeft, ExternalLink, Popcorn, X } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"

import { Alert, AlertDescription } from "/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Component() {
  const [tabStyle, setTabStyle] = useState("normal")

  useEffect(() => {
    if (tabStyle === "microsoft") {
      document.title = "Microsoft - AI, Cloud & Productivity"
      const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
      if (link) {
        link.href = "https://www.microsoft.com/favicon.ico"
      }
    } else if (tabStyle === "google") {
      document.title = "Google - Search & Cloud Services"
      const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
      if (link) {
        link.href = "https://www.google.com/favicon.ico"
      }
    }
  }, [tabStyle])

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="ml-4 flex items-center gap-2">
            <Popcorn className="h-5 w-5" />
            <span className="font-semibold">Popcorn</span>
          </div>
        </div>
      </header>
      <main className="container px-4 py-8">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Popcorn</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tab Cloaking</label>
                <Select value={tabStyle} onValueChange={setTabStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tab style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Alert>
                <AlertDescription>
                  To use a new product key, clear your browsers cache or the cache for this site!
                </AlertDescription>
              </Alert>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Legacy Popcorn</h2>
            <Button variant="outline" asChild>
              <Link 
                href="/website-data/prx-177/authbot-1/popcorn-security/nginx.html" 
                target="_blank"
                className="flex items-center gap-2"
              >
                Open Legacy Version
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Leave Popcorn</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle>Are you sure you want to leave?</DialogTitle>
                    <DialogClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>
                <DialogDescription className="pt-4">
                  <Button variant="destructive" className="w-full">
                    Leave
                  </Button>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
    </div>
  )
}
