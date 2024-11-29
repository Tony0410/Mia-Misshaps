"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminPage() {
  const [incidents, setIncidents] = useState<{timestamp: Date, logger: string}[]>([])
  const [logger, setLogger] = useState<string>('')

  useEffect(() => {
    // Get stored incidents
    const storedIncidents = localStorage.getItem('miaIncidents')
    if (storedIncidents) {
      setIncidents(JSON.parse(storedIncidents))
    }
    
    // Get stored logger name from URL or localStorage
    const urlParams = new URLSearchParams(window.location.search)
    const loggerName = urlParams.get('logger')
    if (loggerName) {
      setLogger(loggerName)
      localStorage.setItem('miaLogger', loggerName)
    } else {
      const storedLogger = localStorage.getItem('miaLogger')
      if (storedLogger) {
        setLogger(storedLogger)
      }
    }
  }, [])

  const logIncident = () => {
    const newIncident = {
      timestamp: new Date(),
      logger
    }
    const updatedIncidents = [...incidents, newIncident]
    setIncidents(updatedIncidents)
    localStorage.setItem('miaIncidents', JSON.stringify(updatedIncidents))
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">Quick Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0591-RfixbPAwJ8DOPrfS6C6GPz13OUd1la.jpeg" 
              alt="Mia looking sideways with pink flowers in the background" 
              className="w-32 h-32 rounded-full object-cover mb-2"
            />
            <p className="text-lg font-medium">Logging as: {logger}</p>
            <Button 
              onClick={logIncident} 
              size="lg"
              className="w-full h-16 text-lg bg-red-500 hover:bg-red-600"
            >
              Log Incident
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today's Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {incidents
              .filter(incident => {
                const today = new Date()
                const incidentDate = new Date(incident.timestamp)
                return (
                  incidentDate.getDate() === today.getDate() &&
                  incidentDate.getMonth() === today.getMonth() &&
                  incidentDate.getFullYear() === today.getFullYear()
                )
              })
              .map((incident, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-2 bg-gray-100 rounded"
                >
                  <span>{new Date(incident.timestamp).toLocaleTimeString()}</span>
                  <span className="font-medium">{incident.logger}</span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

