export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  email: string
  social: {
    github: string
    linkedin: string
    twitter: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Maddula Venkateswarlu',
  title: 'Venkateswarlu Maddula | Senior DevOps & Platform Engineer',
  description: 'Senior DevOps & Platform Engineer building reliable cloud platforms with Kubernetes, infrastructure as code, and CI/CD across AWS and Azure. Open to DevOps, platform, and SRE roles.',
  url: 'https://venkat-portfolio-zeh6.vercel.app/',
  email: 'vm4537145@gmail.com',
  social: {
    github: 'https://github.com/venkateswarlu429',
    linkedin: 'https://www.linkedin.com/in/venkateswarlu-maddula-53a890162/',
    twitter: 'https://twitter.com/venkateswarlu',
  },
}
