import Vue from "vue";
import Router from "vue-router";


// import Home from "./views/Home.vue";

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

import statusfield from "./components/statusfield.vue";
import appsettings from "./components/appsettings.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeComponent
    },
    {
      name: "create",
      path: "/create",
      component: CreateComponent
    },
    {
      name: "posts",
      path: "/posts",
      component: IndexComponent
    },
    {
      name: "edit",
      path: "/edit/:id",
      component: EditComponent
    },
    {
      path: "/statusfield",
      component: statusfield
    },
    {
      path: "/settings",
      component: appsettings
    },

  ]
});
