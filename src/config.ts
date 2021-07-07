export const PATHS = {
  POTATOZATION_OF_MARS:
    'https://dublin-potatozation-of-mars.ya-praktikum.tech/',
  MESSENGER: 'https://protected-basin-83084.herokuapp.com/',
  HEAD_HUNTER:
    'https://pyatigorsk.hh.ru/resume/24fe5970ff08edc98d0039ed1f757578376744',
  GIT: 'https://github.com/MyBraza',
  HABR: 'https://career.habr.com/ismail-adjiev-sleepy-cat',
  EMAIL: 'iadjiev@gmail.com'
}

export type TLanguage = 'en' | 'ru'

export type TTextContent = { en: string; ru: string }

export const TGisLanguage = (string: string): string is TLanguage => {
  return string === 'en' || string === 'ru'
}

export const ABOUTME = {
  info: {
    en:
      'I love to learn and improve my skills. ' +
      'Despite the fact that I have little real work experience, ' +
      'I have been doing programming for three years already. ' +
      'Passed the course on Yandex.Praktikum "Middle Frontend Developer". ' +
      'In addition to deepening the existing skills, ' +
      'I gained experience working with React, Redux, ' +
      'setting up the environment and project deployment.',
    ru:
      'Люблю учиться и совершенствовать свои навыки. ' +
      'Несмотря на то, что реального опыта работы мало, ' +
      'занимаюсь программированием уже на протяжении трех лет. ' +
      'Прошел курс Яндекс.Практикума "Мидл фронтэнд-разработчик". ' +
      'Помимо углубления имеющихся навыков, получил опыт работы с React, ' +
      'Redux, настройкой окружения и деплоя проекта.'
  }
}

export const PROJECTS = {
  POTATOZATION_OF_MARS: {
    description: {
      en:
        '"Potatozation of mars" is a team project of a web application with a' +
        'browser game. In this project, my responsibilities included developing' +
        'the logic and rendering of the game on HTML Canvas, as well as the' +
        'in-game interface. In addition, I was actively involved in the' +
        'development of other parts of the application.',
      ru:
        '"Potatozation of mars" - командный проект веб приложения с браузерной игрой. ' +
        'В этом проекте в мои обязанности входила разработка логики и отрисовки игры на HTML Canvas, ' +
        'а также внутриигрового интерфейса. ' +
        'Помимо этого я активно участвовал в разработке других частей приложения.'
    }
  },
  MESSENGER: {
    description: {
      en:
        'Messenger web application developed during the "Praktikum" course. In' +
        'this project, I created my own design, laid out the pages, configured' +
        'the build, created my own "framework" for working with blocks, and' +
        'deployed the project on Heroku.',
      ru:
        'Веб-приложение "мессенджер", разработанное на курсе Практикума. ' +
        'В этом проекте мной был создан собственный дизайн, сверстаны страницы, ' +
        'настроена сборка, создан собственный "фреймворк" для работы с блоками и ' +
        'развернут проект на Heroku.'
    }
  }
}
