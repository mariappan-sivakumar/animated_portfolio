import { Component } from '@angular/core';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  visualType: 'image' | 'icon';
  visualValue: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'npos',
      title: 'nPOS Co-Lending & Collections Module',
      subtitle: 'Client: NorthernArc Capital (NBFC)',
      description: 'Production-grade co-lending platform collections module re-architected using Orchestration, Factory, and Strategy design patterns to enable database-configurable workflow flexibility.',
      bullets: [
        'Re-architected the monolithic collections module using Orchestration, Factory, and Strategy design patterns, enabling database-configurable workflow flexibility.',
        'Integrated 15+ RESTful APIs with Spring Security (JWT/RBAC) for cross-system integration between banks, NBFCs, and originators — zero security incidents reported.',
        'Optimized PostgreSQL performance via composite indexing and native JPA queries, reducing critical query execution time by up to 50%.',
        'Managed DB schema migrations using Python Alembic across Dev/UAT/Prod — achieved zero-downtime deployments with full rollback capability.',
        'Maintained >90% JUnit/Mockito unit test coverage and enforced SonarLint standards; led production bug triage with >98% SLA resolution rate.',
        'Ensured ACID compliance and data integrity across all loan lifecycle operations per NBFC regulatory standards.'
      ],
      tags: ['SPRING BOOT', 'KAFKA', 'REDIS', 'POSTGRESQL', 'ALEMBIC', 'DOCKER', 'JAVA 8'],
      visualType: 'image',
      visualValue: '/colending_dashboard.png'
    },
    {
      id: 'fineract',
      title: 'Apache Fineract – Internal R&D Project',
      subtitle: 'Core Banking Platform Enhancement',
      description: 'Explored Apache Fineract (open-source core banking platform) to evaluate core banking architecture; forked and extended Apache Fineract and the Mifos X Web-App (Angular).',
      bullets: [
        'Built an AI chatbot integrated into the Fineract Web-App UI using Rasa (NLP) and Python, enabling natural-language queries against the core banking database.',
        'Identified and fixed 5+ SQL/backend defects in Fineract\'s product creation module, including a recurring deposit (RD) product creation failure caused by a malformed SQL query — resolved via root-cause schema analysis.',
        'Gained hands-on understanding of core banking domain concepts (loan/deposit product configuration, accounting rules) by working directly in Fineract\'s Java backend.'
      ],
      tags: ['JAVA', 'RASA AI', 'MYSQL', 'OPEN SOURCE'],
      visualType: 'image',
      visualValue: '/fineract.png'
    },
    {
      id: 'agri',
      title: 'Agri-Commerce Platform',
      subtitle: 'Internship (Java Trainee) | Zuci Systems',
      description: 'Multi-vendor e-commerce platform for agricultural products (fruits, vegetables, poultry, dairy) connecting customers directly with sellers; designed and built the complete backend API suite.',
      bullets: [
        'Designed and developed 50+ RESTful APIs (Spring Boot) covering product catalog, cart, checkout, supplier onboarding, categories/sub-categories, promotions, and reporting modules, documented via Swagger/OpenAPI.',
        'Implemented Spring Security with JWT-based, role-based access control (RBAC) across 3 roles — Admin, Seller, and Customer — each with distinct permission sets per API.',
        'Built seller onboarding flow: Admin-initiated setup with auto-generated temporary password emailed to the seller for self-service profile completion; customer self-registration via OTP verification.',
        'Developed inventory and order management APIs enabling sellers to manage stock, fulfill and mark dispatched orders, and generate sales reports filtered by custom timeframes.',
        'Built category/sub-category-based product browsing, cart, and checkout APIs for customers, plus admin capabilities for seller onboarding, promotions, discounts, and customer review moderation.'
      ],
      tags: ['SPRING BOOT', 'SPRING SECURITY', 'RBAC', 'REST API', 'HIBERNATE'],
      visualType: 'image',
      visualValue: '/agri-ecommerce.png'
    },
    {
      id: 'pma',
      title: 'Property Management App (PMA)',
      subtitle: 'Internship Project | Zuci Systems',
      description: 'A full-stack property management platform bridging landlords and tenants, managing rentals, maintenance, legal compliance, and tenant interactions across distinct user-role modules.',
      bullets: [
        'Designed and delivered Spring Boot RESTful APIs for the CRM module (tenant onboarding, lease management, maintenance) with full Swagger UI documentation.',
        'Achieved 80%+ JUnit/Mockito test coverage on all service-layer logic, reducing post-release regression defects.',
        'Participated in Agile/Scrum ceremonies and collaborated with BAs and QA to deliver client-aligned solutions on schedule.'
      ],
      tags: ['SPRING BOOT', 'MYSQL', 'SWAGGER', 'JPA', 'JAVA 8'],
      visualType: 'image',
      visualValue: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUufHN3zq4Lm_nBM4w4niHGlKysEAbiK1pDjrD4pXBDUuz10S8OxHCnqsctEczy2o7gksBWOAJs69rb1-3zNxgy1gs4hDdiacSqvbZ3PJBahK7Z5Yi0LAo1DedvVGK3Clw5zLb3jBqu6IqG1VbDKb_A7ARexsCUfJGCkjDAvj3AK3fOyBgPEAq87f6b1dN9h9Jsq48rPezUhwnRUyUyNfaUqSUqADY7ZcAmITNKjJa4tZIokM2GcivdltAGOlVFUiGrWcIXwEHJc9i'
    }
  ];

  openProject(project: Project): void {
    this.selectedProject = project;
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}

