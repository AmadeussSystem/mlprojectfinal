import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <section className="bg-gradient-to-b from-background to-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold">
              Real-time Emotion Detection with AI
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Emotion AI uses cutting-edge artificial intelligence to analyze
              facial expressions and detect emotions in real-time through your
              webcam.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">
                Try Live Demo <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Why Choose Emotion AI?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <Zap className="mx-auto mb-4 size-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">
                  Real-time Analysis
                </h3>
                <p>
                  Get instant emotion detection results through your webcam
                  feed.
                </p>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto mb-4 size-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Privacy-focused</h3>
                <p>
                  All processing is done locally in your browser for maximum
                  privacy.
                </p>
              </div>
              <div className="text-center">
                <BarChart className="mx-auto mb-4 size-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">
                  Detailed Insights
                </h3>
                <p>
                  Gain valuable emotional intelligence with our comprehensive
                  analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-3xl font-bold">
              Ready to Experience Emotion AI?
            </h2>
            <p className="mb-8 text-xl">
              Try our live demo and see the power of real-time emotion detection
              in action.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">
                Go to Live Demo <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
