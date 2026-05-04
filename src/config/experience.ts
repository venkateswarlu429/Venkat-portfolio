export interface Experience {
  company: string
  position: string
  period: string
  description: string
  achievements?: string[]
  technologies?: string[]
}

export const experienceData: Experience[] = [
  {
    company: 'Alcoa',
    position: 'Azure DevOps Engineer',
    period: 'Mar 2025 - Present',
    description: 'Leading Azure cloud security initiatives, managing AKS security, and implementing SOX compliance controls.',
    achievements: [
      'Rebuilt Azure IAM with AAD groups, conditional access & PIM for SOX compliance',
      'Hardened AKS with pod security controls, RBAC, and network policies',
      'Automated non-compliant resource quarantine with Azure Functions + Python',
      'Integrated SAST, container scanning into Azure DevOps with security gates',
    ],
    technologies: ['Azure', 'AKS', 'Azure DevOps', 'AAD', 'Python', 'Azure Policy', 'Key Vault'],
  },
  {
    company: 'FMC Corporation',
    position: 'AWS DevOps Engineer',
    period: 'May 2024 - Feb 2025',
    description: 'Secured multi-account AWS infrastructure, hardened EKS clusters, and automated security remediation.',
    achievements: [
      'Refactored flat IAM into least-privilege roles with KMS scoped access',
      'Centralized security findings from Security Hub, GuardDuty & CloudTrail',
      'Built Python Lambda auto-remediation for Config rule violations',
      'Hardened EKS with NetworkPolicies, admission controls & signed images',
    ],
    technologies: ['AWS', 'EKS', 'IAM', 'Lambda', 'Python', 'Terraform', 'Security Hub', 'GuardDuty'],
  },
  {
    company: 'Wockhardt Limited',
    position: 'DevOps Engineer',
    period: 'Nov 2021 - Nov 2023',
    description: 'Implemented DevSecOps practices, managed EKS security, and standardized infrastructure as code.',
    achievements: [
      'Migrated IAM policies to Terraform with least-privilege enforcement',
      'Introduced namespace isolation & admission controls on EKS clusters',
      'Built Python automation for Config & CloudTrail security findings',
      'Established recurring IAM access reviews with security team',
    ],
    technologies: ['AWS', 'EKS', 'Terraform', 'Python', 'CloudWatch', 'Config'],
  },
  {
    company: 'Raheja QBE General Insurance',
    position: 'Cloud Engineer',
    period: 'Jul 2019 - Oct 2021',
    description: 'Established AWS security foundations, implemented compliance controls, and managed cloud infrastructure.',
    achievements: [
      'Hardened VPC security groups & NACLs for segmented insurance workloads',
      'Implemented ISO 27001 compliance controls using Config rules',
      'Configured Security Hub & GuardDuty with tuned alerting workflows',
      'Built Python utilities for continuous security posture monitoring',
    ],
    technologies: ['AWS', 'IAM', 'VPC', 'KMS', 'Security Hub', 'Python', 'Config'],
  },
]
