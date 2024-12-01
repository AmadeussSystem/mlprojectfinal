import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WebcamDemo } from '@/components/webcam-demo'

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Live Emotion Detection Demo</h1>
            <p className="text-center mb-8 text-lg">Experience Emotion AI in action using your webcam!</p>
            <WebcamDemo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

