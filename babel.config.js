module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    // ele 按需加载
    // ["es2015", { modules: false }],
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
