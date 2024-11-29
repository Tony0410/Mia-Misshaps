import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface IncidentHeatmapProps {
  incidents: { timestamp: Date; logger: string }[]
}

export default function IncidentHeatmap({ incidents }: IncidentHeatmapProps) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const timeSlots = Array.from({ length: 24 }, (_, i) => i)

  const heatmapData = daysOfWeek.map((day) => {
    return timeSlots.map((hour) => {
      const count = incidents.filter((incident) => {
        const date = new Date(incident.timestamp)
        return date.getDay() === daysOfWeek.indexOf(day) && date.getHours() === hour
      }).length
      return { day, hour, count }
    })
  }).flat()

  const maxCount = Math.max(...heatmapData.map((d) => d.count))

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Incident Heatmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-25 gap-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-xs font-semibold text-center">
              {day}
            </div>
          ))}
          {heatmapData.map(({ day, hour, count }, index) => (
            <div
              key={`${day}-${hour}`}
              className="w-4 h-4 rounded-sm"
              style={{
                backgroundColor: `rgba(239, 68, 68, ${count / maxCount})`,
                gridColumn: daysOfWeek.indexOf(day) + 1,
                gridRow: hour + 2,
              }}
              title={`${day} ${hour}:00 - ${count} incident(s)`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

