const SHARED_ASSETS = {
  photoSrc: '/profile-placeholder.jpg',
  cvFile: '/andrei-khramchenkov-cv.pdf',
  cvEnabled: false,
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
      remotePreference: 'Playwright, complex UI flows, CI/CD, and AI-assisted QA workflows',
      languages: ['English (C1)', 'Russian (Native)'],
      photoSrc: SHARED_ASSETS.photoSrc,
      photoAlt: 'Portrait of Andrei Khramchenkov',
      cvFile: SHARED_ASSETS.cvFile,
      cvEnabled: SHARED_ASSETS.cvEnabled,
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
        'Senior QA Automation Engineer focused on Playwright-first UI and API automation, complex end-to-end product flows, and AI-assisted engineering workflows that improve regression speed, coverage, and everyday delivery confidence.',
      valueProposition:
        'I help teams reduce release risk by combining robust automation, ownership of complex product flows, and practical AI tooling that improves speed without lowering standards.',
      strengthsAriaLabel: 'Key strengths',
      ctas: {
        contact: 'Contact Me',
        linkedin: 'View LinkedIn',
        cv: 'Download CV',
      },
      strengths: [
        'Playwright as the main automation framework',
        'Complex UI and integration flow automation',
        'AI-assisted QA productivity and tooling',
      ],
      focusAreas: ['Playwright automation', 'Complex UI flows', 'QA enablement'],
    },
    about: {
      eyebrow: 'About Me',
      title: 'Senior QA automation with a strong Playwright and enablement focus',
      description:
        'I work at the intersection of browser automation, API quality, complex product flows, and practical team enablement. My recent work centers on Playwright as the main framework for E2E and API coverage, mentoring colleagues, and integrating quality checks directly into developer workflows so releases stay fast and dependable.',
      cardTitle: 'Playwright-first quality engineering',
      strengthsTitle: 'Core strengths',
      highlights: [
        'Playwright is my main framework; Cypress remains an additional tool where it still makes sense.',
        'I automate complex UI flows across different product types, including payments, user profiles, iframes, browser extensions, and third-party integrations.',
        'Strong mentoring and teaching experience through internal knowledge sharing and external instruction.',
      ],
    },
    teaching: {
      organization: 'Tallinn Learning',
      role: 'Executive Teacher, QA Automation',
      summary: 'I teach QA Automation at Tallinn Learning alongside my engineering work.',
      highlights: ['Executive teacher at Tallinn Learning', '3+ years of teaching experience'],
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
        { label: 'Current focus', value: 'Playwright, AI-assisted QA, TypeScript, GitLab CI/CD' },
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
      'Building Playwright-first E2E and API automation for mocked and real flows',
      'Migrating mature Cypress coverage into a more maintainable Playwright setup',
      'Automating complex UI flows with iframes, browser extensions, user profiles, and third-party integrations',
      'Designing regression coverage for business-critical user journeys and integrations',
      'Integrating Playwright pipelines into developer workflows and CI/CD',
      'Reducing regression time while increasing confidence and coverage',
      'Creating helper tooling, reporting, and QA enablement flows for teams',
    ],
    impactMetrics: [
      { value: '11+', label: 'Years in QA overall' },
      { value: '700+', label: 'Automated tests delivered' },
      { value: '100h', label: 'Manual regression hours saved weekly' },
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
        'I use AI tools across delivery, framework work, debugging, and productivity. Different models fit different tasks, and I always review and validate the output before using it.',
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
            'Used Codex to refine regression flows, reduce execution time, and improve coverage by roughly 2-3x',
            'Used Claude to build a helper test-runner app from scratch to simplify framework usage for MQA and AQA engineers',
            'Use AI to speed up debugging, framework iteration, research, and repetitive implementation work',
          ],
        },
      ],
      details: [
        'I choose the model based on complexity, speed needs, and the amount of context required.',
        'The goal is practical leverage: faster framework work, lower routine cost, and better productivity without lowering quality standards.',
        'I validate outputs through hand review and, when useful, secondary model review before integrating them into real workflows.',
      ],
    },
    experience: {
      eyebrow: 'Work Experience',
      title: 'Experience focused on ownership, delivery, and impact',
      description: 'Recent roles across QA automation, leadership, and framework development.',
      entries: [
        {
          company: 'SOFTSWISS',
          role: 'Senior QA Automation Engineer',
          dates: 'June 2022 - Present',
          summary:
            'Senior QA Automation Engineer with direct ownership of complex product flows, integrations, framework evolution, and team enablement.',
          achievements: [
            'Grew into a senior role with responsibility for complex product flows and integrations in the current product.',
            'Moved automation from Cypress toward Playwright; Playwright is now the main framework for E2E and API testing.',
            'Built coverage for both mocked and real API/UI flows, including payments, integrations with other internal projects, and shared libraries.',
            'Automated complex browser journeys involving multi-step UI logic, third-party integrations, and hard-to-test edge cases.',
            'Added a large body of autotests, integrated Playwright pipelines into developer workflows, and kept scheduled runs active every day.',
            'Implemented Allure reporting plus Slack report generation, and created helper tooling such as a Slack app and test runner.',
            'Mentor MQA colleagues through ongoing knowledge sharing and quality enablement.',
          ],
        },
        {
          company: 'Department of IT of the Moscow City / ANO Dialog',
          role: 'QA Lead / Senior QA Automation Engineer',
          dates: 'November 2020 - May 2022',
          summary:
            'Worked in the Department of New Technologies with responsibility spanning QA leadership and automation delivery.',
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
            'QA Lead in the Quality Assurance department with direct ownership of automation and team support.',
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
            'Middle QA Engineer in the Quality Assurance department with focus on release verification and change evaluation.',
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
        'I do not share public project breakdowns where NDA applies, so this section focuses on impact, framework work, and engineering outcomes.',
      cardKicker: 'Selected achievement',
      entries: [
        {
          title: 'Playwright migration and framework modernization',
          summary:
            'Built on an existing Cypress base and made Playwright the main framework for E2E and API tests, including complex mocked and real flows across multiple product areas.',
          tags: ['Playwright', 'API/UI coverage', 'Complex UI flows', 'Framework design'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'AI-assisted regression optimization',
          summary:
            'Used AI tooling to improve regression flow design, reducing run time and increasing effective coverage by roughly 2-3x while keeping validation standards high.',
          tags: ['Codex', 'Regression optimization', 'Coverage growth', 'QA productivity'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'Helper tooling and delivery visibility',
          summary:
            'Created a helper test runner, Slack reporting flows, and supporting automation utilities to make the framework easier for MQA and AQA engineers to use day to day.',
          tags: ['Claude', 'Slack reports', 'Test runner', 'Team enablement'],
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
      title: 'Senior QA Automation Engineer / QA Lead',
      availability: 'Открыт к новым возможностям',
      location: 'Варшава, Польша',
      remotePreference: 'Playwright, сложные UI-флоу, CI/CD и AI-assisted QA workflows',
      languages: ['Английский (C1)', 'Русский (родной)'],
      photoSrc: SHARED_ASSETS.photoSrc,
      photoAlt: 'Портрет Андрея Храмченкова',
      cvFile: SHARED_ASSETS.cvFile,
      cvEnabled: SHARED_ASSETS.cvEnabled,
    },
    navigation: [
      { id: 'about', label: 'Обо мне' },
      { id: 'capabilities', label: 'Возможности' },
      { id: 'skills', label: 'Навыки' },
      { id: 'ai-experience', label: 'AI' },
      { id: 'experience', label: 'Опыт' },
      { id: 'education', label: 'Образование' },
      { id: 'projects', label: 'Достижения' },
      { id: 'contact', label: 'Контакты' },
    ],
    hero: {
      eyebrow: 'Senior QA Automation Engineer • Playwright • Сложные UI-флоу • AI-assisted workflows',
      fullName: 'Андрей Храмченков',
      title: 'Senior QA Automation Engineer / QA Lead',
      summary:
        'Senior QA Automation Engineer с фокусом на Playwright-first UI и API automation, сложные end-to-end продуктовые флоу и AI-assisted инженерные процессы, которые ускоряют регрессию, улучшают покрытие и повышают уверенность в релизах.',
      valueProposition:
        'Я помогаю командам снижать релизные риски за счёт сильной автоматизации, ownership сложных продуктовых сценариев и практичных AI-инструментов, которые ускоряют работу без потери качества.',
      strengthsAriaLabel: 'Ключевые сильные стороны',
      ctas: {
        contact: 'Связаться со мной',
        linkedin: 'Открыть LinkedIn',
        cv: 'Скачать CV',
      },
      strengths: [
        'Playwright как основной фреймворк автоматизации',
        'Автоматизация сложных UI и интеграционных флоу',
        'AI-assisted QA productivity и tooling',
      ],
      focusAreas: ['Playwright automation', 'Сложные UI-флоу', 'QA enablement'],
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Senior QA automation с сильным фокусом на Playwright и командный enablement',
      description:
        'Я работаю на пересечении browser automation, API quality, сложных продуктовых флоу и практичного командного enablement. Мой текущий фокус — Playwright как основной фреймворк для E2E и API coverage, менторство коллег и встраивание quality checks прямо в developer workflows, чтобы релизы оставались быстрыми и надёжными.',
      cardTitle: 'Quality engineering с фокусом на Playwright',
      strengthsTitle: 'Ключевые сильные стороны',
      highlights: [
        'Playwright — мой основной фреймворк; Cypress остаётся дополнительным инструментом там, где это по-прежнему имеет смысл.',
        'Я автоматизирую сложные UI-флоу в разных типах продуктов: платежи, пользовательские профили, iframe, browser extensions и third-party integrations.',
        'У меня сильный опыт менторства и преподавания: от внутреннего knowledge sharing до внешнего обучения.',
      ],
    },
    teaching: {
      organization: 'Tallinn Learning',
      role: 'Преподаватель QA Automation',
      summary: 'Я преподаю QA Automation в Tallinn Learning параллельно с основной инженерной работой.',
      highlights: ['Преподаватель Tallinn Learning', '3+ года преподавательского опыта'],
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
        { label: 'Текущий фокус', value: 'Playwright, AI-assisted QA, TypeScript, GitLab CI/CD' },
        { label: 'Преподавание', value: 'Преподаватель QA Automation в Tallinn Learning' },
      ],
    },
    strengths: [
      {
        title: 'Playwright-first E2E и API automation',
        description:
          'Playwright — мой основной фреймворк для UI и API testing, который покрывает и mocked, и real flows в сетапе, рассчитанном на надёжную ежедневную работу.',
      },
      {
        title: 'Сложные UI-флоу в разных типах продуктов',
        description:
          'Я автоматизирую сложные пользовательские сценарии с платежами, профилями, iframe, browser extensions, third-party integrations и другими многошаговыми продуктовым флоу.',
      },
      {
        title: 'QA enablement и масштабирование команды',
        description:
          'Я повышаю пропускную способность команды не только за счёт тестов, но и через менторство MQA-коллег, упрощение работы с фреймворком и встраивание quality checks в developer pipelines.',
      },
    ],
    helpWith: [
      'Построение Playwright-first E2E и API automation для mocked и real flows',
      'Миграция зрелого Cypress-покрытия в более поддерживаемый Playwright setup',
      'Автоматизация сложных UI-флоу с iframe, browser extensions, user profiles и third-party integrations',
      'Проектирование регрессионного покрытия для business-critical пользовательских сценариев и интеграций',
      'Интеграция Playwright pipelines в developer workflows и CI/CD',
      'Сокращение времени регрессии при росте уверенности и покрытия',
      'Создание helper tooling, reporting и QA enablement flow для команд',
    ],
    impactMetrics: [
      { value: '11+', label: 'Лет в QA' },
      { value: '700+', label: 'Автотестов реализовано' },
      { value: '100h', label: 'Часов ручной регрессии экономится в неделю' },
      { value: '100% / 80%', label: 'Покрытие critical / high-priority' },
    ],
    skillsSection: {
      eyebrow: 'Навыки / Tech Stack',
      title: 'Ключевые инструменты, платформы и delivery stack',
    },
    skills: [
      {
        title: 'Автоматизация и качество',
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
        title: 'Delivery и отчётность',
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
        title: 'Командные процессы и системы',
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
      title: 'AI — часть моего реального инженерного процесса, а не просто эксперимент',
      intro:
        'Я использую AI-инструменты в delivery, framework work, debugging и повседневной продуктивности. Для разных задач подходят разные модели, и я всегда вручную проверяю и валидирую результат перед использованием.',
      usageTitle: 'Как я использую AI',
      workflowAreas: [
        {
          title: 'Какие инструменты использую',
          bullets: [
            'Claude для сложных задач и более глубокого problem-solving',
            'Codex для повседневных инженерных задач',
            'Cursor как IDE-centric assistant для экспериментов',
            'Локальные модели Qwen для личных проектов и обучения',
          ],
        },
        {
          title: 'Как я валидирую результат',
          bullets: [
            'Ручной code review перед использованием',
            'Перепроверка другой моделью или агентом, когда это нужно',
            'Отношение к AI-выводу как к черновику, а не готовой истине',
          ],
        },
        {
          title: 'Практические сценарии',
          bullets: [
            'Использовал Codex для улучшения регрессионных флоу, сокращения времени прогона и роста покрытия примерно в 2-3 раза',
            'Использовал Claude, чтобы с нуля собрать helper test-runner app и упростить работу с фреймворком для MQA и AQA инженеров',
            'Использую AI для ускорения debugging, итераций по фреймворку, исследования и повторяющейся реализации',
          ],
        },
      ],
      details: [
        'Я выбираю модель в зависимости от сложности задачи, нужной скорости и объёма контекста.',
        'Цель — практическая отдача: быстрее развивать фреймворк, снижать стоимость рутины и повышать продуктивность без снижения стандартов качества.',
        'Перед интеграцией в реальные процессы я валидирую результат вручную и, при необходимости, дополнительно проверяю его другой моделью.',
      ],
    },
    experience: {
      eyebrow: 'Опыт работы',
      title: 'Опыт с фокусом на ответственности, delivery и impact',
      description: 'Последние роли в QA automation, leadership и развитии фреймворков.',
      entries: [
        {
          company: 'SOFTSWISS',
          role: 'Senior QA Automation Engineer',
          dates: 'Июнь 2022 - настоящее время',
          summary:
            'Senior QA Automation Engineer с прямой ответственностью за сложные продуктовые флоу, интеграции, развитие фреймворка и командный enablement.',
          achievements: [
            'Вырос до senior-роли с ответственностью за сложные продуктовые сценарии и интеграции в текущем продукте.',
            'Перевёл автоматизацию от Cypress в сторону Playwright; сейчас Playwright — основной фреймворк для E2E и API testing.',
            'Построил покрытие и для mocked, и для real API/UI flows, включая платежи, интеграции с другими внутренними продуктами и общие библиотеки.',
            'Автоматизировал сложные browser journeys с многошаговой UI-логикой, third-party integrations и трудно тестируемыми edge cases.',
            'Добавил большой объём автотестов, встроил Playwright pipelines в developer workflows и поддерживал регулярные прогоны каждый день.',
            'Реализовал Allure reporting, Slack-отчётность и helper tooling, включая Slack app и test runner.',
            'Менторю MQA-коллег через постоянный knowledge sharing и quality enablement.',
          ],
        },
        {
          company: 'Department of IT of the Moscow City / ANO Dialog',
          role: 'QA Lead / Senior QA Automation Engineer',
          dates: 'Ноябрь 2020 - Май 2022',
          summary:
            'Работал в Department of New Technologies с ответственностью и за QA leadership, и за automation delivery.',
          achievements: [
            'Реализовал высокоуровневые front-end тесты на Cypress.',
            'Собрал собственный dashboard на React, TS/JS и MySQL.',
            'Интегрировал dashboard со Slack и Telegram для прозрачности работы команды.',
            'Вёл QA-направление в командах размером 5-10 человек.',
          ],
        },
        {
          company: 'PROTOCOLS.IO',
          role: 'QA Lead',
          dates: 'Октябрь 2018 - Декабрь 2020',
          summary:
            'QA Lead в команде Quality Assurance с прямой ответственностью за автоматизацию и поддержку команды.',
          achievements: [
            'Реализовал API и frontend автотесты на Cypress.',
            'Руководил небольшой командой junior QA engineers.',
            'Получил сильный лидерский опыт в области качества тестирования, направления работы и coaching.',
          ],
        },
        {
          company: 'PAYTURE',
          role: 'Middle QA Engineer',
          dates: 'Май 2019 - Февраль 2020',
          summary:
            'Middle QA Engineer в команде Quality Assurance с фокусом на проверку релизов и оценку изменений.',
          achievements: [
            'Оценивал готовые к релизу улучшения и исправления.',
            'Участвовал в частичном code review.',
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
          notes: 'В программу входили темы, связанные с противодействием коррупции и anti-money laundering.',
        },
      ],
    },
    projects: {
      eyebrow: 'Избранные достижения',
      title: 'Ключевые результаты',
      description:
        'Там, где действует NDA, я не раскрываю публичные проектные детали, поэтому здесь акцент на impact, framework work и инженерных результатах.',
      cardKicker: 'Избранное достижение',
      entries: [
        {
          title: 'Миграция на Playwright и модернизация фреймворка',
          summary:
            'Развил существующую Cypress-базу и сделал Playwright основным фреймворком для E2E и API tests, включая сложные mocked и real flows в разных продуктовых направлениях.',
          tags: ['Playwright', 'API/UI coverage', 'Complex UI flows', 'Framework design'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'AI-assisted оптимизация регрессии',
          summary:
            'Использовал AI tooling для улучшения дизайна регрессионных флоу, сократил время прогона и увеличил эффективное покрытие примерно в 2-3 раза без снижения стандартов валидации.',
          tags: ['Codex', 'Regression optimization', 'Coverage growth', 'QA productivity'],
          primaryLink: null,
          secondaryLink: null,
        },
        {
          title: 'Helper tooling и прозрачность delivery',
          summary:
            'Создал helper test runner, Slack-reporting flows и вспомогательные automation utilities, чтобы сделать фреймворк удобнее для ежедневной работы MQA и AQA инженеров.',
          tags: ['Claude', 'Slack reports', 'Test runner', 'Team enablement'],
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
      platformsAriaLabel: 'Способы связи',
      labels: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        telegram: 'Telegram',
      },
      actions: {
        primary: 'Выйти на связь',
        secondary: 'Скачать CV',
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
