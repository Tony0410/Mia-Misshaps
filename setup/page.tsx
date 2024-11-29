"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2 } from 'lucide-react'

export default function Setup() {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')

  const generateLink = (e: React.FormEvent) => {
    e.preventDefault()
    const baseUrl = window.location.origin
    const newLink = `${baseUrl}/admin?logger=${encodeURIComponent(name)}`
    setLink(newLink)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Setup Quick Logging</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={generateLink} className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Generate Link
            </Button>
          </form>

          {link && (
            <div className="mt-4 space-y-4">
              <p className="text-sm break-all p-2 bg-gray-100 rounded">{link}</p>
              <Button onClick={copyLink} className="w-full" variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Copy Link
              </Button>
              <p className="text-sm text-muted-foreground">
                Bookmark this link on your phone for quick access to logging incidents.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

