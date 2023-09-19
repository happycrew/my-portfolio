export const PROJECTS = [
  {
    id: 0,
    img: 'img/graphql.jpg',
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
    img: 'img/trello.jpg',
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
    id: 5,
    img: 'img/admindashboard.png',
    title: 'React Admin Dashboard',
    techStack: [
      'React',
      'Fullcalendar',
      'Material UI',
      'Nivo',
      'Formik',
      'React-router',
      'Emotion'
    ],
    description: `Админская панель с кучей графиков, таблиц и схем, опыт использования различных библиотек для отрисовки подобного контента.`,
    deploy: 'https://admin-dashboard-orlov.netlify.app/',
    githubLink: 'https://github.com/happycrew/admin-dashboard-react/tree/develop'
  },
  {
    id: 6,
    img: 'img/evogym.png',
    title: 'Evo Gym',
    techStack: ['React', 'Tailwind', 'TypeScript', 'Framer motion', 'Vite'],
    description: `Сайт для фитнес клуба, для стилизации использова Tailwind, а так же библиотека Framer motion для создании анимаций появляющейся информации`,
    deploy: 'https://gym-app-orlov.netlify.app/',
    githubLink: 'https://github.com/happycrew/gym-app'
  },
  {
    id: 2,
    img: 'img/songbird.png',
    title: 'SongBird',
    techStack: ['HTML', 'SCSS', 'JavaScript', 'Webpack'],
    description: 'Игра викторина, где пользователю нужно угадывать птиц по их пению.',
    deploy: 'https://rolling-scopes-school.github.io/satancrew-JSFE2022Q3/songbird/dist/#'
  },
  {
    id: 8,
    img: 'img/todoreact.png',
    title: 'ToDo React',
    techStack: ['React', 'SCSS', 'Zustand', 'Vite'],
    description: 'Приложение ToDo, написанное на React с использованием стейт-менеджера Zustand',
    deploy: 'https://calculator-react-orlov.netlify.app/',
    githubLink: 'https://github.com/happycrew/todo-vite/tree/develop'
  },
  {
    id: 3,
    img: 'img/onlinestore.png',
    title: 'Online Store',
    techStack: ['HTML', 'SCSS', 'TypeScript', 'Webpack'],
    team: '2 Developers',
    description:
      'Парная работа по созданию онлайн магазина. Моя роль в проекте заключалась в верстке, отрисовке товаров на странице, корректному добавлению (и удалению) товара в корзину, добавление скидок по промокоду, пагинация, а так же создание валидации для проверки введенных данных при покупке товара.',
    deploy: 'https://rolling-scopes-school.github.io/kirilldemyanenko-JSFE2022Q3/online-store/',
    githubLink: 'https://github.com/happycrew/online-store'
  },
  {
    id: 7,
    img: 'img/calculator.png',
    title: 'Calculator React',
    techStack: ['React', 'Styled Components', 'TypeScript', 'Vite'],
    description:
      'Калькулятор с использованием styled-components реализацией возможности смены темы.',
    deploy: 'https://calculator-react-orlov.netlify.app/',
    githubLink: 'https://github.com/happycrew/calculator-react/tree/develop'
  },
  {
    id: 4,
    img: 'img/meteoapp.jpg',
    title: 'MeteoApp Vue3',
    techStack: ['Vue3', 'SCSS', 'JavaScript', 'Vite', 'OneWeatherAppApi'],
    description:
      'Приложение для отслеживания погоды в зависимости от введенного города с демонстрацией дополнительных параметров: скорость ветра, давление, время рассвета и заказа, координат, видимости и т.д.',
    deploy: 'https://vue3-meteoapp.netlify.app',
    githubLink: 'https://github.com/happycrew/vue3-meteoapp/tree/develop'
  }
];
