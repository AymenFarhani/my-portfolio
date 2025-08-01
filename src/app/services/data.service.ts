import { Injectable } from '@angular/core';
import { Skill } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSkills(): Skill[] {
    return [
      // Principal Skills
      { name: 'Java 8/11/17', category: 'Principal Skills', level: 5 },
      { name: 'Spring Boot 2/3', category: 'Principal Skills', level: 5 },
      { name: 'Spring Framework', category: 'Principal Skills', level: 5 },
      { name: 'Spring Batch', category: 'Principal Skills', level: 5 },
      { name: 'JPA/Hibernate', category: 'Principal Skills', level: 5 },
      { name: 'REST API', category: 'Principal Skills', level: 5 },
      { name: 'JWT', category: 'Principal Skills', level: 5 },
      { name: 'Microservices', category: 'Principal Skills', level: 4 },
      { name: 'Software Architecture', category: 'Principal Skills', level: 3 },
      { name: 'TypeScript', category: 'Principal Skills', level: 3.5 },
      { name: 'JavaScript', category: 'Principal Skills', level: 3.5 },
      { name: 'Angular', category: 'Principal Skills', level: 3.5 },
      { name: 'SQL', category: 'Principal Skills', level: 4 },
      { name: 'Apache Camel', category: 'Principal Skills', level: 3.5 },
      { name: 'RabbitMQ', category: 'Principal Skills', level: 3.5 },
      { name: 'Kafka', category: 'Principal Skills', level: 3.5 },

      // Tests
      { name: 'Spring Boot Test', category: 'Tests', level: 5 },
      { name: 'JUnit 4/5', category: 'Tests', level: 5 },
      { name: 'Mockito', category: 'Tests', level: 4 },

      // Other Stacks
      { name: 'C#', category: 'Other Stacks', level: 3 },
      { name: 'ASP.NET Core', category: 'Other Stacks', level: 3 },
      { name: 'Entity Framework Core', category: 'Other Stacks', level: 3 },
      { name: 'Python', category: 'Other Stacks', level: 3 },
      { name: 'Oddo ERP', category: 'Other Stacks', level: 3 },

      // Tools
      { name: 'IntelliJ IDEA', category: 'Tools', level: 5 },
      { name: 'Eclipse', category: 'Tools', level: 5 },
      { name: 'Docker Desktop', category: 'Tools', level: 4 },
      { name: 'Git', category: 'Tools', level: 5 },
      { name: 'Jenkins', category: 'Tools', level: 4 },
      { name: 'PostgreSQL', category: 'Tools', level: 4 },
      { name: 'Jira', category: 'Tools', level: 4 },
      { name: 'Archimate', category: 'Tools', level: 4 },

      // DevOps and Cloud
      { name: 'CI/CD', category: 'DevOps and Cloud', level: 5 },
      { name: 'Docker', category: 'DevOps and Cloud', level: 4},
      { name: 'Jenkins', category: 'DevOps and Cloud', level: 3.5},
      { name: 'AWS', category: 'DevOps and Cloud', level: 3 },
      { name: 'Terraform', category: 'DevOps and Cloud', level: 3.5 },

      // Best Practices
      { name: 'OOP', category: 'Best Practices', level: 5 },
      { name: 'Design Patterns', category: 'Best Practices', level: 5 },
      { name: 'Clean Code', category: 'Best Practices', level: 5 },
      { name: 'TDD', category: 'Best Practices', level: 3 }
    ];
  }

  getSkillCategories(): string[] {
    return [
      'Principal Skills',
      'Tests',
      'Other Stacks',
      'Tools',
      'DevOps and Cloud',
      'Best Practices'
    ];
  }

  getExperience(){
    return [
  {
    company: 'Speds',
    position: 'Information and Process Architect / Scrum Master',
    period: '01/2025 - Present',
    location: 'Brussels, Belgium',
    flag: 'assets/flags/belgium_flag.png',
    project: 'E-Invoicing',
    team: 'Product Owner, Scrum Master, 4 developers',
    responsibilities: [
      'Designed and standardized architectural diagrams (Data Flow, Component, Container, API Interaction)',
      'Designed the Deployment pipeline in AWS using Docker, ECS and EKS',
      'Documenting applications built with Grails and Groovy with Spring Framework',
      'Revitalized outdated Confluence documentation, migrating 50+ pages',
      'Optimized legacy architectural diagrams to mirror real-time codebases',
      'Designed, Developed and deployed an AFP to PDF converter with Spring Boot 3, Java 17',
      'Pioneered intuitive diagrams that cut feature integration time',
      'Spearheaded architectural discussions in weekly meetings'
    ],
    technologies: [
      'IntelliJ IDEA', 'Docker', 'Java', 'Groovy', 'Grails',
      'Spring Framework', 'WSL', 'REST APIs', 'RabbitMQ',
      'Hazelcast', 'ElasticSearch', 'AWS', 'Archimate',
      'C4 Model', 'Confluence'
    ]
  },
  {
    company: 'ARHS DEVELOPMENTS',
    position: 'Full Stack Java/JEE Angular Developer',
    period: '03/2024 - 11/2024',
    location: 'Brussels, Belgium',
    flag: 'assets/flags/belgium_flag.png',
    project: 'EURES',
    team: '8 Full Stack developers, 1 architect, 1 business analyst, 2 testers, 1 Project manager',
    responsibilities: [
      'Designed and maintained critical application modules including CV management',
      'Developed and optimized RESTful web services',
      'Built dynamic user interfaces using Angular framework',
      'Containerized applications using Docker',
      'Automated CI/CD pipelines through GitLab CI'
    ],
    technologies: [
      'Java 8/11/17', 'Spring Boot', 'Spring REST', 'Spring Data',
      'Angular', 'Maven', 'JPA', 'CI/CD', 'Docker',
      'IntelliJ', 'Oracle DB', 'Git', 'WinSCP'
    ]
  },
  {
    company: 'SPF FINANCES',
    position: 'Full Stack Java/JEE Developer',
    period: '05/2022 - 12/2023',
    location: 'Brussels, Belgium',
    flag: 'assets/flags/belgium_flag.png',
    project: 'STIPAD',
    team: '6 Full Stack developers, 4 business analysts, 4 testers, 1 PO, 1 service manager',
    responsibilities: [
      'Designed and maintained core modules including plot management',
      'Engineered RESTful and SOAP web services',
      'Implemented Apache Camel integration framework',
      'Architected automated batch processing solution',
      'Developed batch management interfaces with Spring Boot and Angular',
      'Built user interfaces with JSF 2 and PrimeFaces',
      'Automated CI/CD pipelines via GitLab CI'
    ],
    technologies: [
      'Java 8', 'Spring Boot', 'Spring REST', 'Spring Data',
      'Spring Batch', 'Apache Camel', 'Angular', 'EJB',
      'SOAP', 'Struts', 'JSF 2/Primefaces', 'Maven',
      'JPA', 'CI/CD', 'IntelliJ', 'DB2', 'Oracle DB', 'Git'
    ]
  },
  {
    company: 'BE SOFTILYS',
    position: 'Full Stack Java/JEE React JS Developer',
    period: '08/2021 - 03/2022',
    location: 'Tunisia',
    flag: 'assets/flags/tunisian_flag.png',
    project: 'Desktop Publishing Connector',
    team: '1 Developer, 1 technical referent',
    responsibilities: [
      'Development of APIs for XML files mapping',
      'Development of User Interfaces using ReactJS and Redux',
      'Database architecture with MySQL',
      'Implementation of unit and integration tests',
      'Running applications using docker containers',
      'CI/CD continuous integration via gitlab CI'
    ],
    technologies: [
      'Java', 'React JS', 'Maven', 'MySQL', 'JUnit',
      'Eclipse IDE', 'VSCode', 'MySQL Workbench', 'Postman', 'Jira'
    ]
  },
  {
    company: 'WHITECAPE TECHNOLOGIES',
    position: 'Full Stack Java/JEE Angular Developer',
    period: '07/2020 - 07/2021',
    location: 'Tunisia',
    flag: 'assets/flags/tunisian_flag.png',
    project: 'Lia Web',
    team: '6 Full Stack developers, 1 project manager',
    responsibilities: [
      'Development and maintenance of different modules (user management, project management)',
      'Database architecture with MySQL',
      'Full stack development of export procurement and complaints management features'
    ],
    technologies: [
      'Java', 'Angular', 'Maven', 'MySQL', 'JUnit',
      'Eclipse IDE', 'SOAP WS', 'SOAP UI', 'VSCode',
      'MySQL Workbench', 'Postman', 'Jira'
    ]
  },
  {
    company: 'IT PEAC',
    position: 'Full Stack Java/JEE JSF Developer',
    period: '07/2018 - 06/2020',
    location: 'Tunisia',
    flag: 'assets/flags/tunisian_flag.png',
    project: 'VO (Management of used vehicles)',
    team: '2 Full Stack developers, 1 technical referent',
    responsibilities: [
      'Development of data processing and export access modules',
      'Migrating Spring configuration from XML to annotations',
      'Development of integration batches for data export',
      'Data export in Excel format with Spring Batch and Apache POI',
      'Database architecture with PostgreSQL',
      'Developing unit tests and implementing technical solutions'
    ],
    technologies: [
      'Java', 'Spring Core', 'Spring JDBC', 'Spring Batch',
      'Maven', 'PostgreSQL', 'Firebird', 'Jetty', 'JUnit',
      'Eclipse IDEA', 'PgAdmin', 'Redmine', 'Jira', 'Confluence'
    ]
  },
  {
    company: 'IT PEAC',
    position: 'Full Stack Java/JEE JSF Developer',
    period: '07/2018 - 06/2020',
    location: 'Tunisia',
    flag: 'assets/flags/tunisian_flag.png',
    project: 'VO Portail (Management of users and Exports)',
    team: '3 Full Stack developers, 1 technical referent',
    responsibilities: [
      'Development of web services with Spring Boot, REST, and JPA/Hibernate',
      'Development of user management and profile management modules',
      'Development of the security layer with Spring Security',
      'Development of export configuration features'
    ],
    technologies: [
      'Java', 'Spring Boot', 'Spring Security', 'JPA',
      'Hibernate', 'JSF', 'Primefaces', 'PostgreSQL',
      'H2 database', 'Tomcat', 'Junit', 'Eclipse IDE',
      'Jira', 'Redmine', 'Confluence'
    ]
  },
  {
    company: 'IT-SERV',
    position: 'Full Stack Java/JEE Developer',
    period: '03/2018 - 06/2018',
    location: 'Tunisia',
    flag: 'assets/flags/tunisian_flag.png',
    project: 'Smart TT (telecommunications project)',
    team: '4 Full Stack Developers, 1 Project Manager, 1 Tester',
    responsibilities: [
      'Creation of data presentation dashboards using Spring MVC',
      'Development of business interfaces with JSF and Primefaces'
    ],
    technologies: [
      'Oracle Database', 'Spring Framework (Core and MVC)',
      'JSF Framework', 'Primefaces', 'MyBatis ORM',
      'Eclipse IDE', 'SqlDeveloper', 'IBOSS Server'
    ]
  }
];
  }

  getCertifications() {
    return  [
    {
      title: 'Professional Scrum Master™',
      issuer: 'Scrum.org',
      date: '11/2024',
      description: 'Validated knowledge of Scrum framework and ability to facilitate Scrum teams.',
      icon: 'bi-award',
      credlyLink:'https://www.credly.com/badges/2188025b-06a8-4246-862b-a88e9b00298e'
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '03/2023',
      description: 'Demonstrated ability to use Terraform for infrastructure as code.',
      icon: 'bi-cloud',
      credlyLink: 'https://www.credly.com/badges/3e7043d6-0ad9-411d-9cbe-c45f423e3f57'
    },
    {
      title: 'Professional Scrum Developer™',
      issuer: 'Scrum.org',
      date: '11/2022',
      description: 'Proven skills in building software using Scrum methodology.',
      icon: 'bi-code-slash',
      credlyLink: 'https://www.credly.com/badges/f2ffe7b1-34c3-4974-b9cb-80e1863042f1'
    },
    {
      title: 'Oracle Certified Associate, Java SE 8 Programmer',
      issuer: 'Oracle',
      date: '05/2021',
      description: 'Validated expertise in Java programming language fundamentals.',
      icon: 'bi-file-earmark-code',
      credlyLink: 'https://www.credly.com/badges/ed85ff98-0f39-4eea-b65f-d8695e889ebf'
    }
  ];
}
}
