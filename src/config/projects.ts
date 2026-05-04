export interface Project {
  title: string
  description: string
  image?: string
  technologies: string[]
  github?: string
  demo?: string
}

export const projectsData: Project[] = [
  {
    title: 'Multi-Account AWS Security Platform',
    description: 'Centralized security monitoring across 50+ AWS accounts with automated remediation. Integrated Security Hub, GuardDuty, and Config into unified threat detection pipeline.',
    image: '/assets/images/aws-security.jpg',
    technologies: ['AWS', 'Lambda', 'Python', 'Security Hub', 'GuardDuty', 'Organizations'],
    github: '',
    demo: '',
  },
  {
    title: 'Azure SOX Compliance Framework',
    description: 'Rebuilt Azure IAM and governance model for SOX compliance. Implemented PIM, conditional access, and management group policies across enterprise subscriptions.',
    image: '/assets/images/azure-compliance.jpg',
    technologies: ['Azure', 'AAD', 'Azure Policy', 'PIM', 'Blueprints', 'Python'],
    github: '',
    demo: '',
  },
  {
    title: 'Kubernetes Security Hardening',
    description: 'Hardened EKS/AKS clusters with NetworkPolicies, RBAC, admission controllers, and signed container enforcement. Blocked privileged pods and restricted registries.',
    image: '/assets/images/k8s-security.jpg',
    technologies: ['Kubernetes', 'EKS', 'AKS', 'NetworkPolicy', 'RBAC', 'OPA'],
    github: '',
    demo: '',
  },
  {
    title: 'Automated Security Remediation',
    description: 'Built Python-based Lambda and Azure Functions to auto-remediate security violations. Quarantined non-compliant resources and enforced encryption standards.',
    image: '/assets/images/automation.jpg',
    technologies: ['Python', 'Lambda', 'Azure Functions', 'Config', 'CloudTrail'],
    github: '',
    demo: '',
  },
  {
    title: 'Zero-Trust IAM Architecture',
    description: 'Refactored flat IAM into least-privilege role models with permission boundaries. Implemented just-in-time access and mandatory approval workflows.',
    image: '/assets/images/iam.jpg',
    technologies: ['AWS IAM', 'AAD', 'Terraform', 'PIM', 'KMS', 'Vault'],
    github: '',
    demo: '',
  },
  {
    title: 'DevSecOps Pipeline Integration',
    description: 'Integrated SAST, container scanning, and IaC security checks into CI/CD pipelines. Gated deployments on security quality thresholds.',
    image: '/assets/images/devsecops.jpg',
    technologies: ['GitLab CI', 'Azure DevOps', 'Trivy', 'Snyk', 'tflint', 'OWASP ZAP'],
    github: '',
    demo: '',
  },
]
