const projects = [
  {
    id: 'dtr',
    org: 'DSWD Region V — Feb 2024 to Present',
    stamp: 'Deployed',
    stampColor: 'green',
    title: 'DTR Management System',
    description:
      'Automated timekeeping for an office that used to run payroll off manual daily time records — approvals, tardiness math, and audit trails now live in one place.',
    tags: ['Laravel', 'MVC', 'AWS S3', 'RBAC'],
    points: [
      'Replaced manual tardiness/undertime calculation with automated business logic',
      'Workflow-driven approval system with backend state management',
      'Audit trails with logging to track user activity',
    ],
    images: [
      { src: '/screens/dtr-today.jpg', alt: 'Daily time-in/time-out entry screen' },
      { src: '/screens/dtr-allentries.jpg', alt: 'Employee view of all time entries' },
      { src: '/screens/dtr-pdf.jpg', alt: 'Generated Daily Time Record PDF' },
    ],
  },
  {
    id: 'budget-module',
    org: 'DSWD Finance — 2024 to Present',
    stamp: 'Deployed',
    stampColor: 'gold',
    title: 'Budget & Fund Management Module',
    description:
      'End-to-end fund tracking for the Finance department — allotments, obligations, and bulk imports, with validation built in so bad rows get caught early.',
    tags: ['React', 'Zod', 'React Hook Form', 'REST API'],
    points: [
      'Allotment creation, listing, and obligation workflows',
      'Bulk import with per-row error reporting',
      'ExFlow integration for multi-level approval routing',
    ],
    images: [
      { src: '/screens/fsds-home.jpg', alt: 'EMPOWERX FSDS module dashboard' },
      { src: '/screens/fsds-allotments.jpg', alt: 'List of Allotments view' },
      { src: '/screens/fsds-obligation.jpg', alt: 'Obligation detail view' },
    ],
  },
  {
    id: 'opcr',
    org: 'DOLE Region V — Feb to Jul 2024',
    stamp: 'Deployed',
    stampColor: 'green',
    title: 'Office Program Commitment Review',
    description:
      "A planning and reporting platform for DOLE's provincial offices — targets, budgets, and quarterly progress in one place instead of scattered spreadsheets.",
    tags: ['Laravel', 'MySQL', 'jQuery', 'PHPSpreadsheet'],
    points: [
      'Sole developer — centralized program creation, target-setting, and budget allocation across six Bicol provinces',
      'Quarterly, semi-annual, and annual reporting against PAP targets, exported to Excel and PDF',
      'Real-time dashboards for progress monitoring by the Planning Department and Budget Office',
    ],
    images: [
      { src: '/screens/opcr-login.jpg', alt: 'OPCR sign-in screen' },
      { src: '/screens/opcr-list.jpg', alt: 'Organizational Outcome/PAP list view' },
      { src: '/screens/opcr-form.jpg', alt: 'PAP target creation form' },
    ],
  },
  {
    id: 'toyota-crm',
    org: 'Toyota Albay — Freelance Project',
    stamp: 'Freelance',
    stampColor: 'gold',
    title: 'Toyota Albay CRM',
    description:
      'A customer relationship management system covering the full vehicle sales lifecycle — from lead generation to vehicle release — for Toyota Albay.',
    tags: ['Laravel', 'jQuery', 'AJAX', 'MySQL', 'DataTables'],
    points: [
      'Backend developer — lead management, application processing, and vehicle reservation/release workflows',
      'Inventory management module for tracking car stock to support decision-making',
      'Dispute resolution and team/user management with role-based access',
    ],
    images: [
      { src: '/screens/toyota-login.jpg', alt: 'Toyota CRM sign-in screen' },
      { src: '/screens/toyota-leads.jpg', alt: 'Leads management table' },
      { src: '/screens/toyota-reservation.jpg', alt: 'Vehicle reservation dashboard' },
    ],
  },
  {
    id: 'sandbox',
    org: 'Temarotech Inc. — Feb to Jul 2024',
    stamp: 'Team Project',
    stampColor: 'rust',
    title: 'Sandbox — Property & Security Platform',
    description:
      'Property operations and building security in one system, built with a small team.',
    tags: ['Laravel', 'AJAX', 'MySQL'],
    points: [
      'Backend and frontend integration using Laravel and AJAX',
      'MySQL database design for efficient storage and retrieval',
    ],
  },
  {
    id: 'roadguard',
    org: 'Temarotech Inc. — Feb to Jul 2024',
    stamp: 'Public Safety',
    stampColor: 'rust',
    title: 'RoadGuard — Hazard Monitoring',
    description:
      'Real-time hazard monitoring across Metro Manila, aimed at cutting down response time to road hazards.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    points: [
      'Backend built in Laravel, interface built in Vue.js',
      'Database optimization for reliability under real-time load',
    ],
  },
  {
    id: 'pos-qlik',
    org: 'Liberty Commercial Center — Jan 2022 to Jan 2024',
    stamp: '2 Years',
    stampColor: 'gold',
    title: 'Food POS System & Qlik Dashboards',
    description:
      'A point-of-sale system wired into Oracle Database, plus Qlik Sense dashboards so management could see sales metrics without digging through reports.',
    tags: ['Laravel', 'Vue.js', 'Oracle DB', 'Qlik Sense', 'ETL'],
    points: [
      'POS API integration with Oracle Database and XML EOD reports',
      'Interactive Qlik Sense dashboards fed by ETL pipelines',
      'Query optimization with LCCWeb as middleware',
    ],
  },
]

export default projects
