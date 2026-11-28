import type { Messages } from './types'
import { site } from './site'

const ORKEST = 'https://github.com/PedroHTLemos/task-manager-api'
const PEDIDOS = 'https://github.com/PedroHTLemos/api-pedidos-estoque-spring'
const ASYNC = 'https://github.com/PedroHTLemos/async-task-hub'
const GATEWAY = 'https://github.com/PedroHTLemos/api-gateway-rate-limit-cache'

export const en: Messages = {
  lang: 'en',
  meta: {
    title: 'Pedro Torisu · Full Stack Developer focused on back-end',
    description:
      'Pedro Torisu, Full Stack Developer focused on back-end. Projects with Node.js, TypeScript, Java, Python and React: Amillan, Orkest, Orders and Inventory API, AsyncTask Hub and API Gateway.',
    ogLocale: 'en_US',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    experience: 'Experience',
    stack: 'Stack',
    about: 'About',
    contact: 'Contact',
    languageSwitch: 'Read in Portuguese',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    skipToContent: 'Skip to content',
    location: 'Ouro Branco, MG',
    mainLabel: 'Main',
    newTab: '(opens in a new tab)',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    backToTop: 'Back to top',
  },
  hero: {
    name: site.name,
    role: 'Full Stack Developer focused on back-end',
    positioning:
      'I design and maintain APIs and web systems in Node.js, TypeScript, Java and Python. My focus is integration tests against real databases, concurrency and failure handling.',
    seeking:
      'Open to roles as Full Stack Developer, Back-end Developer or Software Engineer (Junior or Mid-level).',
    ctaProjects: 'View projects',
    ctaContact: 'Contact',
    ctaCv: 'Download CV',
    ctaGithub: 'GitHub',
    ctaLinkedin: 'LinkedIn',
    available: 'Open to new opportunities',
    highlightsTitle: 'Verified highlights',
  },
  about: {
    eyebrow: '01 · About',
    title: 'About',
    paragraphs: [
      'I am a Full Stack Developer focused on back-end. I mainly work with Node.js, TypeScript and React, and use Python (FastAPI) and Java (Spring Boot) for back-end projects.',
      'Since 2023 I have worked as a freelancer, building web systems for clients. I also maintain Amillan, an AI-powered trip planning SaaS that is in production, with users and published mobile apps.',
      'Before that, I worked at dti digital on Power Platform and REST APIs, and coordinated 32 web projects at Linked, the junior company of UFSJ.',
    ],
    education:
      'Bachelor of Computer Science, UFSJ (2018 to Dec/2026, expected graduation).',
    english: 'English C1: I read documentation, write PRs and work with multicultural teams.',
  },
  projects: {
    eyebrow: '02 · Projects',
    title: 'Projects',
    intro:
      'Real products first, then portfolio projects with public code. Each number links to the section that proves it.',
    statusLabels: {
      product: 'Live product',
      portfolio: 'Portfolio project',
      freelance: 'Freelance',
    },
    labels: {
      problem: 'Problem',
      built: 'What I built',
      decision: 'Technical decision',
      metric: 'Verified number',
      stack: 'Stack',
      period: 'Period',
      caseStudy: 'Case study',
      repo: 'Repository',
      readme: 'README',
      live: 'Live site',
    },
    items: [
      {
        slug: 'amillan',
        status: 'product',
        title: 'Amillan',
        period: 'In production',
        problem:
          'Planning a trip means gathering routes, tolls, lodging and bookings from several different sources.',
        built:
          'A SaaS that generates a day-by-day itinerary from a description written in natural language. Three flows: AI chat, Road Trip (route via OSRM, tolls calculated over 966 points indexed in PostGIS, vehicle range alerts) and destination discovery. Subscriptions and credits via Stripe, in production, with Family, Business and Concierge plans. Android and iOS apps published on the App Store and Google Play through Capacitor. Privacy features aligned with Brazil\'s LGPD.',
        decision:
          'AI responses go through a quality validation before reaching the user, with an automatic retry when they fail. The model is Gemini 3.8 Flash on Vertex AI.',
        metric: {
          value: '~5,900',
          label: 'automated tests',
          sourceLabel: 'GitHub profile',
          sourceHref: 'https://github.com/PedroHTLemos/PedroHTLemos',
        },
        stack: [
          'React 19',
          'Vite',
          'TypeScript',
          'Tailwind CSS',
          'Node.js',
          'Express',
          'PostgreSQL',
          'PostGIS',
          'Prisma',
          'Supabase',
          'Gemini (Vertex AI)',
          'OSRM',
          'Leaflet',
          'Stripe',
          'Capacitor',
          'Vitest',
        ],
        liveUrl: 'https://amillan.com.br',
      },
      {
        slug: 'orkest',
        status: 'portfolio',
        title: 'Orkest',
        period: 'Since Apr/2026',
        problem:
          'Small teams need to control who can create, edit and delete tasks inside each workspace.',
        built:
          'A task manager with Kanban boards, workspaces and role-based permissions (ADMIN and MEMBER). API in Express, TypeScript and Prisma on PostgreSQL. Front-end in React with TanStack Query and drag and drop.',
        decision:
          'Refresh token rotation: each renewal stores a new token and deletes the used one. Concurrent requests share a single renewal in the Axios interceptor.',
        metric: {
          value: '65',
          label: 'integration tests against a real PostgreSQL 16',
          sourceLabel: 'Orkest README, Tests section',
          sourceHref: `${ORKEST}#testes`,
        },
        stack: [
          'Node.js',
          'Express',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'React',
          'TanStack Query',
          'JWT',
          'Jest',
          'Supertest',
          'GitHub Actions',
        ],
        note: 'Runs locally, with no public deploy.',
        repoUrl: ORKEST,
        readmeUrl: `${ORKEST}#orkest`,
        caseStudy: {
          problem:
            'Small teams need to control who can create, edit and delete tasks inside each workspace. The project runs locally, with no public deploy, and was written to exercise permissions, authentication and integration tests.',
          decisions: [
            {
              title: 'Refresh token rotation',
              text: 'Each refresh stores a new token and deletes the used one. Every token gets a UUID jwtid, so two tokens issued in sequence are never equal.',
            },
            {
              title: 'Workspace membership checked in middleware',
              text: 'requireRole queries the members table on every workspace route. Non-members get 403, even when authenticated. Controllers do not repeat this check.',
            },
            {
              title: 'Member removal and unassignment in one transaction',
              text: 'Removing a member clears the assigneeId of their tasks in that workspace, inside a single $transaction. If one operation fails, neither is written.',
            },
            {
              title: 'Integration tests against real PostgreSQL',
              text: 'Prisma is not mocked. The suite refuses to run if the database name does not end in _test, because it runs TRUNCATE on the tables.',
            },
            {
              title: 'Refresh queue in the Axios interceptor',
              text: 'The dashboard and AuthProvider fired two refreshes with the same token, and the second one logged the user out. The pending renewal is now shared.',
            },
          ],
          numbers: [
            {
              value: '65',
              label: 'integration tests, no Prisma mocks, running in CI on Node 20 and 22',
              sourceLabel: 'Orkest README, Tests section',
              sourceHref: `${ORKEST}#testes`,
            },
            {
              value: '4',
              label: 'bugs found by the tests and fixed (validation, integrity and a 500 on invalid status)',
              sourceLabel: 'Orkest README, Bugs found by the tests',
              sourceHref: `${ORKEST}#bugs-encontrados-pelos-testes`,
            },
          ],
          evidence: [
            {
              type: 'image',
              src: '/projetos/orkest/02-kanban.png',
              alt: 'Orkest Kanban board with tasks in the To do, In progress and Done columns',
              caption: 'ADMIN view of a demo workspace.',
            },
            {
              type: 'image',
              src: '/projetos/orkest/04-member-kanban.png',
              alt: 'Kanban board seen by a MEMBER user, with no delete buttons',
              caption: 'Same board as a MEMBER: the delete button only appears for ADMIN.',
            },
            {
              type: 'flow',
              title: 'Session renewal',
              steps: [
                'Expired access token: the API responds 401',
                'The interceptor stores the renewal Promise; later 401 responses wait for it',
                'POST /auth/refresh: the token is fetched from the database, verified and deleted',
                'The new token pair is stored and the original request is retried',
              ],
            },
          ],
          limitations: [
            'Access and refresh tokens live in localStorage, so any script on the page can read them.',
            'No limit on login attempts.',
            'Logout does not revoke the access token, which stays valid for up to 15 minutes.',
            'Zod validation covers only tasks. Registration, workspace creation and member invites return 500 on the wrong type.',
            'The task list has no pagination.',
            'The front-end has no assignee selector and no members screen: these flows exist only in the API. The front-end has no automated tests.',
          ],
        },
      },
      {
        slug: 'api-pedidos-estoque',
        status: 'portfolio',
        title: 'Orders and Inventory API',
        period: 'Since Feb/2026',
        problem:
          'Orders that decrement stock must stay consistent when several orders compete for the same product.',
        built:
          'Registers for companies, suppliers and products, orders with atomic stock decrement, stock reversal on cancellation and a dashboard. Back-end in Java 17 and Spring Boot, front-end in Angular.',
        decision:
          'Stock decrement is a conditional UPDATE, and the database enforces CHECK (estoque >= 0). I also reordered the order creation transaction to remove an InnoDB deadlock.',
        metric: {
          value: '20 of 20',
          label: 'concurrency runs without deadlock (before the fix, 15 of 20 failed)',
          sourceLabel: 'Orders API README, decision 2',
          sourceHref: `${PEDIDOS}#2-deadlock-na-criação-de-pedido`,
        },
        stack: [
          'Java 17',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'MySQL 8.4',
          'Flyway',
          'Angular',
          'Testcontainers',
        ],
        note: 'The interface uses the fictional brand "Nexus Gestão".',
        repoUrl: PEDIDOS,
        readmeUrl: `${PEDIDOS}#testes`,
        caseStudy: {
          problem:
            'Orders that decrement stock must stay consistent when several orders compete for the same product, and the stock history must explain any balance.',
          decisions: [
            {
              title: 'Atomic decrement in the database',
              text: 'The decrement is an UPDATE with WHERE estoque >= :quantity, and the migration adds CHECK (estoque >= 0). The estoque field is updatable = false in the entity, so JPA never rewrites the balance through a merge.',
            },
            {
              title: 'InnoDB deadlock fixed by ordering the transaction',
              text: 'The INSERT into item_pedido took a shared lock on the product row (foreign key), and the decrement needed the exclusive lock. Now the decrement runs before the order is written, and products are decremented in ascending id order. There is no retry.',
            },
            {
              title: 'Conditional state transition on cancellation',
              text: 'Cancellation runs UPDATE ... WHERE status = CONFIRMADO. Only one transaction touches the row and reverses the stock. The second one gets 409.',
            },
            {
              title: 'Copied price and stock movements with balance',
              text: 'Each item keeps the product price at the time of the order. Each movement stores the balance after the operation, so the history can rebuild any past balance.',
            },
            {
              title: 'Dashboard without a query per item',
              text: 'The dashboard runs the same number of statements with 1 order as with 9, measured with Hibernate Statistics.',
            },
          ],
          numbers: [
            {
              value: '20 of 20',
              label: 'concurrency runs without deadlock (before the fix, 15 of 20 failed)',
              sourceLabel: 'Orders API README, decision 2',
              sourceHref: `${PEDIDOS}#2-deadlock-na-criação-de-pedido`,
            },
            {
              value: '10 of 20',
              label: 'orders accepted when 20 compete for 10 units, in 5 of 5 repetitions',
              sourceLabel: 'Orders API README, Highlights',
              sourceHref: `${PEDIDOS}#destaques`,
            },
            {
              value: '160',
              label: 'tests: 120 on the back-end (real MySQL 8.4 via Testcontainers) and 40 on the front-end',
              sourceLabel: 'Orders API README, Tests section',
              sourceHref: `${PEDIDOS}#testes`,
            },
          ],
          evidence: [
            {
              type: 'flow',
              title: 'Order creation, step by step',
              steps: [
                'Validates the company, products, supplier links and repeated items',
                'Decrements the stock of each product, in ascending id order, with a conditional UPDATE',
                'Writes the order and its items, with the price copied from the product',
                'Records the outgoing stock movements. If any item is out of stock, nothing is written',
              ],
            },
            {
              type: 'image',
              src: '/projetos/api-pedidos-estoque/02-painel.png',
              alt: 'Dashboard with indicators, critical stock and recent orders',
              caption: 'Dashboard with fictional data from the demo profile.',
            },
            {
              type: 'image',
              src: '/projetos/api-pedidos-estoque/05-pedidos.png',
              alt: 'Orders list with confirmed and cancelled statuses',
              caption: 'Confirmed or cancelled orders. Cancellation reverses the stock.',
            },
            {
              type: 'image',
              src: '/projetos/api-pedidos-estoque/08-regra-parana.png',
              alt: 'Error message when linking a minor supplier to a company in Paraná',
              caption: 'The Paraná rule is enforced by the server. When it is violated, nothing is saved.',
            },
          ],
          limitations: [
            'The "N available" message can be stale under concurrency. The rejection comes from the UPDATE and stays correct.',
            'Company, supplier and order selectors are limited to 100 records.',
            'Sign-up is open: anyone can create a user and get a token.',
            'The token lives in localStorage, with no logout or revocation. The default lifetime is 24 hours.',
            'No public deploy. It runs locally with Docker Compose.',
          ],
        },
      },
      {
        slug: 'async-task-hub',
        status: 'portfolio',
        title: 'AsyncTask Hub',
        period: 'Since Jun/2026',
        problem:
          'An upload request cannot wait for processing, and every failure needs a traceable destination.',
        built:
          'A FastAPI API that answers immediately and sends the work to a Celery worker. Failures go to retry or to a Dead Letter Queue, with administrative reprocessing. Pillow resizing is only the workload used to exercise the flow.',
        decision:
          'Idempotency with a partial unique index on PostgreSQL. Ten simultaneous uploads of the same file create a single task, with no lock in Redis.',
        metric: {
          value: '5.7 s',
          label: '503 response with Redis down (before, 97 s)',
          sourceLabel: 'AsyncTask Hub README, decision 9',
          sourceHref: `${ASYNC}#9-redis-fora-do-ar-falhar-rápido-e-degradar-por-papel`,
        },
        stack: [
          'Python 3.12',
          'FastAPI',
          'Celery',
          'Redis',
          'PostgreSQL 16',
          'SQLAlchemy',
          'Alembic',
          'Pillow',
          'Flower',
          'Pytest',
          'Testcontainers',
        ],
        repoUrl: ASYNC,
        readmeUrl: `${ASYNC}#testes`,
        caseStudy: {
          problem:
            'Image processing is slow, and the API cannot hold the request while it runs. Every failure must end in a known destination: retry, Dead Letter Queue or manual reprocessing.',
          decisions: [
            {
              title: 'Failures classified by phase and errno',
              text: 'Pillow raises OSError without errno for a corrupted image, while I/O failures carry an errno. Only errors from the decoding phase go through this classification. Write, database and Redis errors are always transient.',
            },
            {
              title: 'Partial unique index on PostgreSQL instead of a Redis lock',
              text: 'The index is unique on file_hash and applies only to tasks in progress. A Redis lock would need a TTL and would sit outside the transaction that creates the task.',
            },
            {
              title: 'Redis down: fail fast',
              text: 'The Celery result backend was the cause of the 97 s. With ignore_result, 2 s socket timeouts and one retry on publish, the 503 dropped to 5.7 s. Each Redis role degrades differently: the broker returns 503, rate limiting falls back to memory and the DLQ notice becomes a log entry.',
            },
            {
              title: 'Reprocessing with SELECT ... FOR UPDATE',
              text: 'Two simultaneous calls on the same DLQ entry do not create two tasks. The second one waits and gets 409 "Dead letter already reprocessed".',
            },
          ],
          numbers: [
            {
              value: '5.7 s',
              label: '503 response with Redis down (before, 97 s)',
              sourceLabel: 'AsyncTask Hub README, decision 9',
              sourceHref: `${ASYNC}#9-redis-fora-do-ar-falhar-rápido-e-degradar-por-papel`,
            },
            {
              value: '1',
              label: 'task created by 10 simultaneous uploads of the same file',
              sourceLabel: 'AsyncTask Hub README, decision 2',
              sourceHref: `${ASYNC}#2-índice-único-parcial-no-postgres-em-vez-de-lock-no-redis`,
            },
            {
              value: '94',
              label: 'tests: 87 fast (SQLite and mocks) and 7 integration tests with real Postgres and Redis',
              sourceLabel: 'AsyncTask Hub README, Tests section',
              sourceHref: `${ASYNC}#testes`,
            },
          ],
          evidence: [
            {
              type: 'flow',
              title: 'Path of an upload',
              steps: [
                'POST /process/image: checks the size and the real type from the magic bytes, computes the SHA-256',
                'Writes the file as .part and creates the task in PostgreSQL',
                'After the commit, the file moves to its final path and the task is published to Redis',
                'The Celery worker decodes the image with Pillow and writes the JPEG',
                'Success: status completed. Transient failure: retry with backoff. Permanent failure or retries exhausted: DLQ in PostgreSQL',
              ],
            },
          ],
          limitations: [
            'With Redis down, rate limiting counts per process, so the limit of 10 per minute is no longer global.',
            'A task that finishes after being swept as stale overwrites its status with completed.',
            'No authentication on upload: only the administrative endpoints require X-Admin-Key.',
            'Files live on local disk, not in object storage.',
            'In a race during task creation, the upload can return 500 instead of the winning task id. The window is small.',
          ],
        },
      },
      {
        slug: 'api-gateway',
        status: 'portfolio',
        title: 'API Gateway with Rate Limiting and Cache',
        period: 'Since Jun/2026',
        problem:
          'A third-party API with usage limits must be protected from bursts, and repeated lookups must not trigger several simultaneous calls to the origin.',
        built:
          'A gateway in FastAPI and Redis in front of the GitHub REST API. Rate limiting with Fixed Window and Sliding Window Log, limits per API key tier and cache-aside with a lock against cache stampede.',
        decision:
          'Atomic operations with Lua scripts. With ZCARD and ZADD as separate commands, 20 simultaneous requests went past the limit.',
        metric: {
          value: '5 of 20',
          label: 'simultaneous requests accepted with a limit of 5',
          sourceLabel: 'API Gateway README, decision 2',
          sourceHref: `${GATEWAY}#2-atomicidade-com-scripts-lua`,
        },
        stack: ['Python 3.12', 'FastAPI', 'Redis 7', 'Lua', 'httpx', 'pytest', 'fakeredis', 'k6', 'Docker', 'GitHub Actions'],
        note: 'Portfolio project, focused on the correctness of the algorithms. It is not a production system.',
        repoUrl: GATEWAY,
        readmeUrl: `${GATEWAY}#testes`,
        caseStudy: {
          problem:
            'A third-party API with usage limits must be protected, and repeated lookups must not trigger several simultaneous calls to the origin. The project prioritizes the correctness of the infrastructure algorithms over business rules.',
          decisions: [
            {
              title: 'Two rate limiting algorithms, switched by configuration',
              text: 'Fixed Window is cheap but allows bursts at the window boundary. Sliding Window Log stores one timestamp per request in a ZSET and removes the burst, at the cost of more memory per client. The choice is made with RATE_LIMIT_ALGORITHM.',
            },
            {
              title: 'Atomic operations with Lua',
              text: 'Removing old entries, counting and inserting run in a single script. A request only enters the log if it is under the limit.',
            },
            {
              title: 'Cache stampede handled with a lock and token-checked release',
              text: 'Only the request that acquires the lock (SET NX EX) fetches from the origin. The others wait for the cache for up to 3 s. The release compares the token inside a Lua script, so it never deletes another request\'s lock.',
            },
            {
              title: 'Origin failures mapped to HTTP',
              text: 'A timeout becomes 504. An HTTP error, a connection failure or invalid JSON becomes 502. Nothing is cached in those cases, and the lock is released.',
            },
          ],
          numbers: [
            {
              value: '5 of 20',
              label: 'simultaneous requests accepted with a limit of 5, in 5 repetitions of the concurrency test',
              sourceLabel: 'API Gateway README, decision 2',
              sourceHref: `${GATEWAY}#2-atomicidade-com-scripts-lua`,
            },
            {
              value: '1',
              label: 'call to the origin for 10 concurrent requests from the same user',
              sourceLabel: 'API Gateway README, decision 5',
              sourceHref: `${GATEWAY}#5-cache-aside-com-proteção-contra-stampede`,
            },
            {
              value: '38',
              label: 'automated tests, using fakeredis (no real Redis)',
              sourceLabel: 'API Gateway README, Tests section',
              sourceHref: `${GATEWAY}#testes`,
            },
          ],
          evidence: [
            {
              type: 'flow',
              title: 'Path of a request',
              steps: [
                'Rate limit middleware: Fixed Window or Sliding Window Log, per IP or API key',
                'Above the limit: 429 with Retry-After',
                'Cache HIT: response with X-Cache: HIT',
                'Cache MISS: one request acquires the lock and fetches from the GitHub API',
                'The others wait up to 3 s for the cache. If the lock is not released, they go straight to the origin',
                'The response is stored in Redis with a 300 s TTL (configurable)',
              ],
            },
          ],
          limitations: [
            'Tiers only apply to Sliding Window. Fixed Window ignores the X-API-Key header.',
            'Without Redis, the routes that go through the limiters respond 500. There is no fallback.',
            'Rate limiting uses the connection IP. Behind a proxy, all clients share the same IP.',
            'Demo keys are in the code, with no environment variable.',
            'Tests run with fakeredis, not a real Redis. The k6 numbers come from an earlier measurement and are not presented here.',
          ],
        },
      },
      {
        slug: 'site-institucional-b2b',
        status: 'freelance',
        title: 'Corporate website for a B2B manufacturer',
        period: 'Since Jan/2025, with ongoing maintenance',
        problem:
          'The corporate website of a B2B manufacturer, previously built with React and SQL Server, needed a new technical base and content in several languages.',
        built:
          'Full stack rebuild with Next.js, Node.js and Supabase. Content in three languages (Portuguese, English and Spanish), an administrative panel and a catalog of 82 products.',
        decision:
          'Migration from React and SQL Server to Next.js, Node.js and Supabase, with a custom i18n layer and a panel for the client to edit the content.',
        metric: {
          value: '82',
          label: 'products in the catalog, with content in three languages',
          sourceLabel: 'Confirmed by the author',
          sourceHref: site.url,
        },
        stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Chakra UI', 'Framer Motion', 'next-i18next'],
        liveUrl: 'https://www.jwell.com.br',
      },
    ],
  },
  experience: {
    eyebrow: '03 · Experience',
    title: 'Experience',
    intro: 'Metrics confirmed by the author, for each period.',
    current: 'Current',
    items: [
      {
        id: 'freelancer',
        period: 'Apr/2023 to present',
        role: 'Freelance Full Stack Developer',
        company: 'Self-employed',
        current: true,
        points: [
          'Custom web systems for clients in different segments, from requirements gathering to delivery in production.',
          'Full stack rebuild of a B2B corporate website, moving from React and SQL Server to Next.js, Node.js and Supabase, with i18n in three languages and an administrative panel. Ongoing maintenance since Jan/2025.',
          'REST APIs in Node.js and TypeScript, with a focus on clean architecture.',
          'Deadline management and direct communication with clients, which adds a product view to the technical one.',
        ],
      },
      {
        id: 'dti',
        period: 'Apr/2022 to Apr/2023',
        role: 'Software Development Intern',
        company: 'dti digital',
        location: 'Belo Horizonte, MG',
        points: [
          'Development on Microsoft Power Platform: an internal tool for tracking the company\'s project flow, with Power Apps, Power Automate and Power BI.',
          'REST APIs in Node.js and TypeScript for mid-sized enterprise systems.',
          'SQL Server query tuning with profiling and composite indexes: about 40% less response time on critical financial reports.',
          'CI/CD pipeline with Docker: manual deploy cut from 45 min to under 8 min.',
          'More than 50 code reviews in Scrum, and the team\'s test coverage raised from 62% to 81%.',
        ],
      },
      {
        id: 'linked',
        period: 'Aug/2019 to Jan/2022',
        role: 'Projects Director',
        company: 'Linked, the junior company of UFSJ',
        points: [
          'Delivery coordination for 32 web projects (React, JavaScript, HTML, CSS and REST APIs), with teams of up to 6 developers.',
          'A component and Clean Code standard in React: onboarding of new members dropped from 3 weeks to 5 days.',
          'Technical interface with clients, turning business requirements into viable solutions and prioritizing delivery by impact.',
        ],
      },
    ],
  },
  stack: {
    eyebrow: '04 · Stack',
    title: 'Stack',
    intro: 'Grouped by level of use. Technologies I am studying are not listed as established experience.',
    labels: {
      used: 'Used in projects',
      known: 'Also familiar with',
      academic: 'Academic use',
      studying: 'Studying',
    },
    groups: {
      used: [
        { label: 'Back-end', items: ['Node.js', 'TypeScript', 'Express', 'Zod', 'Python', 'FastAPI', 'Celery', 'Java', 'Spring Boot'] },
        { label: 'Front-end', items: ['React', 'Next.js', 'Vite', 'Angular', 'JavaScript', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'Capacitor'] },
        { label: 'Databases', items: ['PostgreSQL', 'PostGIS', 'Prisma', 'Supabase', 'SQL Server', 'MySQL', 'Redis'] },
        { label: 'Migrations', items: ['Flyway', 'Alembic'] },
        { label: 'Testing', items: ['Vitest', 'Jest', 'Supertest', 'Pytest', 'JUnit and MockMvc', 'Testcontainers', 'k6'] },
        { label: 'DevOps and hosting', items: ['Docker', 'GitHub Actions', 'Render', 'Vercel', 'Cloudflare Pages'] },
        { label: 'AI and maps', items: ['Gemini (Vertex AI)', 'OpenAI API', 'DeepSeek API', 'OSRM', 'Leaflet', 'Nominatim'] },
        { label: 'Integrations', items: ['Stripe', 'Resend', 'Sentry'] },
        { label: 'Power Platform', items: ['Power Apps', 'Power Automate', 'Power BI', 'Power Fx'] },
      ],
      known: { label: 'Also familiar with', items: ['NestJS', 'MongoDB'] },
      academic: { label: 'Academic use', items: ['Django'] },
      studying: { label: 'Studying', items: ['AWS Lambda'] },
    },
  },
  others: {
    eyebrow: '05 · Other projects',
    title: 'Other projects',
    intro: 'Projects with a private repository or outside the sections above.',
    items: [
      {
        title: 'Mobile App + Alexa Skill (undergraduate thesis)',
        description:
          'An Android app in Java integrated with an Alexa Skill in Node.js, with an event-driven architecture and voice interaction. Private repository for academic reasons.',
        tags: ['Android', 'Java', 'Node.js', 'Alexa SDK'],
      },
    ],
  },
  contact: {
    eyebrow: '06 · Contact',
    title: 'Contact',
    intro: 'If you want to talk about a role or a project, write by email or on LinkedIn.',
    labels: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', location: 'Location' },
    location: 'Ouro Branco, MG · Brazil',
  },
  caseStudy: {
    back: 'Back to projects',
    problemTitle: 'Problem',
    decisionsTitle: 'Decisions',
    numbersTitle: 'Numbers and sources',
    evidenceTitle: 'Evidence',
    limitationsTitle: 'Known limitations',
    flowLabel: 'Flow',
    readmeCta: 'Read the full README',
    repoCta: 'View repository',
    notFound: 'Project not found.',
    notFoundLink: 'Back to home',
  },
  footer: {
    role: 'Full Stack Developer',
    rights: 'All rights reserved.',
  },
}
