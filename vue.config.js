module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/banki-shop-test-task/" : "/",

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variables";
          @import "@/assets/scss/mixins";
        `,
      },
    },
  },

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Banki Shop test task";
      return args;
    });
  },
};

// [
//   {
//     "title": "Рождение Венеры",
//     "title_en": "The Birth of Venus",
//     "artist": "Сандро Боттичелли",
//     "images": [],
//     "price": 1000000,
//     "oldPrice": 2000000
//   },
//   {
//     "title": "Тайная вечеря",
//     "title_en": "The Last Supper",
//     "artist": "Леонардо да Винчи",
//     "images": [],
//     "price": 3000000,
//     "oldPrice": null
//   },
//   {
//     "title": "Мона Лиза",
//     "title_en": "Mona Lisa",
//     "artist": "Леонардо да Винчи",
//     "images": [],
//     "price": 5000000,
//     "oldPrice": null
//   },
//   {
//     "title": "Сотворение Адама",
//     "title_en": "The Creation of Adam",
//     "artist": "Микеланджело",
//     "images": [],
//     "price": 2500000,
//     "oldPrice": 3500000
//   },
//   {
//     "title": "Весна",
//     "title_en": "Primavera",
//     "artist": "Сандро Боттичелли",
//     "images": [],
//     "price": 1800000,
//     "oldPrice": null
//   },
//   {
//     "title": "Дама с горностаем",
//     "title_en": "Lady with an Ermine",
//     "artist": "Леонардо да Винчи",
//     "images": [],
//     "price": 2200000,
//     "oldPrice": 2800000
//   },
//   {
//     "title": "Афинская школа",
//     "title_en": "The School of Athens",
//     "artist": "Рафаэль",
//     "images": [],
//     "price": 2700000,
//     "oldPrice": null
//   },
//   {
//     "title": "Портрет молодого человека",
//     "title_en": "Portrait of a Young Man",
//     "artist": "Рафаэль",
//     "images": [],
//     "price": 1500000,
//     "oldPrice": null
//   },
//   {
//     "title": "Мадонна Литта",
//     "title_en": "Madonna Litta",
//     "artist": "Леонардо да Винчи",
//     "images": [],
//     "price": 1900000,
//     "oldPrice": 2500000
//   },
//   {
//     "title": "Святая Цецилия",
//     "title_en": "Saint Cecilia",
//     "artist": "Рафаэль",
//     "images": [],
//     "price": 1600000,
//     "oldPrice": null
//   },
//   {
//     "title": "Преображение",
//     "title_en": "The Transfiguration",
//     "artist": "Рафаэль",
//     "images": [],
//     "price": 2100000,
//     "oldPrice": 2800000
//   },
//   {
//     "title": "Юдифь",
//     "title_en": "Judith",
//     "artist": "Джорджоне",
//     "images": [],
//     "price": 1400000,
//     "oldPrice": null
//   },
//   {
//     "title": "Любовь земная и любовь небесная",
//     "title_en": "Sacred and Profane Love",
//     "artist": "Тициан",
//     "images": [],
//     "price": 2600000,
//     "oldPrice": null
//   },
//   {
//     "title": "Портрет папы Иннокентия X",
//     "title_en": "Portrait of Pope Innocent X",
//     "artist": "Диего Веласкес",
//     "images": [],
//     "price": 3200000,
//     "oldPrice": null
//   },
//   {
//     "title": "Брак в Кане Галилейской",
//     "title_en": "The Wedding at Cana",
//     "artist": "Паоло Веронезе",
//     "images": [],
//     "price": 3500000,
//     "oldPrice": 4500000
//   }
// ]

