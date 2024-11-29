"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const dogEmojis = ['🐕', '🐩', '🦮', '🐕‍🦺', '🐾']

export default function MiaAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [emoji, setEmoji] = useState(dogEmojis[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      })
      setEmoji(dogEmojis[Math.floor(Math.random() * dogEmojis.length)])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-40 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg overflow-hidden mb-6">
      <motion.div
        className="absolute text-6xl"
        animate={position}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {emoji}
      </motion.div>
      <div className="absolute bottom-2 right-2 text-sm text-gray-600">
        Catch Mia if you can!
      </div>
    </div>
  )
}

