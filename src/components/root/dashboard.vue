<template>
  <div>
    <v-navigation-drawer
      app
      :mini-variant="$vuetify.breakpoint.lgAndDown"
      expand-on-hover
      v-model="drawerDisplay"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 font-weight-black">
            Shock
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item
          v-for="item in drawer"
          :key="item.title"
          :to="item.to"
          :href="item.href"
          :target="item.target"
          exact
          color="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.lgAndDown"
        @click="drawerDisplay = !drawerDisplay"
      />

      <v-toolbar-items class="d-flex align-center">
        <div class="subtitle-2 text--secondary">
          GitHub Repository Analytics
        </div>
      </v-toolbar-items>

      <v-spacer />

      <v-btn icon>
        <v-icon>
          mdi-source-repository
        </v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>
          mdi-chart-donut
        </v-icon>
      </v-btn>

      <v-btn text href="https://github.com/AGDholo/shock" target="_blank">
        <div class="d-flex align-center">
          <v-avatar size="32" color="primary">
            <v-icon dark small>mdi-github</v-icon>
          </v-avatar>

          <div class="ml-1 subtitle-2">
            Source
          </div>
        </div>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />

      <v-footer>
        {{ new Date().getFullYear() }}
        <span class="ml-2">
          <strong
            ><a
              href="https://heroui.net"
              target="_blank"
              rel="noopener noreferrer"
              >HeroUI</a
            ></strong
          >
        </span>
      </v-footer>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawerDisplay: null,
    drawer: [
      { title: "Repository Overview", icon: "mdi-view-dashboard", to: "/" },
      {
        title: "Source Repository",
        icon: "mdi-download",
        href: "https://github.com/AGDholo/shock",
        target: "_black",
      },
      {
        title: "Dashboard",
        icon: "mdi-home",
        to: "/dashboard/pages/dashboards/dashboard",
      },
      {
        title: "Profile",
        icon: "mdi-face-profile",
        to: "/dashboard/pages/examples/profile",
      },
      {
        title: "Sign-in",
        icon: "mdi-login",
        to: "/dashboard/pages/examples/sign-in",
      },
    ],
  }),
  mounted() {
    this.drawerDisplay = this.$vuetify.breakpoint.lgAndDown ? false : true;
  },
};
</script>
