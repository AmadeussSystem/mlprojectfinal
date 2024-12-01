"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as faceapi from "face-api.js";
import { Camera, CameraOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function WebcamDemo() {
  const [isStreaming, setIsStreaming] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [emotion, setEmotion] = useState<string | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setIsModelLoaded(true);
      console.log("Models loaded");
    };

    loadModels();
  }, []);

  useEffect(() => {
    if (isStreaming && isModelLoaded) {
      startWebcam();
    } else {
      stopWebcam();
    }
  }, [isStreaming, isModelLoaded]);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      analyzeEmotions();
    } catch (err) {
      console.error("Error accessing the webcam", err);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
    setEmotion(null);
  };

  const analyzeEmotions = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    video.onloadedmetadata = () => {
      const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight,
      };
      faceapi.matchDimensions(canvas, displaySize);

      const updateEmotion = async () => {
        if (!isStreaming) return;

        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (detections.length > 0) {
          const emotions = detections[0].expressions as faceapi.FaceExpressions;
          const dominantEmotion = Object.keys(emotions).reduce((a, b) =>
            emotions[a as keyof faceapi.FaceExpressions] >
            emotions[b as keyof faceapi.FaceExpressions]
              ? a
              : b
          ) as keyof faceapi.FaceExpressions;

          setEmotion(dominantEmotion);
        }

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

        requestAnimationFrame(updateEmotion);
      };

      updateEmotion();
    };
  };

  const toggleWebcam = () => {
    setIsStreaming(!isStreaming);
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardContent className="p-6">
        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute left-0 top-0 size-full object-cover"
          />
          <canvas ref={canvasRef} className="absolute left-0 top-0 size-full" />
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={toggleWebcam}>
            {isStreaming ? (
              <CameraOff className="mr-2 size-4" />
            ) : (
              <Camera className="mr-2 size-4" />
            )}
            {isStreaming ? "Stop Camera" : "Start Camera"}
          </Button>
        </div>
        {emotion && (
          <p className="mt-4 text-center text-lg font-semibold">
            Detected Emotion: {emotion}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
