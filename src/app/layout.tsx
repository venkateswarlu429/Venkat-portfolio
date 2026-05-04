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
    default: 'Venkateswarlu Maddula — Cloud Security Engineer',
    template: '%s | Venkateswarlu Maddula',
  },
  description:
    'Cloud Security Engineer. Six years hardening AWS, Azure, and Kubernetes for regulated workloads. Zero-trust IAM, DevSecOps automation, compliance-as-code.',
  keywords: [
    'Cloud Security Engineer', 'AWS Security', 'Azure Security',
    'Kubernetes Security', 'IAM', 'DevSecOps', 'Terraform',
    'Zero Trust', 'SOX', 'ISO 27001',
  ],
  authors: [{ name: 'Maddula Venkateswarlu' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://venkateswarlu.vercel.app',
    title: 'Venkateswarlu Maddula — Cloud Security Engineer',
    description: 'Securing cloud platforms with automation, IAM, and DevSecOps.',
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
