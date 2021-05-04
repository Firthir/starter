import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Animation from "@/views/Animation.vue";

Vue.use(VueRouter);

const child = {
  template:
    '<div class="small"><div class=""><small>Lorem ipsum dolor sit</small><img src="http://via.placeholder.com/950x450/23689B?text=///" /></div></div>'
};

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/animation", component: Animation },

  {
    path: "/projects",
    component: Projects,
    children: [
      { path: "/", redirect: "/projects/1" },
      { path: ":child", component: child }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
