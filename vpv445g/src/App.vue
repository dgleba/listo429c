<template>
  <div class="container-fluid">
    <v-app id="inspire">
      <v-toolbar>
        <v-toolbar-title>App&nbsp</v-toolbar-title>

        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon" :to="item.link" flat>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-toolbar-items class="hidden-xs-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>
            {{
            item.title
            }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
// Try to make appsettings available/created in app.vue
import appsettings from "./components/appsettings.vue";

export default {
  data() {
    return {
      menu: [
        { icon: "a", title: "Posts",    link: "/" },
        {             title: "Sync",      link: "/settings" },
        {             title: "StatusTag", link: "/statusfield" },
        { icon: "home", title: "Help",    link: "/home" },
      ]
    };
  },
  components: {
    appsettings
  },
  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>

<style>
/* <!--  // small height div to create a small vertical spacing --> */
.svdiv,
.sm-vert-div {
  height: 7px;
  width: 50%;
  /* background-color: powderblue; */
}
</style>
