import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Venkateswarlu Maddula — Senior DevOps Engineer',
    template: '%s | Venkateswarlu Maddula',
  },
  description:
    'Senior DevOps Engineer specializing in AWS, Azure, Kubernetes, Terraform, CI/CD automation, and reliable cloud infrastructure.',
  keywords: [
    'DevOps Engineer', 'Cloud Engineer', 'AWS', 'Azure',
    'Kubernetes', 'Terraform', 'CI/CD', 'Infrastructure as Code',
    'GitHub Actions', 'Jenkins', 'Site Reliability Engineering',
  ],
  authors: [{ name: 'Maddula Venkateswarlu' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://venkateswarlu.vercel.app',
    title: 'Venkateswarlu Maddula — Senior DevOps Engineer',
    description: 'Senior DevOps Engineer building reliable cloud platforms with automation, infrastructure as code, Kubernetes, and CI/CD.',
    siteName: 'Venkateswarlu Portfolio',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-bg text-fg`}>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
