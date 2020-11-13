<template>
  <div>
    <v-sheet tile color="primary" dark>
      <v-container>
        <v-row justify="center" class="text-center my-12 py-12">
          <v-col cols="12">
            <h1 class="text-h2 font-weight-bold" style="line-height: 1.3;">
              Imagine what we will <br />
              accomplish together
            </h1>

            <h3 class="my-6 text-h6 font-weight-regular">
              Powerful analytics tools for your business. See the exact keywords
              for which your <br />
              competitors rank in organic search and the amount of traffic
              driven by each of them.
            </h3>

            <v-btn class="my-6 text-capitalize" large color="secondary">
              <v-icon left>
                mdi-fingerprint
              </v-icon>
              Start a 30-days-trial
            </v-btn>

            <v-btn
              class="my-6 text-capitalize"
              :class="{ 'ml-3': $vuetify.breakpoint.smAndUp }"
              large
              light
            >
              Quick Demo
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12">
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h4 font-weight-bold">
            Meet our intuitive platform
          </h2>

          <p class="text-h6 my-6 text--secondary">
            Self-Service Analytics or ad hoc reporting gives users the ability
            to develop rapid <br />
            reports, empowering users to analyze their data.
          </p>
        </div>

        <div class="py-12 text-center">
          <v-row justify="space-between">
            <v-col
              cols="6"
              lg="3"
              xl="2"
              v-for="(item, i) in frontFeature"
              :key="i"
            >
              <v-avatar size="64" style="background-color: rgba(6,72,179,.2);">
                <v-icon color="primary" large>
                  {{ item.icon }}
                </v-icon>
              </v-avatar>

              <br />

              <div class="mt-6 mb-1">
                <h4 class="text-h5 font-weight-bold">
                  {{ item.title }}
                </h4>
              </div>

              <div>
                <h5 class="text-body-1">
                  {{ item.text }}
                </h5>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet tile color="primary" class="py-12" dark>
      <v-container fill-height>
        <v-row justify="space-between" align="center">
          <v-col cols="12" md="6" lg="5" xl="4">
            <h4 class="text-subtitle-1 grey--text text--lighten-1">
              Customer service
            </h4>
            <h2 class="text-h3 my-4">
              Discover effortless customer support
            </h2>
            <p class="text-subtitle-1 grey--text text--lighten-1 my-8">
              Convert your emails into tickets and keep them all organized in
              one place. Never leave customers' questions unanswered.
            </p>

            <v-btn color="secondary" class="text-capitalize" large>
              View More
              <v-icon right>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" md="6" lg="5">
            <v-row justify="center" align="center">
              <v-col cols="6" v-for="(item, i) in awesomeFeature" :key="i">
                <v-card
                  min-height="300px"
                  class="d-flex align-center justify-center"
                  outlined
                  light
                >
                  <v-row
                    align="center"
                    justify="center"
                    class="text-center primary--text"
                    no-gutters
                  >
                    <v-col cols="12">
                      <v-icon color="primary" size="48">
                        {{ item.icon }}
                      </v-icon>
                    </v-col>

                    <v-col cols="12" class="mt-5 mb-3">
                      <div>
                        <h5 class="text-h6">
                          {{ item.text }}
                        </h5>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <p>
                        {{ item.subtext }}
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12">
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h4 font-weight-bold">
            The tools you get with Shock
          </h2>

          <p class="text-h6 my-6 text--secondary">
            We add new tools and features regularly.
          </p>
        </div>

        <v-card flat outlined>
          <v-item-group
            v-model="selected"
            mandatory
            :class="{
              'd-flex align-center justify-space-between pa-6':
                $vuetify.breakpoint.mdAndUp,
            }"
          >
            <template v-for="(section, i) in sections">
              <v-item :key="`item-${i}`" :value="i" @change="selected = i">
                <v-btn
                  slot-scope="{ active, toggle }"
                  :color="!active ? 'transparent' : ''"
                  :input-value="active"
                  active-class="primary white--text"
                  class="text-capitalize"
                  depressed
                  @click="toggle"
                  x-large
                >
                  <v-icon left>
                    {{ section.icon }}
                  </v-icon>
                  {{ section.text }}
                </v-btn>
              </v-item>
            </template>
          </v-item-group>
        </v-card>

        <v-window v-model="selected">
          <template v-for="(detail, i) in details">
            <v-window-item
              :key="`window-${i}`"
              :value="i"
              eager
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <div class="my-12">
                <v-row justify="space-between">
                  <v-col cols="12" md="6" lg="5" xl="4">
                    <h2 class="text-h4">
                      {{ detail.text }}
                    </h2>

                    <div class="text-body-1 my-8">
                      <p>
                        {{ detail.p1 }}
                      </p>

                      <p>
                        {{ detail.p2 }}
                      </p>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-img
                      src="https://cdn.pixabay.com/photo/2020/05/02/00/14/museum-of-science-and-industry-5119410_1280.jpg"
                    ></v-img>
                  </v-col>
                </v-row>
              </div>
            </v-window-item>
          </template>
        </v-window>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12" color="transparent">
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h4 font-weight-bold">
            Recommended by leading experts <br />
            in marketing and SEO
          </h2>

          <p class="text-h6 my-6 text--secondary">
            Our products are loved by users worldwide
          </p>
        </div>

        <div class="py-12">
          <v-row>
            <v-col cols="12" md="6" v-for="item in 4" :key="item">
              <Review />
            </v-col>
          </v-row>

          <div class="text-center my-12">
            <v-btn color="primary" large class="text-capitalize">
              <v-icon left>
                mdi-pillar
              </v-icon>
              See all stories
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import Review from "@/components/review.vue";

