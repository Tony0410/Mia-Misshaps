import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultsProps {
  incidents: Date[]
  guesses: {name: string, guess: number}[]
}

export default function Results({ incidents, guesses }: ResultsProps) {
  const actualCount = incidents.length
  const sortedGuesses = [...guesses].sort((a, b) => 
    Math.abs(a.guess - actualCount) - Math.abs(b.guess - actualCount)
  )

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Actual incidents this week: {actualCount}</p>
        <h3 className="font-bold mt-2">Guesses:</h3>
        <ul>
          {sortedGuesses.map((guess, index) => (
            <li key={index} className={index === 0 ? "font-bold" : ""}>
              {guess.name}: {guess.guess} {index === 0 ? "(Winner!)" : ""}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

