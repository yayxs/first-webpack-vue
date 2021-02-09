const Main = () => import("./Main.vue");

const CategroyOperate = () => import("../category/CategroyOperate.vue");
const CategoryList = () => import("../category/CategroyList.vue");
export default {
  path: "/",
  name: "main",
  component: Main,
  children: [
    {
      path: "/category/create",
      name: "categoryCreate",
      component: CategroyOperate,
    },
    {
      path: "/category/edit/:id",
      name: "categoryEdit",
      component: CategroyOperate,
      props: true,
    },
    {
      path: "/category/list",
      name: "categoryList",
      component: CategoryList,
    },
  ],
};
