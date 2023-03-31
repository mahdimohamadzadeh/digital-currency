import { createRouter, createWebHistory } from "vue-router";

import aboutUs from "../views/about-us.vue";
import calculator from "../views/calculator.vue";
import exchange from "../views/exchange.vue";
import home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/exchange",
    name: "exchangePage",
    component: exchange,
  },
  {
    path: "/calculator",
    name: "calculatorPage",
    component: calculator,
  },
  {
    path: "/about-us",
    name: "aboutUsPage",
    component: aboutUs,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
