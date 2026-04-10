const SHARED_ASSETS = {
  photoSrc: '/profile-placeholder.jpg',
  contactLinks: {
    email: {
      label: 'a.d.khramchenkov@gmail.com',
      href: 'mailto:a.d.khramchenkov@gmail.com',
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/andrew-khramchenkov-265176183/',
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/AndrewKhv',
    },
    telegram: {
      label: 'Telegram',
      href: 'https://t.me/andrewkhv',
    },
  },
};

export const siteContentByLocale = {
  en: {
    locale: 'en',
    ui: {
      skipLink: 'Skip to content',
      navAriaLabel: 'Section navigation',
      languageSwitcherLabel: 'Language',
      languages: {
        en: 'EN',
        ru: 'RU',
      },
      scrollToTopLabel: 'Back to top',
    },
    meta: {
      fullName: 'Andrei Khramchenkov',
      title: 'Senior QA Automation Engineer / QA Lead',
      availability: 'Open to opportunities',
      location: 'Warsaw, Poland',
      remotePreference: 'Open to remote or hybrid roles in European time zones',
      languages: ['English (C1)', 'Russian (Native)'],
      photoSrc: SHARED_ASSETS.photoSrc,
      photoAlt: 'Portrait of Andrei Khramchenkov',
      cvFile: '/CV Andrei Khramchenkov.pdf',
      cvEnabled: true,
    },
    navigation: [
      { id: 'about', label: 'About' },
      { id: 'capabilities', label: 'Capabilities' },
      { id: 'skills', label: 'Skills' },
      { id: 'ai-experience', label: 'AI' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'projects', label: 'Achievements' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      eyebrow: 'Senior QA Automation Engineer • Playwright • Complex UI flows • AI-assisted workflows',
      fullName: 'Andrei Khramchenkov',
      title: 'Senior QA Automation Engineer / QA Lead',
      summary:
        'Senior QA Automation Engineer helping teams ship more safely through maintainable automation, coverage of tricky product flows, and practical QA tooling.',
      valueProposition:
        'My strongest work sits at the intersection of automation architecture, complex journeys, and release-facing quality.',
      strengthsAriaLabel: 'Key strengths',
      ctas: {
        contact: 'Contact Me',
        linkedin: 'View LinkedIn',
        cv: 'Download CV',
      },
      strengths: [
        'Playwright and API-first automation',
        'Complex browser and integration journeys',
        'QA tooling, enablement, and release support',
      ],
      focusAreas: ['Playwright automation', 'Complex UI flows', 'QA enablement'],
    },
    about: {
      eyebrow: 'About Me',
      title: 'Automation, delivery, and team enablement',
      description:
        'I usually work where product risk is high, flows are messy, and teams need automation that survives real delivery pressure. My role often spans test design, framework work, CI, debugging, release support, and mentoring.',
      cardTitle: 'Where I add value',
      strengthsTitle: 'How I work',
      highlights: [
        'I work closely with developers and product teams instead of treating QA as a separate handoff.',
        'I move between test strategy, implementation, CI, and debugging depending on what blocks delivery.',
        'I optimize for maintainable coverage and everyday team usage, not just raw test count.',
      ],
    },
    teaching: {
      organization: 'Tallinn Learning',
      role: 'Executive Teacher, QA Automation',
      summary:
        'Alongside product work, I teach QA Automation at Tallinn Learning and turn hands-on experience into practical learning material.',
      highlights: ['External teaching practice', '3+ years of structured instruction'],
      link: {
        label: 'View school instructors page',
        href: 'https://tallinn-learning.ee/en/teachers',
      },
    },
    capabilities: {
      eyebrow: 'What I Can Help With',
      title: 'Strengths, scope, and practical impact',
      strengthsTitle: 'Key strengths',
      helpTitle: 'What I can help with',
    },
    profileHighlights: {
      title: 'Quick profile',
      items: [
        { label: 'Availability', value: 'Open to opportunities' },
        { label: 'Location', value: 'Warsaw, Poland' },
        { label: 'Languages', value: 'English (C1), Russian (Native)' },
        { label: 'Primary stack', value: 'TypeScript, GitLab CI/CD, reporting, and internal QA tooling' },
        { label: 'Teaching', value: 'QA Automation instructor at Tallinn Learning' },
      ],
    },
    strengths: [
      {
        title: 'Playwright-first E2E and API automation',
        description:
          'Playwright is my main framework for UI and API testing, covering both mocked and real flows in a setup built for reliable day-to-day use.',
      },
      {
        title: 'Complex UI flows across product types',
        description:
          'I automate demanding user journeys that involve payments, user profiles, iframes, browser extensions, third-party integrations, and other multi-step product flows.',
      },
      {
        title: 'QA enablement and team leverage',
        description:
          'I improve team throughput not only by adding tests, but also by mentoring MQA colleagues, simplifying framework usage, and embedding quality checks into developer pipelines.',
      },
    ],
    helpWith: [
      'Designing maintainable E2E and API coverage around real product risk',
      'Moving Cypress suites into a cleaner Playwright setup',
      'Stabilizing flows with iframes, profiles, extensions, and third-party integrations',
      'Defining regression scope for release-critical journeys',
      'Connecting tests, reporting, and CI to daily developer workflows',
      'Reducing regression duration without losing confidence',
      'Building helper tooling and QA workflows that teams actually use',
    ],
    impactMetrics: [
      { value: '11+', label: 'Years in QA overall' },
      { value: '1700+', label: 'Automated tests delivered' },
      { value: '100+', label: 'Manual regression hours saved weekly' },
      { value: '100% / 80%', label: 'Critical / high-priority coverage' },
    ],
    skillsSection: {
      eyebrow: 'Skills / Tech Stack',
      title: 'Core tools, platforms, and delivery stack',
    },
    skills: [
      {
        title: 'Automation & quality',
        items: [
          'Playwright',
          'Cypress',
          'E2E testing',
          'API testing',
          'Mocked and real flows',
          'TypeScript',
          'JavaScript',
          'Allure',
        ],
      },
      {
        title: 'Delivery & reporting',
        items: [
          'GitLab CI/CD',
          'Developer pipeline integration',
          'Slack report generation',
          'Scheduled regression runs',
          'Weekly release support',
          'Flaky test control',
        ],
      },
      {
        title: 'Enablement & systems',
        items: [
          'Complex UI flows',
          'Browser extension flows',
          'Iframe-heavy interfaces',
          'Integration testing',
          'Third-party integrations',
          'Mentoring MQA engineers',
          'QA teaching',
          'React',
          'MySQL',
        ],
      },
    ],
    aiExperience: {
      eyebrow: 'AI Experience',
      title: 'AI is part of my real engineering workflow, not just experimentation',
      intro:
        'I use AI as a practical engineering aid for debugging, framework work, internal tooling, and faster iteration. The value is faster delivery and better leverage, but only with review and validation.',
      usageTitle: 'How I use it',
      workflowAreas: [
        {
          title: 'Tools used',
          bullets: [
            'Claude for complex tasks and larger problem-solving work',
            'Codex for everyday engineering tasks',
            'Cursor as an IDE-centric assistant for experimentation',
            'Qwen local models for personal projects and learning',
          ],
        },
        {
          title: 'Validation approach',
          bullets: [
            'Manual code review before adoption',
            'Cross-checking by another model or agent when needed',
            'Treating AI output as draft material, not final truth',
          ],
        },
        {
          title: 'Concrete workflows',
          bullets: [
            'Used Codex to redesign regression flows, cutting execution time and improving effective coverage by roughly 2-3x',
            'Used Claude to build a helper test runner that made the framework easier for MQA and AQA engineers to use',
            'Use AI to speed up debugging, framework iteration, research, and repetitive implementation work',
          ],
        },
      ],
      details: [
        'I pick the model based on task shape: deep reasoning, fast drafting, IDE assistance, or local experimentation.',
        'The strongest use cases for me are debugging, framework iteration, internal tools, and repetitive engineering work.',
        'Production use still means review, validation, and ownership on my side.',
      ],
    },
    experience: {
      eyebrow: 'Work Experience',
      title: 'Roles with hands-on automation ownership',
      description: 'Recent positions across product QA, leadership, and framework work.',
      entries: [
        {
          company: 'SOFTSWISS',
          role: 'Senior QA Automation Engineer',
          dates: 'June 2022 - Present',
          summary:
            'Own automation for release-critical product areas, framework evolution, and the tooling around everyday QA delivery.',
          achievements: [
            'Took ownership of several high-risk product areas and integrations in the current product.',
            'Moved automation from Cypress toward Playwright; Playwright is now the main framework for E2E and API testing.',
            'Built coverage for both mocked and real API/UI flows, including payments, integrations with other internal projects, and shared libraries.',
            'Automated complex browser journeys involving multi-step UI logic, third-party integrations, and hard-to-test edge cases.',
            'Expanded regression coverage, integrated Playwright pipelines into developer workflows, and kept scheduled runs active every day.',
            'Implemented Allure reporting plus Slack report generation, and created helper tooling such as a Slack app and test runner.',
            'Mentor MQA colleagues through ongoing knowledge sharing and quality enablement.',
          ],
        },
        {
          company: 'Department of IT of the Moscow City / ANO Dialog',
          role: 'QA Lead / Senior QA Automation Engineer',
          dates: 'November 2020 - May 2022',
          summary:
            'Combined QA leadership with hands-on automation and internal tooling for public-sector products.',
          achievements: [
            'Implemented high-level front-end tests using Cypress as the runner.',
            'Built a self-written dashboard with React, TS/JS, and MySQL.',
            'Integrated the dashboard with Slack and Telegram for team visibility.',
            'Led QA work in teams of 5-10 people.',
          ],
        },
        {
          company: 'PROTOCOLS.IO',
          role: 'QA Lead',
          dates: 'October 2018 - December 2020',
          summary:
            'Led QA delivery while building automation and supporting a junior team.',
          achievements: [
            'Implemented API and frontend automated tests on Cypress.',
            'Led a small team of junior-level QA engineers.',
            'Built leadership experience in test quality, direction, and coaching.',
          ],
        },
        {
          company: 'PAYTURE',
          role: 'Middle QA Engineer',
          dates: 'May 2019 - February 2020',
          summary:
            'Worked on release verification, change assessment, and day-to-day product quality.',
          achievements: [
            'Evaluated release-ready improvements and fixes.',
            'Participated in partial code review work.',
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Education, certifications, and continuous learning',
      description: 'Education and formal training relevant to my current work.',
      entries: [
        {
          institution: 'NRNU MEPhI',
          degree: 'Specialist, Institute of Cyber Intelligence Systems',
          dates: '2013 - 2019',
          notes: 'Program background included anti-corruption and anti-money laundering topics.',
        },
      ],
    },
    projects: {
      eyebrow: 'Selected Achievements',
      title: 'Work highlights',
      description:
        'Representative outcomes from recent work where I can describe the approach and result without exposing NDA details.',
      cardKicker: 'Selected achievement',
      entries: [
        {
          title: 'Playwright migration and framework modernization',
          summary:
            'Turned an inherited Cypress-heavy setup into a Playwright-centered platform for E2E and API coverage across several product areas.',
          tags: ['Playwright migration', 'E2E/API coverage', 'Automation platform'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'AI-assisted regression optimization',
          summary:
            'Used AI-assisted redesign of regression flows to shorten run time and raise effective coverage by roughly 2-3x.',
          tags: ['AI tooling', 'Regression speed', 'Coverage improvement'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'Helper tooling and delivery visibility',
          summary:
            'Built a test runner, reporting flows, and small QA utilities that made the automation setup easier for engineers to use day to day.',
          tags: ['Internal tooling', 'Reporting', 'Team enablement'],
          primaryLink: null,
          secondaryLink: null,
        },
      ],
    },
    testimonial: {
      eyebrow: 'Recommendation',
      quote: '',
      author: '',
      role: '',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      platformsAriaLabel: 'Contact platforms',
      labels: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        telegram: 'Telegram',
      },
      actions: {
        primary: 'Start a conversation',
        secondary: 'Download CV',
      },
      email: SHARED_ASSETS.contactLinks.email,
      linkedin: SHARED_ASSETS.contactLinks.linkedin,
      github: SHARED_ASSETS.contactLinks.github,
      telegram: SHARED_ASSETS.contactLinks.telegram,
      resources: [],
    },
    footer: {
      note: 'Andrei Khramchenkov | 2026',
    },
  },
  ru: {
    locale: 'ru',
    ui: {
      skipLink: 'Перейти к содержимому',
      navAriaLabel: 'Навигация по разделам',
      languageSwitcherLabel: 'Язык сайта',
      languages: {
        en: 'EN',
        ru: 'RU',
      },
      scrollToTopLabel: 'Наверх',
    },
    meta: {
      fullName: 'Андрей Храмченков',
      title: 'Старший инженер по автоматизации тестирования / Руководитель QA',
      availability: 'Открыт к новым возможностям',
      location: 'Варшава, Польша',
      remotePreference: 'Открыт к удалённому и гибридному формату в европейских часовых поясах',
      languages: ['Английский (C1)', 'Русский (родной)'],
      photoSrc: SHARED_ASSETS.photoSrc,
      photoAlt: 'Портрет Андрея Храмченкова',
      cvFile: '/CV Андрей Храмченков.pdf',
      cvEnabled: true,
    },
    navigation: [
      { id: 'about', label: 'Обо мне' },
      { id: 'capabilities', label: 'Возможности' },
      { id: 'skills', label: 'Навыки' },
      { id: 'ai-experience', label: 'ИИ' },
      { id: 'experience', label: 'Опыт' },
      { id: 'education', label: 'Образование' },
      { id: 'projects', label: 'Достижения' },
      { id: 'contact', label: 'Контакты' },
    ],
    hero: {
      eyebrow: 'Старший инженер по автоматизации тестирования • Playwright • Сложные UI-сценарии • ИИ в рабочих процессах',
      fullName: 'Андрей Храмченков',
      title: 'Старший инженер по автоматизации тестирования / Руководитель QA',
      summary:
        'Помогаю командам выпускать изменения увереннее за счёт устойчивой автоматизации, покрытия сложных сценариев и практичных QA-инструментов.',
      valueProposition:
        'Моя сильная зона — на стыке архитектуры автоматизации, сложных пользовательских сценариев и релизного качества.',
      strengthsAriaLabel: 'Ключевые сильные стороны',
      ctas: {
        contact: 'Связаться со мной',
        linkedin: 'Открыть LinkedIn',
        cv: 'Скачать резюме',
      },
      strengths: [
        'Playwright и API-автоматизация',
        'Сложные браузерные и интеграционные сценарии',
        'QA-инструменты, развитие команды и поддержка релизов',
      ],
      focusAreas: ['Автоматизация на Playwright', 'Сложные UI-сценарии', 'Развитие QA-практик'],
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Автоматизация, релизные процессы и развитие команды',
      description:
        'Обычно я подключаюсь там, где высок продуктовый риск, сценарии запутанные, а команде нужна автоматизация, которая выдерживает реальную разработку. Моя роль часто включает проектирование тестов, развитие фреймворка, CI, отладку, релизную поддержку и менторство.',
      cardTitle: 'Где я приношу больше всего пользы',
      strengthsTitle: 'Как я работаю',
      highlights: [
        'Работаю близко к разработке и продукту, не превращая QA в отдельный финальный этап.',
        'Переключаюсь между стратегией тестирования, реализацией, CI и отладкой в зависимости от того, что тормозит выпуск изменений.',
        'Ставлю в приоритет поддерживаемое покрытие и повседневную пользу для команды, а не просто количество тестов.',
      ],
    },
    teaching: {
      organization: 'Tallinn Learning',
      role: 'Преподаватель по автоматизации тестирования',
      summary:
        'Параллельно с продуктовой работой я преподаю автоматизацию тестирования в Tallinn Learning и упаковываю практический опыт в понятную структуру.',
      highlights: ['Внешняя преподавательская практика', '3+ года системного обучения'],
      link: {
        label: 'Страница преподавателей школы',
        href: 'https://tallinn-learning.ee/en/teachers',
      },
    },
    capabilities: {
      eyebrow: 'Чем я могу помочь',
      title: 'Сильные стороны, задачи и практический эффект',
      strengthsTitle: 'Ключевые сильные стороны',
      helpTitle: 'Чем я могу помочь',
    },
    profileHighlights: {
      title: 'Краткий профиль',
      items: [
        { label: 'Доступность', value: 'Открыт к новым возможностям' },
        { label: 'Локация', value: 'Варшава, Польша' },
        { label: 'Языки', value: 'Английский (C1), Русский (родной)' },
        { label: 'Основной стек', value: 'TypeScript, GitLab CI/CD, отчётность и внутренние QA-инструменты' },
        { label: 'Преподавание', value: 'Преподаватель по автоматизации тестирования в Tallinn Learning' },
      ],
    },
    strengths: [
      {
        title: 'E2E- и API-автоматизация на Playwright',
        description:
          'Playwright — мой основной фреймворк для UI- и API-тестирования, который покрывает и моковые, и реальные сценарии в конфигурации, рассчитанной на надёжную ежедневную работу.',
      },
      {
        title: 'Сложные UI-сценарии в разных типах продуктов',
        description:
          'Я автоматизирую сложные пользовательские сценарии с платежами, профилями, iframe, браузерными расширениями, внешними интеграциями и другими многошаговыми продуктовыми путями.',
      },
      {
        title: 'Развитие QA-практик и масштабирование команды',
        description:
          'Я повышаю пропускную способность команды не только за счёт тестов, но и через менторство коллег, упрощение работы с фреймворком и встраивание проверок качества в процессы разработки.',
      },
    ],
    helpWith: [
      'Проектирование поддерживаемого E2E- и API-покрытия под реальные продуктовые риски',
      'Перенос зрелых сценариев на Cypress в более чистую инфраструктуру на Playwright',
      'Стабилизация сценариев с iframe, профилями, расширениями и внешними интеграциями',
      'Определение регрессионного покрытия для релизно-критичных пользовательских путей',
      'Связка тестов, отчётности и CI с повседневными процессами разработки',
      'Сокращение времени регрессии без потери уверенности',
      'Создание QA-инструментов и рабочих процессов, которыми команда реально пользуется',
    ],
    impactMetrics: [
      { value: '11+', label: 'Лет в QA' },
      { value: '1700+', label: 'Автотестов реализовано' },
      { value: '100+', label: 'Часов ручной регрессии экономится в неделю' },
      { value: '100% / 80%', label: 'Покрытие критичного и высокого приоритета' },
    ],
    skillsSection: {
      eyebrow: 'Навыки / Технологический стек',
      title: 'Ключевые инструменты, платформы и рабочий стек',
    },
    skills: [
      {
        title: 'Автоматизация и качество',
        items: [
          'Playwright',
          'Cypress',
          'E2E-тестирование',
          'API-тестирование',
          'Моковые и реальные сценарии',
          'TypeScript',
          'JavaScript',
          'Allure',
        ],
      },
      {
        title: 'Релизные процессы и отчётность',
        items: [
          'GitLab CI/CD',
          'Интеграция в процессы разработки',
          'Отчётность в Slack',
          'Плановые регрессионные прогоны',
          'Поддержка еженедельных релизов',
          'Контроль нестабильных тестов',
        ],
      },
      {
        title: 'Командные процессы и системы',
        items: [
          'Сложные UI-сценарии',
          'Сценарии с браузерными расширениями',
          'Интерфейсы с большим количеством iframe',
          'Интеграционное тестирование',
          'Внешние интеграции',
          'Менторство QA-коллег',
          'Преподавание QA',
          'React',
          'MySQL',
        ],
      },
    ],
    aiExperience: {
      eyebrow: 'ИИ в работе',
      title: 'ИИ — часть моего реального инженерного процесса, а не просто эксперимент',
      intro:
        'Я использую ИИ как практический инженерный инструмент: для отладки, работы с фреймворком, внутренних утилит и более быстрых итераций. Польза для меня в ускорении выпуска изменений и расширении возможностей, но только при ручной проверке результата.',
      usageTitle: 'Как я использую ИИ',
      workflowAreas: [
        {
          title: 'Какие инструменты использую',
          bullets: [
            'Claude для сложных задач и более глубокого поиска решений',
            'Codex для повседневных инженерных задач',
            'Cursor как помощник внутри IDE для экспериментов',
            'Локальные модели Qwen для личных проектов и обучения',
          ],
        },
        {
          title: 'Как я валидирую результат',
          bullets: [
            'Ручное код-ревью перед использованием',
            'Перепроверка другой моделью или агентом, когда это нужно',
            'Отношение к выводу ИИ как к черновику, а не готовой истине',
          ],
        },
        {
          title: 'Практические сценарии',
          bullets: [
            'Использовал Codex для переработки регрессионных сценариев, сокращения времени прогона и роста эффективного покрытия примерно в 2-3 раза',
            'Использовал Claude, чтобы собрать вспомогательный инструмент запуска тестов и упростить работу с фреймворком для MQA- и AQA-инженеров',
            'Использую ИИ для ускорения отладки, итераций по фреймворку, исследования и повторяющихся задач реализации',
          ],
        },
      ],
      details: [
        'Выбираю модель под тип задачи: глубокое рассуждение, быстрый черновик, помощь внутри IDE или локальные эксперименты.',
        'Лучше всего ИИ помогает мне в отладке, развитии фреймворка, внутренних инструментах и повторяющейся инженерной работе.',
        'Использование в рабочих процессах всё равно означает ручную проверку, валидацию и мою ответственность за итог.',
      ],
    },
    experience: {
      eyebrow: 'Опыт работы',
      title: 'Роли с прямой ответственностью за автоматизацию',
      description: 'Последние позиции на стыке продуктового QA, управления командами и развития фреймворков.',
      entries: [
        {
          company: 'SOFTSWISS',
          role: 'Старший инженер по автоматизации тестирования',
          dates: 'Июнь 2022 - настоящее время',
          summary:
            'Отвечаю за автоматизацию в релизно-критичных областях продукта, развитие фреймворка и инструменты для повседневной QA-работы.',
          achievements: [
            'Взял на себя несколько наиболее рискованных продуктовых зон и интеграций в текущем продукте.',
            'Перевёл автоматизацию от Cypress в сторону Playwright; сейчас Playwright — основной фреймворк для E2E- и API-тестирования.',
            'Построил покрытие и для моковых, и для реальных API- и UI-сценариев, включая платежи, интеграции с другими внутренними продуктами и общие библиотеки.',
            'Автоматизировал сложные браузерные пользовательские сценарии с многошаговой UI-логикой, внешними интеграциями и трудно проверяемыми пограничными случаями.',
            'Сильно расширил регрессионное покрытие, встроил пайплайны Playwright в повседневные процессы разработки и поддерживал ежедневные прогоны.',
            'Реализовал отчётность в Allure, уведомления в Slack и вспомогательные инструменты, включая Slack-приложение и инструмент запуска тестов.',
            'Менторю MQA-коллег через постоянный обмен знаниями и развитие QA-практик.',
          ],
        },
        {
          company: 'Department of IT of the Moscow City / ANO Dialog',
          role: 'Руководитель QA / Старший инженер по автоматизации тестирования',
          dates: 'Ноябрь 2020 - Май 2022',
          summary:
            'Совмещал руководство QA, практическую автоматизацию и разработку внутренних инструментов для городских сервисов.',
          achievements: [
            'Реализовал высокоуровневые фронтенд-тесты на Cypress.',
            'Собрал собственную панель мониторинга на React, TS/JS и MySQL.',
            'Интегрировал панель мониторинга со Slack и Telegram для прозрачности работы команды.',
            'Вёл QA-направление в командах размером 5-10 человек.',
          ],
        },
        {
          company: 'PROTOCOLS.IO',
          role: 'Руководитель QA',
          dates: 'Октябрь 2018 - Декабрь 2020',
          summary:
            'Вёл QA-направление, развивал автоматизацию и поддерживал команду младших QA-инженеров.',
          achievements: [
            'Реализовал API- и фронтенд-автотесты на Cypress.',
            'Руководил небольшой командой младших QA-инженеров.',
            'Получил сильный лидерский опыт в области качества тестирования, управления направлением и наставничества.',
          ],
        },
        {
          company: 'PAYTURE',
          role: 'Инженер по тестированию',
          dates: 'Май 2019 - Февраль 2020',
          summary:
            'Занимался релизной проверкой, оценкой изменений и повседневным контролем качества.',
          achievements: [
            'Оценивал готовые к релизу улучшения и исправления.',
            'Участвовал в частичном код-ревью.',
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Образование',
      title: 'Образование и постоянное развитие',
      description: 'Образование и формальная подготовка, релевантные моей текущей работе.',
      entries: [
        {
          institution: 'NRNU MEPhI',
          degree: 'Специалист, Институт систем киберинтеллекта',
          dates: '2013 - 2019',
          notes: 'В программу входили темы, связанные с противодействием коррупции и отмыванию денег.',
        },
      ],
    },
    projects: {
      eyebrow: 'Избранные достижения',
      title: 'Ключевые результаты',
      description:
        'Несколько показательных результатов из недавней работы, где можно описать подход и эффект без раскрытия NDA-деталей.',
      cardKicker: 'Избранное достижение',
      entries: [
        {
          title: 'Миграция на Playwright и модернизация фреймворка',
          summary:
            'Преобразовал унаследованную базу на Cypress в платформу на Playwright для E2E- и API-покрытия в нескольких продуктовых зонах.',
          tags: ['Миграция на Playwright', 'E2E/API-покрытие', 'Платформа автоматизации'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'ИИ-оптимизация регрессии',
          summary:
            'С помощью ИИ переработал регрессионные сценарии, сократив время прогона и увеличив эффективное покрытие примерно в 2-3 раза.',
          tags: ['ИИ-инструменты', 'Скорость регрессии', 'Рост покрытия'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'Вспомогательные инструменты и прозрачность процессов',
          summary:
            'Собрал инструмент запуска тестов, отчётность и небольшие QA-утилиты, которые упростили ежедневную работу инженеров с автоматизацией.',
          tags: ['Внутренние инструменты', 'Отчётность', 'Развитие команды'],
          primaryLink: null,
          secondaryLink: null,
        },
      ],
    },
    testimonial: {
      eyebrow: 'Рекомендация',
      quote: '',
      author: '',
      role: '',
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Давайте поговорим',
      platformsAriaLabel: 'Каналы связи',
      labels: {
        email: 'Почта',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        telegram: 'Telegram',
      },
      actions: {
        primary: 'Выйти на связь',
        secondary: 'Скачать резюме',
      },
      email: SHARED_ASSETS.contactLinks.email,
      linkedin: SHARED_ASSETS.contactLinks.linkedin,
      github: SHARED_ASSETS.contactLinks.github,
      telegram: SHARED_ASSETS.contactLinks.telegram,
      resources: [],
    },
    footer: {
      note: 'Андрей Храмченков | 2026',
    },
  },
};

export function getSiteContent(locale) {
  return siteContentByLocale[locale] ?? siteContentByLocale.en;
}
