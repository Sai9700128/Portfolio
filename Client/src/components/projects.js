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
    title: "→ Roomies Radar",
    status: "Northeastern University | October - December 2024",
    description: "Comprehensive platform connecting individuals for compatible roommates and rental accommodations",
    techStack: ["React.js", "Node.js", "MongoDB", "TypeScript", "PWA", "JWT", "Bitbucket"],
    details: [
      "Leveraged Domain-Driven Design (DDD) principles for robust domain modeling",
      "JWT-based secure authentication and user registration system",
      "Sophisticated roommate matching based on preferences (gender, food habits, room type)",
      "Property listings with photos, amenities, and availability details",
      "Progressive Web App (PWA) for cross-device accessibility and performance",
      "Internationalization (i18n) support for global users",
      "Premium membership integration with additional features"
    ]
  },
  {
    id: 4,
    title: "→ Attendance Marking System using Face Recognition & AWS",
    status: "KL University | December 2022 - February 2023",
    description: "Automated facial recognition attendance system leveraging AWS cloud computing",
    techStack: ["AWS", "Amazon S3", "OpenCV", "Python", "Boto3", "Machine Learning"],
    details: [
      "Real-time facial detection and recognition using OpenCV",
      "AWS S3 integration for secure image storage and processing",
      "Boto3 for seamless AWS cloud services integration",
      "Pre-registered facial data matching for accurate identification",
      "Automated attendance marking upon successful recognition",
      "Streamlined and secured attendance-taking process",
      "GitHub: Saikalyan11/Attendance-marking-system-using-Face-recogniton-and-Cloud-computing"
    ]
  }
];