<template>
  <div>
    <v-sheet color="primary" tile dark>
      <v-container>
        <v-row justify="center" class="text-center my-12 py-12">
          <v-col cols="12">
            <h1 class="text-h2 font-weight-bold" style="line-height: 1.3;">
              Got a question?
            </h1>

            <h3 class="my-6 text-h6 font-weight-regular">
              Your feedback is valuable to us. If you have problems with your
              license, want to request a feature, or report a bug, we’re more
              than happy to help
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet>
      <v-container>
        <v-row justify="center" style="margin-top: -100px">
          <v-col cols="12">
            <v-card class="py-12 px-6" outlined>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6" v-for="(item, i) in form" :key="i">
                      <v-text-field
                        v-model="item.model"
                        :label="item.label"
                        required
                        outlined
                        flat
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        label="How can we help you? *"
                        required
                        outlined
                        flat
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <div class="text-center">
                    <v-btn class="text-capitalize" large color="secondary">
                      <v-icon left>mdi-airplane-takeoff</v-icon>
                      Send Message
                    </v-btn>
                  </div>
                </v-container>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile class="py-12">
      <v-container>
        <div class="py-12 text-center">
          <v-row justify="space-between">
            <v-col
              cols="12"
              md="6"
              lg="3"
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

              <div>
                <h6 class="text-body-1 primary--text">
                  {{ item.contact }}
                </h6>
              </div>
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
    form: [
      { model: "Yan", label: "First Name *" },
      { model: "Lee", label: "Last name *" },
      { model: "agdholo@outlook.com", label: "Email *" },
      { model: "+1 (234) 567890", label: "Phone Number *" },
    ],
    frontFeature: [
      {
        text:
          "Email us for general queries, including marketing and partnership opportunities.",
        icon: "mdi-email",
        title: "Email us",
        contact: "agdholo@outlook.com",
      },
      {
        text:
          "Call us to speak to a member of our team.We are always happy to help you.",
        icon: "mdi-phone-in-talk-outline",
        title: "Call us",
        contact: "+1 (234) 567890",
      },
      {
        text:
          "Technical support for each product is given directly by the creators of Themesberg.",
        icon: "mdi-face-agent",
        title: "Support",
        contact: "Support Center →",
      },
    ],
  }),
};
</script>
