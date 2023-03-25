import "./assets/css/index.css";

import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";
import { createApp } from "vue";
import router from "./router/index";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueLazyLoad);
app.mount("#app");
