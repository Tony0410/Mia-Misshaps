"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  "I've been a very naughty girl!",
  "Oops, I did it again!",
  "I weely was busting to go!",
  "Just marking my territory, humans!",
  "I thought this was the designated wee spot!",
  "My bladder has a mind of its own!",
  "I'm not incontinent, I'm just generous with my liquids!",
  "This is my protest against indoor plumbing!",
  "I'm helping you mop the floors!",
  "Just giving you another reason to love me!"
]

export default function MiaQuote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
    <Card className="bg-pink-100 border-pink-300 mb-4">
      <CardContent className="p-4">
        <motion.p 
          className="text-lg font-medium text-pink-800 text-center italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          "{quote}"
        </motion.p>
      </CardContent>
    </Card>
  )
}

