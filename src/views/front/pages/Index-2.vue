<template>
  <div>
    <v-sheet tile color="transparent" class="my-12">
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="6" lg="5" xl="4">
            <h1 class="text-h2 font-weight-bold mb-3" style="line-height: 1.3">
              Tools to grow your traffic
            </h1>

            <p class="text-h6">
              Rocket helps you learn why your competitors rank so high and what
              you need to do to outrank them.
            </p>

            <v-text-field solo flat outlined label="Full Name"></v-text-field>
            <v-text-field
              solo
              flat
              outlined
              label="Your Email"
              type="email"
            ></v-text-field>

            <v-btn color="primary" block large class="text-capitalize">
              Create your account
            </v-btn>
          </v-col>

          <v-col cols="12" md="6">
            <v-img src="/image/data-analyst.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12">
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h3 font-weight-bold">Meet our intuitive platform</h2>

          <p class="text-h6 my-6 text--secondary">
            Self-Service Analytics or ad hoc reporting gives users the ability
            to develop rapid <br />
            reports, empowering users to analyze their data.
          </p>
        </div>

        <div class="py-12">
          <v-row align="center" justify="space-between">
            <v-col cols="12" md="6" lg="5" xl="4">
              <h2 class="text-h4 font-weight-bold mb-3">Site Audit</h2>

              <p class="text-h6 text--secondary my-6">
                Site Audit crawls all the pages it finds on your website – then
                provides an overall SEO health score, visualises key data in
                charts, flags all possible SEO issues and provides
                recommendations on how to fix them.
              </p>

              <p class="text-h6 text--secondary">
                Have a huge website? Not an issue.
              </p>

              <v-btn large class="text-capitalize my-6" color="primary">
                Learn More
                <v-icon right> mdi-bullseye-arrow </v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" md="6">
              <v-img
                src="https://cdn.pixabay.com/photo/2017/10/30/12/56/spices-2902439_1280.jpg"
              ></v-img>
            </v-col>
          </v-row>
        </div>

        <div class="py-12">
          <v-row align="center" justify="space-between">
            <v-col cols="12" md="6">
              <v-img
                src="https://cdn.pixabay.com/photo/2020/05/17/06/45/butterfly-5180306_1280.jpg"
              ></v-img>
            </v-col>

            <v-col cols="12" md="6" lg="5" xl="4">
              <h2 class="text-h4 font-weight-bold mb-3">Rank Tracker</h2>

              <p class="text-h6 text--secondary my-6">
                We track your desktop and mobile keyword rankings from any
                location and plot your full ranking history on a handy graph.
              </p>

              <p class="text-h6 text--secondary">
                You can set up automated ranking reports to be sent to your
                email address, so you’ll never forget to check your ranking
                progress.
              </p>

              <v-btn large class="text-capitalize my-6" color="primary">
                Rank Tracker Tool
                <v-icon right> mdi-bullseye-arrow </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <div class="py-12">
          <v-row>
            <v-col cols="12" md="4" v-for="(item, i) in features" :key="i">
              <v-card outlined class="pa-6 fill-height">
                <v-card-title>
                  <h2 class="text-h2 font-weight-bold">
                    {{ item.title }}
                  </h2>
                </v-card-title>

                <v-card-text class="text-h6">
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12" color="transparent">
      <v-container>
        <div class="text-center my-12">
          <h2 class="text-h3 font-weight-bold">SEO solutions for every need</h2>

          <p class="text-h6 my-6 text--secondary">
            We build best-in-class SEO software for every situation, from our
            all-in-one SEO <br />
            platform to tools for local SEO, enterprise SERP analytics, and a
            powerful API.
          </p>
        </div>

        <div>
          <v-row>
            <v-col cols="12" md="4" v-for="i in 3" :key="i">
              <v-card outlined>
                <v-img
                  src="https://cdn.pixabay.com/photo/2018/03/07/19/51/grass-3206938_1280.jpg"
                ></v-img>

                <v-card-title class="text-h4"> Rocket Local </v-card-title>

                <v-card-text class="text-subtitle-1">
                  Moz Local distributes your business information across the web
                  for maximum search engine visibility.

                  <div class="my-6">
                    <v-sheet
                      tile
                      class="d-flex align-center my-5"
                      v-for="item in 3"
                      :key="item"
                    >
                      <v-icon left color="success">mdi-check-circle</v-icon>
                      Real-time distribution
                    </v-sheet>
                  </div>

                  <v-btn color="primary" class="text-capitalize" large>
                    Learn More
                  </v-btn>
                </v-card-text>
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
            The world's most accurate SEO data.
          </h2>
        </div>

        <div class="py-12">
          <v-row>
            <v-col cols="12" md="4" v-for="i in 3" :key="i">
              <v-card
                class="text-center fill-height"
                outlined
                flat
                color="transparent"
              >
                <v-card-text>
                  <h2 class="text-h2 font-weight-bold white--text">
                    36.5 trillion
                  </h2>

                  <p class="text-h6">
                    links indexed by Link Explorer with our tools
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row justify="center" class="py-12">
            <v-col cols="12" md="10" lg="8" xl="6">
              <v-text-field
                hide-details
                solo
                flat
                outlined
                label="Enter a domain"
                light
                append-icon="mdi-magnify"
              ></v-text-field>

              <p class="text-center my-6 grey--text text--lighten-1">
                Rocket also offers access to our best-in-class proprietary
                metrics including Keyword Difficulty, Spam Score, Page
                Authority, and Domain Authority — the most highly correlated
                metric with actual Google rankings available today.
              </p>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    features: [
      {
        title: "98%",
        text: "Average satisfaction rating received in the past year",
      },
      {
        title: "24/7",
        text: "Our support team is a quick chat or email away — 24 hours a day",
      },
      {
        title: "220k+",
        text: "Extension installs from the two major mobile app stores",
      },
    ],
  }),
};
</script>
