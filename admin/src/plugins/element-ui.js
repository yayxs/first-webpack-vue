// https://github.com/ElemeFE/element/blob/master/components.json
import Vue from "vue";
import {
  Button,
  Select,
  Table,
  TableColumn,
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Header,
  Main,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "element-ui";

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(Main);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Header);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
