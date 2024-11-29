import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WeeklyDisplayProps {
  incidents: Date[]
}

export default function WeeklyDisplay({ incidents }: WeeklyDisplayProps) {
  const currentWeekIncidents = incidents.filter(date => {
    const now = new Date()
    const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay())
    return date >= weekStart
  })

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>This Week's Incidents</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{currentWeekIncidents.length}</p>
      </CardContent>
    </Card>
  )
}

