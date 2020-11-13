<template>
  <div>
    <v-sheet color="primary" tile dark>
      <v-container>
        <v-row justify="center" class="text-center my-12 py-12">
          <v-col cols="12">
            <h1 class="text-h2 font-weight-bold" style="line-height: 1.3;">
              Who is Shock for?
            </h1>

            <h3 class="my-6 text-h6 font-weight-regular">
              Whether you’re a programmer, designer, freelancer or need Shock
              for a whole team our pricing just makes sense.
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile>
      <v-container>
        <v-row style="margin-top: -60px">
          <v-col
            cols="12"
            md="6"
            xl="4"
            v-for="(item, i) in [
              ...aboutCard.data,
              ...aboutCard.data,
              ...aboutCard.data,
            ]"
            :key="i"
          >
            <v-card outlined class="pa-6 fill-height">
              <v-card-title>
                <h2 class="text-h4 font-weight-bold">
                  {{ item.title }}
                </h2>
              </v-card-title>

              <v-card-text>
                <div class="subtitle-1">
                  {{ item.desc }}
                </div>

                <div
                  class="d-flex align-center my-2 subtitle-1"
                  v-for="(d, i) in item.details"
                  :key="i"
                >
                  <div>
                    <v-icon class="mr-2" color="success">
                      mdi-check-circle-outline
                    </v-icon>
                  </div>

                  <div>
                    {{ d.text }}
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12">
      <v-container>
        <div class="text-center">
          <h2 class="text-h2">
            Get started in 30 seconds
          </h2>

          <h4 class="text-h6 my-6">
            Even if you have the most loyal customers ever, they’ll still want
            to know how things are going and for new users how to start.
          </h4>
        </div>

        <div class="mt-12">
          <v-timeline>
            <v-timeline-item
              v-for="n in 4"
              :key="n"
              large
              color="#f4f6fc"
              fill-dot
            >
              <template v-slot:icon>
                <v-avatar>
                  {{ n }}
                </v-avatar>
              </template>
              <v-card outlined color="#f4f6fc">
                <v-card-title class="headline">
                  Create an account
                </v-card-title>
                <v-card-text>
                  Once you're approved, you can then explore our platform
                  functionalities and make your first test payment.
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet tile class="pb-12">
      <v-container>
        <v-divider class="my-12" />

        <v-row>
          <v-col cols="12" md="6" v-for="item in 4" :key="item">
            <Review />
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          <v-btn color="primary" large class="text-capitalize">
            <v-icon left>mdi-book</v-icon>
            See all stories
          </v-btn>
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
    aboutCard: {
      data: [
        {
          title: "Marketing",
          desc: "Reveal best strategies from the market and your competitors",
          details: [
            {
              text: "Uncover the best SEO and content strategies",
            },
            {
              text: "Build & grow your affiliate and media partnerships",
            },
            {
              text: "Enhance your display and paid search strategies",
            },
          ],
        },
      ],
    },
  }),
};
</script>
