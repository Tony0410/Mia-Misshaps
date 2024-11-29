import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name) {
      window.location.href = `?member=${encodeURIComponent(name)}`
    }
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Welcome to Mia's Mishap Tracker</h1>
        <img src="/placeholder.svg?height=300&width=300" alt="Mia" className="w-full rounded-lg shadow-lg mb-4" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name">Enter your name:</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full">Enter Game</Button>
        </form>
      </div>
    </div>
  )
}

