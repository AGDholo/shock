<template>
  <div>
    <v-navigation-drawer app>
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
      <v-toolbar-items class="d-flex align-center">
        <v-text-field
          hide-details
          flat
          dense
          outlined
          solo
          label="Search"
          prepend-inner-icon="mdi-magnify"
        />
      </v-toolbar-items>

      <v-spacer />

      <v-btn icon>
        <v-icon>
          mdi-bell-outline
        </v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>
          mdi-apps-box
        </v-icon>
      </v-btn>

      <v-btn text>
        <div class="d-flex align-center">
          <v-avatar size="32">
            <img
              src="https://cdn.pixabay.com/photo/2020/11/08/10/25/dog-5723334_1280.jpg"
              alt="avatar"
            />
          </v-avatar>

          <div class="ml-1 subtitle-2">
            Admin
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
    drawer: [
      { title: "Back to front", icon: "mdi-arrow-left", to: "/" },
      {
        title: "Dashboard",
        icon: "mdi-home",
        to: "/dashboard/pages/dashboards/dashboard",
      },
      {
        title: "Sign-in",
        icon: "mdi-login",
        to: "/dashboard/pages/examples/sign-in",
      },
    ],
  }),
};
</script>
