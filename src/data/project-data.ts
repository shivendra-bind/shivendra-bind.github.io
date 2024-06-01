import type { Skill, TProject } from "../types"

export const SkillData: Skill = {
  "Language": ["JavaScript (TypeScript)", "Python"],
  "Framework": ["React", "Django", "Flask", "Next.js", "Express"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL"],
  "Other": [
    "Critical thinking",
    "Goal-oriented",
    "Future-focused",
    "Good verbal and written Communication",
    "Team Management"
  ]
}


const ProjecData: TProject[] = [
  {
    "date": "Feb-2023 - Present",
    "role": "Technical Lead",
    "company": "Newscape Consulting LLC, Pune",
    "description": "Working on an ERP project for a US based client. It is a web based application which helps distributors of promotional products to manage their business. It has different modules like  Proposal, Quotes, Orders, Inventory, Invoicing, Accounting, Reports, etc.",
    "techstack": "NodeJS, microservice, MongoDB, Docker, ReactJS18.2, React-Query, Zustand, ES6, Tailwind",
    "work": [
      "Team of 5, agile",
      "Worked with client to understand the customer pain points and business requirements",
      "Helped UX designer to create wireframes and design to address the business requirements",
      "Build clean and accessible UI",
      "Migrated backed from monolith to microservice"
    ]
  },
  {
    "date": "Feb-2022 - Feb-2023",
    "role": "Senior Software Engineer",
    "company": "Innova Solutions, Pune",
    "description": "Worked on a project called `Resource Manager` for US based health care client. It caters for user and user access management for BI tool PowerBI and Apache Superset. Also, build analytical dashboard in Apache Superset for clearance data.",
    "techstack": "NodeJs, Express, ReactJS17, Redux, redux-saga, X-State, ES6, AWS (ECS, Lambda, SQS, SNS )",
    "work": [
      "Team of 5,SAFE agile and Agile poker",
      "Build clean and accessible UI user and user access management",
      "Collaborated with client to understand the analytical requirements",
      "Build dashboard with different charts and filters in Apache Superset ",
      "Took part in story estimation and Peer reviewed code"
    ]
  },
  {
    "date": "Nov-2020 - Feb-2022",
    "role": "Technical Consultant",
    "company": "Xebia IT Architect India, Gurugram",
    "description": "Worked on a project called &lsquo;Guardian Anytime&rsquo; for US based health care and insurance client. It help manage group insurance policies for different uer for dental and critical illness.",
    "techstack": "ReactJS16.8, Redux, redux-saga, ES6, Html5, bootstrap 4.5, scss.",
    "work": [
      "Team of 10,SAFE agile and Agile poker",
      "Build clean and accessible UI for sign and registration, improving new signup by 12% (reported by business reps)",
      "Build dashboard for different roles, providing quick view of claims and expenses",
      "Took part in story estimation and Peer reviewed code",
      "Implemented micro-frontend"
    ]
  }, {
    "date": "July-2019 - Nov-2020",
    "role": "Application Developer Senior Analyst",
    "company": "Accenture Solutions Pvt Ltd, Pune",
    "description": "Worked on an in-house tool to manage and track testing activities for different projects. It is a web based application which helps to manage environment booking, testing timelines, testing matrices, etc.",
    "techstack": "Python, Django, bash, MariaDB, Jenkings, HP ALM",
    "work": [
      "Single Developer",
      "Collaborated with multiple projects and testing teams to understand the requirements",
      "Designed web application",
      "Build dashboard to display project timeline, environment status, testing matrices etc"
    ]
  }, {
    "date": "Mar-2017 - July-2019",
    "role": "Specialist programmer",
    "company": "Infosys Ltd, Pune",
    "description": "Worked with one of the largest oilfield service company on a logistics web application. The application was complete solution for logistics activities, right form getting orders/requirements to coordination with suppliers to packaging to tracking shipment",
    "techstack": "Angular4, bootstrap 3, HTML5, CSS3, Typescript, Karma, Jasmine",
    "work": [
      "Team of 7, Agile",
      "Build UI implementing complex business logic",
      "Worked closelly with solution architect to understand and document solution"
    ],
    "training": "MEAN and MERN stack, 4 months"
  }, {
    "date": "July-2015 - Mar-2017",
    "role": "Systems Engineer",
    "company": "Infosys Ltd, Mysore",
    "description": "Worked with test data management team. Implemented an one touch automated test data solution(framework) to provide production like, aligned to multiple applications, test data for system integration testing",
    "techstack": "PL/SQL, Oracle 9g,Oracle exadata, IMSDB, DB2, mainframes(basic JCL)",
    "work": [
      "Team of 5",
      "Developed shell scripts to automate processes. This reduced manual data preparation and removed misalignment in data, decreasing time required by 50%-60%.",
      "Wrote procedures to extract data from different sources and load it to target database",
      "Wrote procedures to mask sensitive data",
      "Wrote JSC to extract data from IMSDB and load it to DB2",
      "Delivered excellent quality of test data leading to 100% satisfaction from UAT team",
      "Coordination of Data Loading, Testing, Raising Defects & Defect Retesting",
      "Scheduling batch using Control-M"
    ],
    "training": "Professional software development\\Testing training from Infosys, 6 months. Python, RDBMS, Unix shell scripts, ALM, UFT, test planning and testing."

  }

]

export default ProjecData