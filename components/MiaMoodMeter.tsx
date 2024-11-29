import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MiaMoodMeterProps {
  incidents: { timestamp: Date; logger: string }[]
}

export default function MiaMoodMeter({ incidents }: MiaMoodMeterProps) {
  const [mood, setMood] = useState('happy')

  useEffect(() => {
    const recentIncidents = incidents.filter(
      (incident) => new Date(incident.timestamp) > new Date(Date.now() - 24 * 60 * 60 * 1000)
    ).length

    if (recentIncidents === 0) setMood('happy')
    else if (recentIncidents <= 2) setMood('neutral')
    else setMood('sad')
  }, [incidents])

  const moodEmoji = {
    happy: '😊',
    neutral: '😐',
    sad: '😢',
  }

  return (
    <div className="flex flex-col items-center mb-4">
      <h3 className="text-lg font-semibold mb-2">Mia's Mood</h3>
      <motion.div
        className="text-6xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {moodEmoji[mood as keyof typeof moodEmoji]}
      </motion.div>
    </div>
  )
}

