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
  title: 'Venkateswarlu Maddula | Senior DevOps Engineer',
  description: 'Senior DevOps and Cloud Engineer specializing in AWS, Azure, Kubernetes, infrastructure as code, and CI/CD automation.',
  url: 'https://venkateswarlu.vercel.app',
  email: 'vm4537145@gmail.com',
  social: {
    github: 'https://github.com/venkateswarlu429',
    linkedin: 'https://www.linkedin.com/in/venkatswarlu-maddula-53a890162/',
    twitter: 'https://twitter.com/venkateswarlu',
  },
}
