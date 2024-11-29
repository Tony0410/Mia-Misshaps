import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LastWeekWinnerProps {
  winner: {name: string, guess: number, actual: number} | null
}

export default function LastWeekWinner({ winner }: LastWeekWinnerProps) {
  if (!winner) return null

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Last Week's Winner</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-green-600">{winner.name}</p>
        <p>Guess: {winner.guess}</p>
        <p>Actual: {winner.actual}</p>
      </CardContent>
    </Card>
  )
}

