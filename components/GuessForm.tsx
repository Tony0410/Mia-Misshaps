import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface GuessFormProps {
  submitGuess: (name: string, guess: number) => void
}

export default function GuessForm({ submitGuess }: GuessFormProps) {
  const [name, setName] = useState('')
  const [guess, setGuess] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && guess) {
      submitGuess(name, parseInt(guess))
      setName('')
      setGuess('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <Label htmlFor="guess">Guess:</Label>
        <Input
          id="guess"
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Submit Guess</Button>
    </form>
  )
}

