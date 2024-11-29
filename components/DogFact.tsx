"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

const dogFacts = [
  "Dogs' noses are wet to help absorb scent chemicals.",
  "Dalmatians are born completely white and develop their spots as they get older.",
  "A dog's sense of smell is 10,000 to 100,000 times stronger than humans.",
  "Greyhounds can run up to 45 miles per hour.",
  "Basenji dogs don't bark, but they do yodel.",
  "A dog's normal body temperature is between 101 to 102.5 degrees Fahrenheit.",
  "Dogs can learn over 100 words and gestures.",
  "A dog's nose print is unique, like a human's fingerprint.",
  "Puppies are born blind, deaf, and toothless.",
  "The Labrador Retriever has been the most popular dog breed in the U.S. for 30 years."
]

export default function DogFact() {
  const [fact, setFact] = useState(dogFacts[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setFact(dogFacts[Math.floor(Math.random() * dogFacts.length)])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-yellow-100 border-yellow-300 mb-4">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-yellow-800">Did You Know?</h3>
        <p className="text-yellow-900">{fact}</p>
      </CardContent>
    </Card>
  )
}

