<template>
  <div>
    <v-sheet tile color="primary" dark>
      <v-container>
        <v-row justify="center" class="text-center my-12 py-12">
          <v-col cols="12">
            <v-badge color="secondary" overlap offset-x="-10">
              <template v-slot:badge>
                <p class="font-weight-bold">FREE</p>
              </template>
              <h1 class="text-h2 font-weight-black">Shock</h1>
            </v-badge>

            <h2
              class="my-6 grey--text text--lighten-1 text-h4 font-weight-medium"
            >
              The ultimate design system for your
              <br />online business
            </h2>

            <v-btn
              class="my-6 text-capitalize"
              x-large
              color="secondary"
              href="https://github.com/AGDholo/shock"
              target="_black"
            >
              <v-icon left>mdi-download</v-icon>Free Download
            </v-btn>

            <div class="my-6 text-body-2 grey--text text--lighten-1">
              <span>Production by:</span>
              <br />
              <div class="my-6">
                <v-avatar color="secondary">
                  <v-icon large>mdi-feather</v-icon>
                </v-avatar>
                <br />
                <div class="mt-2">HeroUI</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12">
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h3 font-weight-bold">What you get?</h2>
        </div>

        <div class="my-12">
          <v-row class="py-12" justify="space-between">
            <v-col cols="12" md="6">
              <v-card>
                <v-img
                  src="https://cdn.pixabay.com/photo/2020/05/14/15/46/puffins-5170171_1280.jpg"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="5">
              <div>
                <h3 class="text-h4 my-3">Front pages</h3>

                <div class="grey--text text--darken-1">
                  <h4 class="text-h6 my-3 font-weight-regular">
                    25 hand-crafted pages for your startup
                  </h4>
                  <div class="my-5">
                    <p class="font-weight-regular">
                      Showcase your startup with the front and landing pages it
                      deserves. With a lot of care we developed some of the best
                      presentational pages you can get.
                    </p>
                  </div>
                </div>

                <div class="my-12">
                  <v-btn color="secondary" class="text-capitalize" large
                    >Front Demo</v-btn
                  >

                  <v-btn
                    outlined
                    large
                    :class="{ 'ml-3': $vuetify.breakpoint.smAndUp }"
                  >
                    <v-icon left>mdi-apps</v-icon>Components
                  </v-btn>
                </div>

                <div class="my-12">
                  <v-row align="center">
                    <v-col class="flex-grow-0">
                      <v-avatar color="secondary">
                        <v-icon large dark>mdi-feather</v-icon>
                      </v-avatar>
                    </v-col>

                    <v-col class="flex-shrink-1">
                      <div>
                        <h4 class="text-body-1">Created by</h4>
                        <h3 class="subtitle font-weight-regular">HeroUI</h3>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-row>

          <div class="my-12 text-center">
            <v-row>
              <v-col cols="6" md="3" v-for="(item, i) in frontFeature" :key="i">
                <v-avatar size="88" class="elevation-4">
                  <v-icon color="secondary" large>{{ item.icon }}</v-icon>
                </v-avatar>

                <br />

                <div class="mt-6 mb-1">
                  <h4 class="text-h5 font-weight-bold">{{ item.total }}</h4>
                </div>

                <div>
                  <h5 class="text-body-1">{{ item.text }}</h5>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>

        <div class="my-12">
          <v-row class="py-12" justify="space-between">
            <v-col cols="12" md="5">
              <div>
                <h3 class="text-h4 my-3">Dashboard</h3>

                <div class="grey--text text--darken-1">
                  <h4 class="text-h6 my-3 font-weight-regular">
                    Over 200 individual components
                  </h4>
                  <div class="my-5">
                    <p class="font-weight-regular">
                      Start your development with a Premium Dashboard built with
                      over 200 individual components, giving you the freedom of
                      choosing and combining.
                    </p>
                  </div>
                </div>

                <div class="my-12">
                  <v-btn color="primary" class="text-capitalize" large
                    >Dashboard Demo</v-btn
                  >

                  <v-btn
                    outlined
                    large
                    :class="{ 'ml-3': $vuetify.breakpoint.smAndUp }"
                  >
                    <v-icon left>mdi-apps</v-icon>Components
                  </v-btn>
                </div>

                <div class="my-12">
                  <v-row align="center">
                    <v-col class="flex-grow-0">
                      <v-avatar color="primary">
                        <v-icon large dark>mdi-feather</v-icon>
                      </v-avatar>
                    </v-col>

                    <v-col class="flex-shrink-1">
                      <div>
                        <h4 class="text-body-1">Created by</h4>
                        <h3 class="subtitle font-weight-regular">HeroUI</h3>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <v-card>
                <v-img
                  src="https://cdn.pixabay.com/photo/2020/05/11/02/32/colorado-5156229_1280.jpg"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>

          <div class="my-12 text-center">
            <v-row>
              <v-col
                cols="6"
                md="3"
                v-for="(item, i) in dashboardFeature"
                :key="i"
              >
                <v-avatar size="88" class="elevation-4">
                  <v-icon color="primary" large>{{ item.icon }}</v-icon>
                </v-avatar>

                <br />

                <div class="mt-6 mb-1">
                  <h4 class="text-h5 font-weight-bold">{{ item.total }}</h4>
                </div>

                <div>
                  <h5 class="text-body-1">{{ item.text }}</h5>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12" color="transparent">
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h3 font-weight-bold">Awesome Features</h2>

          <p class="text-h6 my-6">
            You get all Vuetify components fully customized. Besides, you
            receive numerous
            <br />plugins out of the box and ready to use.
          </p>
        </div>

        <div>
          <v-row justify="center" align="center">
            <v-col cols="6" md="3" v-for="(item, i) in awesomeFeature" :key="i">
              <v-card
                min-height="300px"
                class="d-flex align-center justify-center"
                outlined
              >
                <v-row
                  align="center"
                  justify="center"
                  class="text-center primary--text"
                  no-gutters
                >
                  <v-col cols="12">
                    <v-icon color="primary" size="48">{{ item.icon }}</v-icon>
                  </v-col>

                  <v-col cols="12" class="mt-5 mb-3">
                    <div>
                      <h5 class="text-h6">{{ item.text }}</h5>
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <p>{{ item.subtext }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12" color="primary" dark>
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h3 font-weight-bold">
            Less
            <strong>work</strong>, more <strong>flow</strong>.
          </h2>

          <p class="text-h6 my-6">
            Boost productivity with BrowserSync. Sass changes are reflected
            instantly and pages scroll
            <br />and refresh on devices as you work.
          </p>
        </div>

        <v-card outlined light>
          <v-card-text class="text-subtitle-1">
            <div>
              >$ yarn
              <br />
              <span class="secondary--text">Everything’s installed!</span>
            </div>

            <div class="my-6">
              >$ yarn serve
              <br />
              <span class="secondary--text">
                App running at:
                <br />- Local: http://localhost:8080/
              </span>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    frontFeature: [
      {
        text: "Front Pages",
        icon: "mdi-monitor",
        total: "25",
      },
      {
        text: "Premium Components",
        icon: "mdi-puzzle",
        total: "500+",
      },
      {
        text: "Vue CLI & Vuetify Loader",
        icon: "mdi-vuejs",
        total: "Workflow",
      },
      {
        text: "Unlimited",
        icon: "mdi-cash-remove",
        total: "Free",
      },
    ],
    dashboardFeature: [
      {
        text: "Dashboard Pages",
        icon: "mdi-monitor",
        total: "20+",
      },
      {
        text: "Premium Components",
        icon: "mdi-puzzle",
        total: "500+",
      },
      {
        text: "Vue CLI & Vuetify Loader",
        icon: "mdi-vuejs",
        total: "Workflow",
      },
      {
        text: "Unlimited",
        icon: "mdi-cash-remove",
        total: "Free",
      },
    ],
    awesomeFeature: [
      {
        text: "Vuetify",
        icon: "mdi-vuetify",
        subtext: "Built with the most popular CSS Framework",
      },
      {
        text: "sass",
        icon: "mdi-sass",
        subtext: "Variables and mixins to empower development",
      },
      {
        text: "Responsive",
        icon: "mdi-cellphone",
        subtext: "All pages and components are 100% responsive",
      },
      {
        text: "Vue CLI",
        icon: "mdi-vuejs",
        subtext: "Vue CLI for a flawless workflow",
      },
      {
        text: "Creative rights",
        icon: "mdi-image-multiple",
        subtext: "All images, icons and fonts are licensed & free to use",
      },
      {
        text: "Free",
        icon: "mdi-cash-remove",
        subtext: "MIT LICENSE & Unlimited Commercial License",
      },
      {
        text: "Premium support",
        icon: "mdi-face-agent",
        subtext: "We offer 6+ months of premium support by default",
      },
      {
        text: "W3C Validated",
        icon: "mdi-language-html5",
        subtext: "HTML pages are all valid by W3C Standards",
      },
    ],
  }),
};
</script>
