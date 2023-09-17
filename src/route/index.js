// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov2',
  },
  salary: '600$ в місяц',
  position: 'JunJS Deveior Fullstack loper',
  address: 'Мій адрес',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivan@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123 ',
    },
    linkedIn: {
      text: 'linkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        text: 'Open-minded for new technologies, with 1 years ofexperience in development.Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
        title: 'Summary',
      },
      experience: {
        text: ' Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by  simple mathematics models and preparing probability for such events like: money line -first win / draw / second win, totals etc.',
        title: 'Other experience',
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'CSS',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 7,
          isTop: true,
        },
        {
          name: 'Git',
          point: 3,
          isTop: false,
        },
        {
          name: 'npm',
          point: 5,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        { name: 'Хоби №1', isMain: false },
        { name: 'Хоби №2', isMain: true },
        { name: 'Хоби №3', isMain: false },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | ',
    },
    header,
    main: {
      education: [
        {
          name: 'дед сад',
          isEnd: true,
        },
        {
          name: 'школа',
          isEnd: true,
        },
        {
          name: 'Университет',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'JS Pro',
          id: 1,
        },
        {
          name: 'HTML/CSS Basic',
          id: 2,
        },
        {
          name: 'IT BRAINS',
          id: 3,
        },
      ],
    },
    footer,
  })
})
// ===================================================================================
router.get('/work', function (req, res) {
  // Будь-які значення для stackAmoGnt та awardAmoGnt
  const stackAmoGnt = 3
  const awardAmoGnt = 2

  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IS BRAINS',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua',
              about: 'Airbnb competitor',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Background verification',
                },
                {
                  name: 'Preparing SEO optimized pages',
                },
              ],
              // Додані змінні stackAmoGnt та awardAmoGnt
              stackAmoGnt,
              awardAmoGnt,
            },
          ],
        },
      ],
    },
    footer,
  })
})

module.exports = router
