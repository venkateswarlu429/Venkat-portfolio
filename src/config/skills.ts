export interface SkillCategory {
  category: string
  blurb: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    blurb: 'Production workloads across both clouds.',
    skills: ['AWS', 'Azure'],
  },
  {
    category: 'Kubernetes & Containers',
    blurb: 'Cluster platforms and container delivery.',
    skills: ['Kubernetes', 'EKS', 'AKS', 'Docker'],
  },
  {
    category: 'IaC & Automation',
    blurb: 'Everything versioned, repeatable, and reviewable.',
    skills: ['Terraform', 'Ansible', 'Python', 'Bash', 'PowerShell'],
  },
  {
    category: 'CI/CD & GitOps',
    blurb: 'Pipelines as code, gated deploys, GitOps sync.',
    skills: ['GitHub Actions', 'Azure DevOps', 'Jenkins', 'GitLab CI', 'ArgoCD'],
  },
  {
    category: 'Observability',
    blurb: 'Metrics, dashboards, and alerts that page on user impact.',
    skills: ['Grafana', 'Prometheus', 'Azure Monitor', 'CloudWatch'],
  },
]