export default {
  components: {
    Review,
  },
  data: () => ({
    selected: false,
    frontFeature: [
      {
        text: "Create reports with an easy to use drag-and drop cards.",
        icon: "mdi-chart-arc",
        title: "Analyze your data",
      },
      {
        text: "Share or publish your reports with your teammates.",
        icon: "mdi-security",
        title: "Collaborate securely",
      },
      {
        text: "Create reports with an easy to use drag-and drop cards.",
        icon: "mdi-rocket",
        title: "Features released regularly",
      },
      {
        text:
          "Our support team is a quick chat or email away — 24 hours a day.",
        icon: "mdi-face-agent",
        title: "24/7 support",
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
    ],
    sections: [
      { text: "Content Research", icon: "mdi-file-document" },
      { text: "Rank Trackin", icon: "mdi-trending-up" },
      { text: "Web Monitoring", icon: "mdi-bell" },
      { text: "Backlink Research", icon: "mdi-link" },
    ],
    details: [
      {
        text: "Content Research",
        p1:
          "Put any keyword into this tool to see which content has performed best in terms of social buzz, number of acklinks and organic search traffic.",
        p2:
          "Find all articles that mentioned your target keyword and use the 'Highlight unlinked domains' feature to see which of these websites have never linked to you.",
      },
      {
        text: "Rank Trackin",
        p1:
          "Put any keyword into this tool to see which content has performed best in terms of social buzz, number of acklinks and organic search traffic.",
        p2:
          "Find all articles that mentioned your target keyword and use the 'Highlight unlinked domains' feature to see which of these websites have never linked to you.",
      },
      {
        text: "Web Monitoring",
        p1:
          "Put any keyword into this tool to see which content has performed best in terms of social buzz, number of acklinks and organic search traffic.",
        p2:
          "Find all articles that mentioned your target keyword and use the 'Highlight unlinked domains' feature to see which of these websites have never linked to you.",
      },
      {
        text: "Backlink Research",
        p1:
          "Put any keyword into this tool to see which content has performed best in terms of social buzz, number of acklinks and organic search traffic.",
        p2:
          "Find all articles that mentioned your target keyword and use the 'Highlight unlinked domains' feature to see which of these websites have never linked to you.",
      },
    ],
  }),
  methods: {
    toggle(T) {
      console.log(T);
    },
  },
};
</script>
