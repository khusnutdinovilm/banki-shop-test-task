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

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Banki Shop test task";
      return args;
    });
  },
};
