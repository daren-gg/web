import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { InteractiveGradient } from "@/components/interactive-gradient"
import { AppStoreBadge } from "@/components/app-store-badge"
import { AnimatedBackground } from "@/components/animated-background"
import { WolfLogo } from "@/components/wolf-logo"
import { LogoGithub, ChartActivity, Sparkles, Lightning } from "geist-icons"
import { PreviewCarousel } from "@/components/preview-carousel"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity">
              <WolfLogo />
              <span>daren.gg</span>
            </Link>
          </div>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Interactive Gradient Background */}
        <InteractiveGradient />

        <div className="container max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/40 bg-muted/50 text-sm mb-6 animate-fade-in">
            <Sparkles size={14} />
            <span className="text-muted-foreground">Native Mac performance</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="relative inline-block group">
              <span>The League of Legends Overlay</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-foreground transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </span>
            <br />
            <span className="relative inline-block group">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                Built for Mac
              </span>
              <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Real-time game stats, champion builds, and performance insights.
            Optimized for macOS with native APIs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* <Button size="lg" className="gap-2 h-12 px-6 text-base font-medium">
              <Download className="h-4 w-4" />
              Download for Mac
            </Button> */}
            <AppStoreBadge />
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            macOS 12.0 or later • Apple Silicon & Intel
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="container max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Built for performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to elevate your League of Legends gameplay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group relative border-border/40 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <CardContent className="pt-6 relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <ChartActivity size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Stats</h3>
                <p className="text-muted-foreground">
                  Live game statistics and performance metrics updated in real-time during your matches.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative border-border/40 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-500/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <CardContent className="pt-6 relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center mb-4 border border-violet-500/20 group-hover:scale-110 transition-transform">
                  <Sparkles size={24} className="text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Champion Insights</h3>
                <p className="text-muted-foreground">
                  Detailed champion information, recommended builds, and matchup data at your fingertips.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative border-border/40 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <CardContent className="pt-6 relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Lightning size={24} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Native Performance</h3>
                <p className="text-muted-foreground">
                  Built with native macOS APIs for minimal resource usage and maximum performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Preview Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Customize everything
            </h2>
            <p className="text-lg text-muted-foreground">
              Make the overlay truly yours
            </p>
          </div>

          <PreviewCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Navigation links */}
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="/about" className="hover:text-foreground transition-all duration-200 hover:scale-105">
                About
              </a>
              <a href="/privacy" className="hover:text-foreground transition-all duration-200 hover:scale-105">
                Privacy
              </a>
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
