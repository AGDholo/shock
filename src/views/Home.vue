<template>
  <div>
    <!-- ==================== HERO / PROJECT INTRO ==================== -->
    <v-sheet tile color="primary" dark class="hero-section">
      <v-container>
        <v-row justify="center" class="text-center my-12 py-12">
          <v-col cols="12" md="10" lg="8">
            <v-badge color="secondary" overlap offset-x="-10">
              <template v-slot:badge>
                <p class="font-weight-bold mb-0">FREE</p>
              </template>
              <h1 class="text-h2 font-weight-black">Shock</h1>
            </v-badge>

            <h2
              class="my-6 grey--text text--lighten-1 text-h4 font-weight-medium"
            >
              A complete Vuetify template
              <br />for your online business
            </h2>

            <p
              class="text-h6 font-weight-light grey--text text--lighten-2 mb-8 mx-auto"
              style="max-width: 720px"
            >
              Open-source, MIT-licensed, and built on Vuetify — Shock pairs
              hand-crafted front pages with a feature-rich dashboard so you can
              ship your next product faster.
            </p>

            <div class="my-8">
              <v-btn
                class="text-capitalize ma-2"
                x-large
                color="secondary"
                href="https://github.com/AGDholo/shock"
                target="_blank"
                rel="noopener"
              >
                <v-icon left>mdi-github</v-icon>View on GitHub
              </v-btn>

              <v-btn
                class="text-capitalize ma-2"
                x-large
                outlined
                href="https://shock.heroui.net/"
                target="_blank"
                rel="noopener"
              >
                <v-icon left>mdi-eye-outline</v-icon>Live Demo
              </v-btn>
            </div>

            <div class="mt-12">
              <v-chip
                v-for="tag in heroTags"
                :key="tag.text"
                class="ma-1"
                color="rgba(255,255,255,0.12)"
                text-color="white"
                small
              >
                <v-icon left small>{{ tag.icon }}</v-icon>
                {{ tag.text }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ==================== ABOUT THE PROJECT ==================== -->
    <v-sheet tile class="py-12">
      <v-container>
        <div class="text-center my-12">
          <p
            class="text-overline secondary--text font-weight-bold mb-2"
          >
            About the Project
          </p>
          <h2 class="text-h3 font-weight-bold">What is Shock?</h2>
          <p
            class="text-h6 my-6 mx-auto grey--text text--darken-2 font-weight-regular"
            style="max-width: 760px"
          >
            Shock is an open-source Vuetify theme for new businesses, startups,
            and digital products. It bundles a polished marketing site and a
            full admin dashboard into a single, MIT-licensed codebase — so you
            can stop wiring boilerplate and start shipping.
          </p>
        </div>

        <v-row justify="center" class="my-12">
          <v-col
            cols="6"
            md="3"
            v-for="(item, i) in stats"
            :key="i"
            class="text-center"
          >
            <h3 class="text-h2 font-weight-black primary--text">
              {{ item.total }}
            </h3>
            <h4 class="text-body-1 grey--text text--darken-1 mt-2">
              {{ item.text }}
            </h4>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ==================== FEATURE HIGHLIGHTS ==================== -->
    <v-sheet tile class="py-12" color="grey lighten-5">
      <v-container>
        <div class="text-center my-12">
          <p class="text-overline secondary--text font-weight-bold mb-2">
            Highlights
          </p>
          <h2 class="text-h3 font-weight-bold">Built to ship</h2>
          <p
            class="text-h6 my-6 mx-auto grey--text text--darken-2 font-weight-regular"
            style="max-width: 760px"
          >
            Every Vuetify component, fully customized — plus a modern build
            pipeline, responsive layouts, and a permissive license that lets
            you take it anywhere.
          </p>
        </div>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, i) in features"
            :key="i"
          >
            <v-card class="pa-6 fill-height feature-card" outlined>
              <v-avatar size="56" color="primary" class="mb-4">
                <v-icon dark size="28">{{ item.icon }}</v-icon>
              </v-avatar>
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ item.text }}
              </h3>
              <p class="text-body-2 grey--text text--darken-1 mb-0">
                {{ item.subtext }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ==================== LIVE DEMO ==================== -->
    <v-sheet tile class="py-12">
      <v-container>
        <div class="text-center my-12">
          <p class="text-overline secondary--text font-weight-bold mb-2">
            See it in action
          </p>
          <h2 class="text-h3 font-weight-bold">Live Demo</h2>
          <p
            class="text-h6 my-6 mx-auto grey--text text--darken-2 font-weight-regular"
            style="max-width: 760px"
          >
            Click around the live preview to explore every front page,
            dashboard view, and component the template ships with.
          </p>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-card class="elevation-12 demo-card">
              <v-img
                src="https://cdn.pixabay.com/photo/2020/05/11/02/32/colorado-5156229_1280.jpg"
                height="380"
                gradient="to bottom, rgba(6,72,179,.0), rgba(6,72,179,.55)"
              >
                <div class="fill-height d-flex align-end pa-6">
                  <v-chip color="secondary" text-color="white" small>
                    <v-icon left small>mdi-link-variant</v-icon>
                    shock.heroui.net
                  </v-chip>
                </div>
              </v-img>

              <v-card-text class="text-center pa-8">
                <h3 class="text-h5 font-weight-bold mb-2 black--text">
                  Try the full template, live
                </h3>
                <p class="text-body-1 grey--text text--darken-1 mb-6">
                  No sign-up, no installation — just open the link and explore.
                </p>

                <v-btn
                  color="primary"
                  large
                  href="https://shock.heroui.net/"
                  target="_blank"
                  rel="noopener"
                  class="text-capitalize ma-2"
                >
                  <v-icon left>mdi-open-in-new</v-icon>
                  Open Live Demo
                </v-btn>
                <v-btn
                  outlined
                  large
                  to="/front/pages/index"
                  class="text-capitalize ma-2"
                >
                  <v-icon left>mdi-monitor-dashboard</v-icon>
                  Browse Pages
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ==================== HOW TO START ==================== -->
    <v-sheet tile class="py-12" color="grey lighten-5">
      <v-container>
        <div class="text-center my-12">
          <p class="text-overline secondary--text font-weight-bold mb-2">
            Get Started
          </p>
          <h2 class="text-h3 font-weight-bold">Up and running in minutes</h2>
          <p
            class="text-h6 my-6 mx-auto grey--text text--darken-2 font-weight-regular"
            style="max-width: 760px"
          >
            Three commands, a hot-reload dev server at
            <code class="primary--text">localhost:8080</code>, and you are ready
            to build.
          </p>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-row>
              <v-col
                cols="12"
                md="4"
                v-for="(step, i) in steps"
                :key="i"
              >
                <v-card class="pa-6 fill-height step-card" outlined>
                  <div class="d-flex align-center mb-4">
                    <v-avatar color="secondary" size="40" class="mr-3">
                      <span class="white--text font-weight-bold">{{
                        i + 1
                      }}</span>
                    </v-avatar>
                    <h3 class="text-h6 font-weight-bold mb-0">
                      {{ step.title }}
                    </h3>
                  </div>
                  <p class="text-body-2 grey--text text--darken-2 mb-4">
                    {{ step.desc }}
                  </p>
                  <v-sheet
                    color="grey lighten-3"
                    rounded
                    class="pa-3 code-block"
                  >
                    <code class="text-body-2 primary--text">{{
                      step.cmd
                    }}</code>
                  </v-sheet>
                </v-card>
              </v-col>
            </v-row>

            <v-card outlined class="pa-6 mt-8">
              <h4 class="text-subtitle-1 font-weight-bold mb-4">
                <v-icon color="secondary" left>mdi-flash-outline</v-icon>
                Available scripts
              </h4>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  v-for="(s, i) in scripts"
                  :key="i"
                >
                  <div class="d-flex align-start">
                    <v-icon color="primary" small class="mr-2 mt-1"
                      >mdi-chevron-right</v-icon
                    >
                    <div>
                      <code class="primary--text font-weight-bold">{{
                        s.cmd
                      }}</code>
                      <p
                        class="text-caption grey--text text--darken-1 mb-0 mt-1"
                      >
                        {{ s.desc }}
                      </p>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ==================== FINAL CTA ==================== -->
    <v-sheet tile color="primary" dark class="py-12">
      <v-container>
        <v-row justify="center" class="text-center my-12">
          <v-col cols="12" md="10" lg="8">
            <h2 class="text-h3 font-weight-black mb-6">
              Ready to ship faster?
            </h2>
            <p class="text-h6 grey--text text--lighten-1 mb-8">
              Star Shock on GitHub, fork the repo, and start building. MIT
              licensed — free for personal and commercial projects.
            </p>
            <v-btn
              x-large
              color="secondary"
              href="https://github.com/AGDholo/shock"
              target="_blank"
              rel="noopener"
              class="text-capitalize ma-2"
            >
              <v-icon left>mdi-github</v-icon>
              Visit Repository
            </v-btn>
            <v-btn
              x-large
              outlined
              href="https://github.com/AGDholo/shock/issues"
              target="_blank"
              rel="noopener"
              class="text-capitalize ma-2"
            >
              <v-icon left>mdi-bug-outline</v-icon>
              Report an Issue
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    heroTags: [
      { text: "Vue 2", icon: "mdi-vuejs" },
      { text: "Vuetify", icon: "mdi-vuetify" },
      { text: "Sass", icon: "mdi-sass" },
      { text: "MIT License", icon: "mdi-shield-check-outline" },
    ],
    stats: [
      { text: "Front Pages", total: "25" },
      { text: "Dashboard Pages", total: "20+" },
      { text: "Components", total: "500+" },
      { text: "Cost", total: "Free" },
    ],
    features: [
      {
        text: "Vuetify-Powered",
        icon: "mdi-vuetify",
        subtext:
          "Built on the most popular Vue UI framework, with every component thoughtfully styled to match.",
      },
      {
        text: "Sass Variables",
        icon: "mdi-sass",
        subtext:
          "Variables and mixins included to make theming and brand customization a breeze.",
      },
      {
        text: "Fully Responsive",
        icon: "mdi-cellphone-link",
        subtext:
          "Every page and component is 100% responsive — mobile-first, desktop-ready.",
      },
      {
        text: "Vue CLI Workflow",
        icon: "mdi-vuejs",
        subtext:
          "Modern build pipeline with hot-reload, Sass, and Vuetify-Loader out of the box.",
      },
      {
        text: "Front + Dashboard",
        icon: "mdi-view-dashboard-variant",
        subtext:
          "25 hand-crafted marketing pages plus a feature-rich admin dashboard, in one repo.",
      },
      {
        text: "MIT Licensed",
        icon: "mdi-shield-check-outline",
        subtext:
          "Free for personal projects, client work, and commercial products — forever.",
      },
    ],
    steps: [
      {
        title: "Clone the repo",
        desc: "Grab the source from GitHub and step into the project directory.",
        cmd: "git clone https://github.com/AGDholo/shock.git",
      },
      {
        title: "Install dependencies",
        desc: "Run yarn (or npm install) to pull in all required packages.",
        cmd: "yarn",
      },
      {
        title: "Start the dev server",
        desc: "Launch a local preview with hot reload on http://localhost:8080.",
        cmd: "yarn serve",
      },
    ],
    scripts: [
      { cmd: "yarn serve", desc: "Start the development server" },
      { cmd: "yarn build", desc: "Build for production into /dist" },
      { cmd: "yarn lint", desc: "Check code formatting" },
    ],
  }),
};
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(135deg, #0648b3 0%, #053a93 100%);
}

.feature-card,
.step-card,
.demo-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover,
.step-card:hover {
  transform: translateY(-4px);
}

.code-block code,
code {
  background: transparent !important;
  padding: 0 !important;
  font-size: 13px;
  word-break: break-all;
  font-family: "Fira Code", "Menlo", "Monaco", monospace;
}
</style>
