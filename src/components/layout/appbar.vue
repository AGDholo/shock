<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-list nav color="primary">
        <v-list-item
          v-for="(item, i) in btnItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      fixed
      app
      flat
      class="appbar"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
    >
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              v-if="!$vuetify.breakpoint.smAndUp"
            />
            <v-toolbar-title
              style="cursor: pointer"
              class="font-weight-bold text-h5"
              @click="$router.push('/')"
            >
              <v-icon large color="secondary"> mdi-feather </v-icon>
              Hero<span class="secondary--text">UI</span>
            </v-toolbar-title>

            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  v-on="on"
                  class="ml-3 text-capitalize"
                  depressed
                  large
                >
                  Front pages

                  <v-icon right> mdi-arrow-down-circle-outline </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  :to="item.to"
                  v-for="(item, index) in fontPages"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  v-on="on"
                  class="ml-3 text-capitalize"
                  depressed
                  large
                >
                  App pages

                  <v-icon right> mdi-arrow-down-circle-outline </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  :to="item.to"
                  v-for="(item, index) in appPages"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col class="text-right" v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              v-for="(item, i) in btnItems"
              :key="i"
              :outlined="item.outlined"
              :to="item.to"
              :href="item.href"
              :target="item.target"
              :color="item.color"
              class="ml-3 text-capitalize"
              large
            >
              <v-icon left>
                {{ item.icon }}
              </v-icon>
              {{ item.text }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    btnItems: [
      {
        outlined: true,
        text: "Components",
        to: "",
        icon: "mdi-view-list",
      },
      {
        text: "Free Download",
        href: "https://github.com/AGDholo/shock",
        target: "_black",
        color: "secondary",
        icon: "mdi-download",
      },
    ],
    fontPages: [
      {
        title: "Landing",
        to: "/front/pages/index",
      },
      {
        title: "Landing 2",
        to: "/front/pages/index-2",
      },
      {
        title: "About",
        to: "/front/pages/about",
      },
      {
        title: "Price",
        to: "/front/pages/price",
      },
      {
        title: "Contact",
        to: "/front/pages/contact",
      },
    ],
    appPages: [
      {
        title: "Dashboard",
        to: "/dashboard/pages/dashboards/dashboard",
      },
      {
        title: "Sign-in",
        to: "/dashboard/pages/examples/sign-in",
      },
      {
        title: "Profile",
        to: "/dashboard/pages/examples/profile",
      },
    ],
  }),
};
</script>
