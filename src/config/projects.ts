export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
}

const gh = (repo: string) => `https://github.com/venkateswarlu429/${repo}`

export const projectsData: Project[] = [
  {
    title: 'Live DevOps Platform',
    description:
      'End-to-end DevOps demo, live in production: a small Python API and static frontend showing its own live health, version, and status — Dockerized, tested and shipped through GitHub Actions CI/CD, deployed on Vercel\'s free tier. Live at live-devops-platform.vercel.app.',
    technologies: ['Python', 'Docker', 'GitHub Actions', 'Vercel'],
    github: gh('Live-devops-platform'),
  },
  {
    title: 'Terraform AWS EKS Platform',
    description:
      'Complete Kubernetes platform on AWS: VPC, EKS with managed node groups and IRSA, and a private PostgreSQL RDS reachable only from inside the cluster — three composable Terraform modules.',
    technologies: ['Terraform', 'AWS', 'EKS', 'RDS', 'VPC'],
    github: gh('terraform-aws-eks-platform'),
  },
  {
    title: 'Terraform Azure Landing Zone',
    description:
      'CAF-style Azure landing zone: management-group governance, hub-spoke networking with forced firewall egress, central logging, private Key Vault, and a private AKS cluster. Validated with terraform validate; deployable design, not a live deployment.',
    technologies: ['Terraform', 'Azure', 'AKS', 'Azure Policy'],
    github: gh('terraform-azure-landing-zone'),
  },
  {
    title: 'Azure Bicep Landing Zone',
    description:
      'The same CAF landing zone, ported to Bicep modules and scopes. bicep build- and lint-clean; deployable design, not a live deployment.',
    technologies: ['Bicep', 'Azure', 'AKS', 'Azure Policy'],
    github: gh('azure-bicep-landing-zone'),
  },
  {
    title: 'Kubernetes GitOps Platform',
    description:
      'GitOps delivery platform: a containerized FastAPI service synced to Kubernetes by ArgoCD with prune and self-heal, immutable commit-SHA image tags, and Prometheus metrics on a Grafana dashboard.',
    technologies: ['Kubernetes', 'ArgoCD', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana'],
    github: gh('k8s-gitops-platform'),
  },
  {
    title: 'GitHub Actions CI/CD Platform',
    description:
      'Reusable GitHub Actions platform: shared CI, security scanning, SBOM-attested signed container releases, and environment-gated deploys — consumer repos need ~15 lines of YAML.',
    technologies: ['GitHub Actions', 'Docker', 'Python'],
    github: gh('github-actions-cicd-platform'),
  },
  {
    title: 'Jenkins CI/CD Pipeline',
    description:
      'Jenkins as code: declarative pipeline, versioned shared library, and a controller built entirely from code with Configuration as Code — staging-first deploys, a promotion gate, and automatic rollback.',
    technologies: ['Jenkins', 'JCasc', 'Docker', 'Kubernetes'],
    github: gh('jenkins-cicd-pipeline'),
  },
  {
    title: 'Kubernetes Observability Platform',
    description:
      'Observability stack on kube-prometheus-stack: SLO-based burn-rate alerting, Grafana dashboards provisioned as code, a Loki log pipeline, and Alertmanager routing — every component validated before commit.',
    technologies: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'Kubernetes'],
    github: gh('k8s-observability-platform'),
  },
  {
    title: 'AI Change Risk Checker',
    description:
      'Pre-deploy risk gate for Terraform plans: a deterministic rules engine scores changes 0–100 on outage, cost, and security risk and pairs the score with a rollback plan. 31 passing tests.',
    technologies: ['Python', 'Terraform'],
    github: gh('ai-change-risk-checker'),
  },
  {
    title: 'AWS Serverless Event Pipeline',
    description:
      'Event-driven serverless pipeline: API Gateway → Lambda → SQS → Lambda → DynamoDB, with schema validation, idempotent writes, a DLQ with alarms, and least-privilege IAM — all in Terraform.',
    technologies: ['AWS', 'Lambda', 'SQS', 'DynamoDB', 'Terraform'],
    github: gh('aws-serverless-event-pipeline'),
  },
  {
    title: 'Ansible Infrastructure Automation',
    description:
      'Ansible automation for Debian/Ubuntu servers: hardened baseline, Docker, Prometheus node_exporter, and templated Compose app stacks — variable-driven, idempotent roles, secrets kept out of the repo.',
    technologies: ['Ansible', 'Docker', 'Prometheus', 'Linux'],
    github: gh('ansible-infra-automation'),
  },
  {
    title: 'Azure DevOps YAML Migration',
    description:
      'Classic-to-YAML migration for Azure DevOps: a multi-stage pipeline built from reusable templates with parameters and conditions, plus NuGet versioning into Azure Artifacts.',
    technologies: ['Azure DevOps', 'YAML', 'NuGet'],
    github: gh('azure-devops-yaml-migration'),
  },
  {
    title: '.NET CI/CD Packaging',
    description:
      'Purpose-built sample demonstrating .NET build, test, pack, and publish workflows — the same flow in GitHub Actions and Azure DevOps, publishing gated to version tags. A sample, not production .NET work.',
    technologies: ['.NET', 'GitHub Actions', 'Azure DevOps', 'NuGet'],
    github: gh('dotnet-cicd-packaging'),
  },
  {
    title: 'Azure FinOps Guardrails',
    description:
      'FinOps guardrails as code: Cost Management budgets with alerts, policy enforcement on cost drivers, scheduled cost exports, and a Python cost report. Validated with terraform validate; a purpose-built demonstration, not production FinOps ownership.',
    technologies: ['Terraform', 'Azure Policy', 'Python', 'Azure Cost Management'],
    github: gh('azure-finops-guardrails'),
  },
]
