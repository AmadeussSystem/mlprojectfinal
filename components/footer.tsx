import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; 2024 Emotion AI. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

