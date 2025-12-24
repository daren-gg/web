import { ThemeToggle } from "@/components/theme-toggle"
import { WolfLogo } from "@/components/wolf-logo"
import { LogoGithub } from "geist-icons"
import Link from "next/link"

export const metadata = {
  title: "About - daren.gg",
  description: "Learn about daren.gg - the League of Legends overlay built for Mac with native performance and modern design.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity">
            <WolfLogo />
            <span>daren.gg</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/daren-gg/web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            >
              <LogoGithub size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-4">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            About daren.gg
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="text-lg text-muted-foreground mb-12">
              Building the next generation of League of Legends tools for Mac
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                daren.gg is dedicated to creating the best League of Legends experience for Mac users.
                We believe that macOS players deserve tools that are just as powerful and performant as
                those available on other platforms - without compromising on design or user experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Why Mac?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For too long, League of Legends players on Mac have been overlooked. Most gaming tools
                are built primarily for Windows, with Mac support being an afterthought - if it exists at all.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re changing that. By building natively for macOS and leveraging Apple&apos;s powerful APIs,
                we&apos;re creating tools that feel at home on your Mac while delivering the performance and
                features you need to improve your gameplay.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">What We&apos;re Building</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Performance Overlay</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our flagship product is a real-time overlay that provides champion insights, build
                    recommendations, and performance analytics - all while maintaining minimal system
                    resource usage thanks to native macOS integration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Player Profiles</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Track your progress, analyze your matches, and discover areas for improvement with
                    detailed player profiles and statistics. Coming soon.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Open Source</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe in transparency and community collaboration. Our web platform and future tools
                will be open source, allowing the community to contribute, audit, and improve the tools
                they use every day.
              </p>
              <a
                href="https://github.com/daren-gg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <LogoGithub size={16} />
                View our projects on GitHub
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Get Involved</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                daren.gg is in active development. We&apos;re always looking for feedback, bug reports, and
                feature suggestions from the community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Join us on GitHub to follow our progress, contribute to the codebase, or suggest features
                on our public roadmap.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Navigation links */}
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-all duration-200 hover:scale-105">
                About
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-all duration-200 hover:scale-105">
                Privacy
              </Link>
              <a href="https://arryan.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-200 hover:scale-105">
                Support
              </a>
            </div>

            {/* Right side - Copyright and brand */}
            <div className="flex items-center gap-2 text-sm">
              <p className="text-muted-foreground">
                © 2025 Arryan Bhatnagar. All rights reserved.
              </p>
              <span className="font-semibold">daren.gg</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
