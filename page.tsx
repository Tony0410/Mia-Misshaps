"use client"

import { useState, useEffect } from 'react'
import IncidentLogger from './components/IncidentLogger'
import WeeklyDisplay from './components/WeeklyDisplay'
import GuessForm from './components/GuessForm'
import Results from './components/Results'

export default function MiaMishapTracker() {
  const [incidents, setIncidents] = useState<Date[]>([])
  const [guesses, setGuesses] = useState<{name: string, guess: number}[]>([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    const storedIncidents = localStorage.getItem('miaIncidents')
    if (storedIncidents) {
      setIncidents(JSON.parse(storedIncidents).map((d: string) => new Date(d)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('miaIncidents', JSON.stringify(incidents))
  }, [incidents])

  const addIncident = () => {
    setIncidents([...incidents, new Date()])
  }

  const submitGuess = (name: string, guess: number) => {
    setGuesses([...guesses, { name, guess }])
  }

  const resetWeek = () => {
    setIncidents([])
    setGuesses([])
    setShowResults(false)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mia's Mishap Tracker</h1>
      <IncidentLogger addIncident={addIncident} />
      <WeeklyDisplay incidents={incidents} />
      <GuessForm submitGuess={submitGuess} />
      <button 
        onClick={() => setShowResults(true)} 
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Results
      </button>
      {showResults && <Results incidents={incidents} guesses={guesses} />}
      <button 
        onClick={resetWeek} 
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset Week
      </button>
    </div>
  )
}

