<template>
  <div>
    <v-sheet color="primary" tile dark>
      <v-container>
        <v-row justify="center" class="my-12 py-12">
          <v-col cols="12" class="text-center ">
            <h1 class="text-h2 font-weight-bold" style="line-height: 1.3;">
              Our pricing plan made simple
            </h1>

            <h3 class="my-6 text-h6 font-weight-regular">
              Get access to 16 trillion backlinks, 7 billion keywords and 7
              bilion pieces of content
            </h3>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="12" md="4" v-for="(item, i) in price" :key="i">
                <v-card light outlined class="pt-12 px-6 fill-height">
                  <v-card-text class="black--text">
                    <div>
                      <div class="d-flex align-center">
                        <span class="align-self-start text-h6">$</span>
                        <h2
                          class="text-h2 font-weight-bold"
                          :class="item.color"
                        >
                          {{ item.price }}
                        </h2>
                        <span class="align-self-end">/Month</span>
                      </div>

                      <h2 class="text-h5 mt-4 mb-1">
                        {{ item.title }}
                      </h2>
                      <h4 class="subtitle-1">
                        {{ item.desc }}
                      </h4>
                    </div>

                    <v-divider class="my-10" />

                    <div>
                      <div
                        class="d-flex align-center subtitle-1 my-1"
                        v-for="(d, k) in item.data"
                        :key="k"
                      >
                        <v-icon left :class="item.color">mdi-check</v-icon>
                        {{ d }}
                      </div>
                    </div>

                    <v-card-actions class="mt-12">
                      <v-btn
                        large
                        outlined
                        :class="item.color"
                        class="text-capitalize"
                      >
                        Start for {{ item.title }}
                        <v-icon right>mdi-arrow-right</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <div class="text-center">
              <h3 class="mt-12 text-h4 font-weight-regular">
                Still not convinced? Start with a 3-day FREE trial!
              </h3>
              <h4 class="my-6 text-h6 font-weight-regular">
                You will get full access to your Dashboard with all the features
                for 3 days.
              </h4>

              <v-btn large class="text-capitalize mt-4" light color="secondary">
                Start a free demo
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    price: [
      {
        title: "Free trial",
        desc:
          "If you're new to SEO or just need the basics, this plan is a great way.",
        price: 0,
        color: "",
        data: [
          "Users 1",
          "Full access to design tool",
          "Publish with Shock ® label",
          "Sub-domain publish",
          "1 User",
          "Public Share & Comments",
          "Chat Support",
        ],
      },
      {
        title: "Standard",
        desc: "Ample limits plus full access to keyword research tools.",
        price: 199,
        color: "primary--text",
        data: [
          "Users 3",
          "All features on FREE plan",
          "Hide Shock ® label",
          "All apps",
          "Connect to custom domain",
          "3rd party service integrations",
          "Unlimited editable exports",
        ],
      },
      {
        title: "Premium",
        desc: "The ideal plan for businesses and agencies.",
        price: 299,
        color: "secondary--text",
        data: [
          "Users 5",
          "All features on BASIC plan",
          "Content Management System",
          "Premium Analytics",
          "Version Control",
          "Single Sign-On (SSO)",
          "Co-conception program",
        ],
      },
    ],
  }),
};
</script>
