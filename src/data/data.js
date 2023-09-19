export const PROJECTS = [
  {
    id: 0,
    img: '@/assets/images/graphql.jpg',
    title: 'IDE for graphQL requests',
    techStack: [
      'React',
      'SCSS',
      'TypeScript',
      'Material UI',
      'i18next',
      'Apollo Client',
      'GraphQL',
      'Redux Toolkit',
      'RTX Query',
      'Vite',
      'Cypress (E2E tests)'
    ],
    team: '3 developers',
    description: `Площадка для построения запросов GraphQL. Главная страница — это частный маршрут, доступный только авторизованным пользователям. Построение запроса доступно с телом запроса, разделами переменных/заголовков и основано на документации, загруженной с функцией приостановки. SPA ориентирован на пользователя: адаптируется к экрану 320-1920 пикселей, двуязычный (i18next), имеет светлый/темный режим. Cypress реализован для тестирования E2E.`,
    deploy: 'https://graphiql-app-rss.netlify.app/',
    githubLink: 'https://github.com/MarinaKovel/graphiql-app'
  },
  {
    id: 1,
    img: '@/assets/images/trello.jpg',
    title: 'RS Clone (Trello)',
    techStack: [
      'React',
      'SCSS',
      'TypeScript',
      'React Router',
      'Axios',
      'PostgreSQL',
      'NodeJS',
      'Express',
      'Vite',
      'Cypress (E2E tests)',
      'Eslint'
    ],
    team: '3 developers',
    description: `Клон приложения Trello, помогающий организовать рабочий процесс. Есть возможность создания досок, столбцов, карточек, возможность их редактирования, реализована функция drag-and-drop.`,
    deploy: 'https://trello-clone-appl.netlify.app/welcome',
    githubLink: 'https://github.com/Veronchi/Rs-Clone/tree/develop'
  },
  {
    id: 2,
    img: 'src/assets/images/asyncrace.jpg',
    title: 'Async Race',
    techStack: ['Zalupa', 'secondZalupa'],
    description: 'Гоночки',
    deploy: 'link',
    githubLink: 'link'
  }
];
