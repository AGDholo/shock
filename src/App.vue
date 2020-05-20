<template>
  <v-app>
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
      hide-on-scroll
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
              class="font-weight-bold headline"
            >
              <v-icon large color="secondary">
                mdi-feather
              </v-icon>
              Hero<span class="secondary--text">UI</span>
            </v-toolbar-title>
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

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="primary" dark app absolute>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="3">
            <h4 class="headline font-weight-bold">
              Shock
            </h4>
            <p class="body-1">
              Create, prototype, collaborate and turn your ideas into incredible
              products with the definitive platform for digital design.
            </p>
          </v-col>

          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="title">HeroUI</v-subheader>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item
                  v-for="(item, i) in heroui"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="body-1"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="title">Shock</v-subheader>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item
                  v-for="(item, i) in shock"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="body-1"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <div>
              <h5 class="title font-weight-bold">
                Subscribe
              </h5>
              <p class="body-1">
                The latest Rocket news, articles, and resources, sent straight
                to your inbox every month.
              </p>
            </div>

            <v-row>
              <v-col cols="8">
                <v-text-field
                  label="Filled"
                  solo
                  light
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-btn large block color="secondary">
                  Subscribe
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
            class="white--text"
            href="https://heroui.net"
            target="_blank"
            rel="noopener noreferrer"
            >HreoUI</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    btnItems: [
      {
        outlined: true,
        text: "Components",
        to: "/components",
        icon: "mdi-view-list",
      },
      {
        text: "Free Download",
        href: "https://github.com/heroui/shock",
        target: "_black",
        color: "secondary",
        icon: "mdi-download",
      },
    ],
    heroui: [
      {
        text: "Github",
        href: "https://github.com/heroui",
      },
      {
        text: "Themes",
        href: "https://heroui.net/",
      },
      {
        text: "Vuetify Tutorials",
        href: "https://heroui.net/vuetify2-guide/",
      },
    ],
    shock: [
      {
        text: "Download",
        href: "https://github.com/heroui/shock",
      },
      {
        text: "Issues",
        href: "https://github.com/heroui/shock/issues",
      },
      {
        text: "LICENSE",
        href: "https://github.com/heroui/shock/blob/master/LICENSE",
      },
    ],
  }),
};
</script>
