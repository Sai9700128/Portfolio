export const projects = [
    {
      id: 1,
      title: "→ URL Shortener - Microservice Architecture",
      status: "Status: In Progress (April 2025 - Present)",
      description: "Scalable microservices-based URL shortener with Spring Boot",
      techStack: ["Spring Boot", "Docker", "Redis", "MySQL", "Terraform", "Jenkins", "AWS ECS"],
      details: [
        "Redis caching for optimized URL redirection",
        "AWS ECS Fargate deployment with ALB & Route 53",
        "CloudWatch integration for real-time monitoring"
      ]
    },
    {
      id: 2,
      title: "→ Cloud-Native Backend Web Application",
      status: "Completed: January - April 2025",
      description: "Secure & scalable backend with automated infrastructure",
      techStack: ["Spring Boot", "MySQL", "Packer", "AWS", "Terraform", "GitHub Actions"],
      details: [
        "99% uptime post-deployment",
        "40% reduction in provisioning time with Packer",
        "60% less IaC duplication using Terraform modules",
        "AWS Secrets Manager for credential management"
      ]
    },
    {
      id: 3,
      title: "→ Face Recognition System using AWS",
      status: "Bachelor's Final Project",
      description: "Cloud-based facial recognition implementation",
      techStack: ["AWS Rekognition", "Lambda", "S3", "Python"]
    }
  ];