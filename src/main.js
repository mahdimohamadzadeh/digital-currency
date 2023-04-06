import "./assets/css/tailwind.css";

import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueLazyLoad,{});
app.mount("#app");
