'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, CameraOff } from 'lucide-react'

export function WebcamDemo() {
  const [isStreaming, setIsStreaming] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [emotion, setEmotion] = useState<string | null>(null)

  useEffect(() => {
    if (isStreaming) {
      startWebcam()
    } else {
      stopWebcam()
    }
  }, [isStreaming])

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Error accessing the webcam", err)
    }
  }

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
    }
    setEmotion(null)
  }

  const toggleWebcam = () => {
    setIsStreaming(!isStreaming)
  }

  const detectEmotion = () => {
    // This is where you would implement the actual emotion detection logic
    // For this demo, we'll just set a random emotion
    const emotions = ['Happy', 'Sad', 'Angry', 'Surprised', 'Neutral']
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
    setEmotion(randomEmotion)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="aspect-video bg-muted mb-4 rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between items-center">
          <Button onClick={toggleWebcam}>
            {isStreaming ? <CameraOff className="mr-2 h-4 w-4" /> : <Camera className="mr-2 h-4 w-4" />}
            {isStreaming ? 'Stop Camera' : 'Start Camera'}
          </Button>
          <Button onClick={detectEmotion} disabled={!isStreaming}>
            Detect Emotion
          </Button>
        </div>
        {emotion && (
          <p className="mt-4 text-center text-lg font-semibold">
            Detected Emotion: {emotion}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

