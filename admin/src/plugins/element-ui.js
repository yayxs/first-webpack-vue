// https://github.com/ElemeFE/element/blob/master/components.json
import Vue from "vue";
import { Button, Select } from "element-ui";

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
