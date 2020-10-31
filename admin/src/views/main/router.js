const Main = () => import("./Main.vue");

const CategroyCreate = () => import("../category/CategroyCreate.vue");
export default {
  path: "/",
  name: "main",
  component: Main,
  children: [
    {
      path: "/category/create",
      name: "categoryCreate",
      component: CategroyCreate,
    },
  ],
};
