import { Button } from "@/components/ui/button";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { Brain } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="size-6" />
          <span className="text-xl font-bold">Emotion AI</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <SignedOut>
                <Button variant="outline" asChild>
                  <Link href="sign-in" className="hover:underline">
                    Sign In
                  </Link>
                </Button>
              </SignedOut>
            </li>
            <li>
              <Button variant="outline" asChild>
                <Link href="/#about" className="hover:underline">
                  About
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" asChild>
                <Link href="/demo" className="hover:underline">
                  Live Demo
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" asChild>
                <Link href="/demo">Get Started</Link>
              </Button>
              <UserButton showName />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
