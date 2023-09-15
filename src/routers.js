import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import LogIn from './components/LogIn.vue';
const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component:LogIn,
    path: "/log-in",
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
