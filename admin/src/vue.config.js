module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        comp: "@/components",
        assets: "@/assets",
        views: "@/views",
        utils: "@/utils",
      },
    },
  },
};
