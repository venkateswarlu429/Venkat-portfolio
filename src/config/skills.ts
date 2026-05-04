export interface Skill {
  name: string
  icon: string
  level: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: '☁️', level: 95 },
      { name: 'Azure', icon: '🔷', level: 90 },
      { name: 'IAM', icon: '🔐', level: 95 },
      { name: 'VPC/Networking', icon: '🌐', level: 90 },
      { name: 'KMS', icon: '🔑', level: 85 },
    ],
  },
  {
    category: 'Container & Orchestration',
    skills: [
      { name: 'Kubernetes', icon: '☸️', level: 90 },
      { name: 'EKS', icon: '📦', level: 88 },
      { name: 'AKS', icon: '🎯', level: 85 },
      { name: 'RBAC', icon: '👥', level: 90 },
      { name: 'Network Policies', icon: '🛡️', level: 85 },
    ],
  },
  {
    category: 'Security & Compliance',
    skills: [
      { name: 'Security Hub', icon: '🔒', level: 92 },
      { name: 'GuardDuty', icon: '👁️', level: 88 },
      { name: 'Config', icon: '⚙️', level: 90 },
      { name: 'CloudTrail', icon: '📊', level: 90 },
      { name: 'Azure Security', icon: '🛡️', level: 87 },
    ],
  },
  {
    category: 'IaC & Automation',
    skills: [
      { name: 'Terraform', icon: '🏗️', level: 95 },
      { name: 'Python', icon: '🐍', level: 92 },
      { name: 'Bash', icon: '💻', level: 88 },
      { name: 'Lambda', icon: '⚡', level: 85 },
      { name: 'Azure Functions', icon: '⚙️', level: 83 },
    ],
  },
  {
    category: 'DevSecOps',
    skills: [
      { name: 'GitLab CI', icon: '🦊', level: 88 },
      { name: 'Azure DevOps', icon: '🔵', level: 90 },
      { name: 'SAST', icon: '🔍', level: 85 },
      { name: 'Container Scan', icon: '📦', level: 87 },
      { name: 'Trivy', icon: '🔐', level: 82 },
    ],
  },
]
