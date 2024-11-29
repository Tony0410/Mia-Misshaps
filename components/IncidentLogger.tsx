import { Button } from "@/components/ui/button"

interface IncidentLoggerProps {
  addIncident: () => void
}

export default function IncidentLogger({ addIncident }: IncidentLoggerProps) {
  return (
    <div className="mb-4">
      <Button onClick={addIncident}>Log Incident</Button>
    </div>
  )
}

