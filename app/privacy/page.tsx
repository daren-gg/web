import { ThemeToggle } from "@/components/theme-toggle"
import { WolfLogo } from "@/components/wolf-logo"
import { LogoGithub } from "geist-icons"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - daren.gg",
  description: "Learn how daren.gg collects, uses, and protects your data.",
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div className="text-sm text-muted-foreground mb-12">
            Last updated: October 22, 2025
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At daren.gg, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, and protect your information when you use our League of Legends overlay application
                and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>

              <h3 className="text-xl font-medium mb-3 text-foreground">Game Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our overlay application accesses real-time game data from League of Legends, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Champion selections and match information</li>
                <li>In-game statistics and performance metrics</li>
                <li>Player summoner names and match history</li>
                <li>Build recommendations and item purchases</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-foreground">Player Profiles</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you search for player profiles, we retrieve publicly available data from Riot Games APIs:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Summoner name, level, and rank</li>
                <li>Match history and statistics</li>
                <li>Champion mastery and performance data</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-foreground">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect anonymous usage statistics to improve our services:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>App performance and crash reports</li>
                <li>Feature usage analytics</li>
                <li>System information (macOS version, hardware)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide real-time overlay features and champion insights</li>
                <li>To display player statistics and match history</li>
                <li>To improve our application and develop new features</li>
                <li>To fix bugs and optimize performance</li>
                <li>To ensure fair use and prevent abuse of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Storage and Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We prioritize the security of your data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Most data is processed locally on your device</li>
                <li>We do not store your personal information on our servers unless necessary for the service</li>
                <li>All data transmissions are encrypted using industry-standard protocols</li>
                <li>We implement appropriate technical and organizational measures to protect your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                daren.gg relies on third-party services to function:
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground">Riot Games</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Riot Games&apos; official APIs to access League of Legends game data. This data is subject
                to Riot Games&apos; own privacy policy and terms of service. daren.gg is not endorsed by Riot Games
                and does not reflect the views or opinions of Riot Games or anyone officially involved in
                producing or managing Riot Games properties.
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground">Analytics Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may use privacy-respecting analytics services to understand how users interact with our
                application. These services are configured to minimize data collection and respect user privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies and Local Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses local storage to save your preferences, such as theme settings and recently
                viewed profiles. This data is stored locally on your device and is not transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the following rights regarding your data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access: Request a copy of the data we have about you</li>
                <li>Deletion: Request deletion of your data from our systems</li>
                <li>Correction: Request correction of inaccurate data</li>
                <li>Opt-out: Disable optional data collection features in app settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain data only as long as necessary to provide our services and comply with legal
                obligations. Anonymous analytics data may be retained indefinitely for product improvement
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify users of any material
                changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We
                encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Open Source Transparency</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As an open-source project, our code is publicly available for audit and review. You can
                examine exactly how we handle data by reviewing our source code on GitHub.
              </p>
              <a
                href="https://github.com/daren-gg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <LogoGithub size={16} />
                View our source code
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>Email: privacy@daren.gg</li>
                <li>GitHub: <a href="https://github.com/daren-gg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/daren-gg</a></li>
              </ul>
            </section>

            <section className="border-t border-border/40 pt-8 mt-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Legal Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                daren.gg is not endorsed by Riot Games and does not reflect the views or opinions of
                Riot Games or anyone officially involved in producing or managing Riot Games properties.
                Riot Games and all associated properties are trademarks or registered trademarks of
                Riot Games, Inc.
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
