import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WebcamDemo } from "@/components/webcam-demo";

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h1 className="mb-8 text-center text-4xl font-bold">
              Live Emotion Detection Demo
            </h1>
            <p className="mb-8 text-center text-lg">
              Experience Emotion AI in action using your webcam!
            </p>
            <WebcamDemo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
