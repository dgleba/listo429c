import Vue from "vue";
import Router from "vue-router";

// import Home from "./views/Home.vue";

// import appsettings from "./components/appsettings.vue";

import IndexComponent from "./components/IndexComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import EditComponent from "./components/EditComponent.vue";

import statusfield from "./components/statusfield.vue";

import HomeComponent from "./components/HomeComponent.vue";

Vue.use(Router);


// {
//   path: "/settings",
//   component: appsettings
// },


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "posts",
      path: "/",
      component: IndexComponent
    },
    {
      name: "create",
      path: "/create",
      component: CreateComponent
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
      name: "home",
      path: "/home",
      component: HomeComponent
    },
  ]
});
