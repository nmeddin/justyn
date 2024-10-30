'use client'

import { Button } from "@/components/ui/button"

export default function GetStartedButton() {
  return (
    <Button
      className="bg-white text-black hover:bg-gray-200"
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Get Started
    </Button>
  )
}