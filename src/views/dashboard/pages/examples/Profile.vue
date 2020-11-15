<template>
  <div>
    <v-img
      src="https://cdn.pixabay.com/photo/2020/10/23/09/02/mountain-5678172_1280.jpg"
      :aspect-ratio="16 / 9"
      dark
      gradient="to top right, rgba(45, 49, 91,.8), rgba(45, 49, 91,.8)"
      class="px-8"
      height="500px"
    >
      <div class="fill-height">
        <v-row align="center" class="fill-height">
          <v-col cols="12" md="10" lg="6">
            <h2 class="text-h3 font-weight-bold">Hello Yan</h2>

            <p class="text-h6 my-6">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </p>

            <v-btn class="text-capitalize primary--text" light>
              Edit Profile
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-img>

    <div class="px-8">
      <v-row>
        <v-col cols="12" lg="8">
          <v-row>
            <v-col cols="12" md="6" v-for="(item, i) in profileCard" :key="i">
              <v-card class="pa-6" outlined :color="item.color" dark>
                <div>
                  <div class="d-flex justify-space-between align-center">
                    <div>
                      <div class="subtitle-2">
                        {{ item.label }}
                      </div>
                      <div class="text-h6 mt-1">
                        {{ item.title }}
                      </div>
                    </div>

                    <div>
                      <v-btn x-large class="white" icon>
                        <v-icon x-large class="black--text">{{
                          item.icon
                        }}</v-icon>
                      </v-btn>
                    </div>
                  </div>

                  <div class="subtitle-2 d-flex align-center mt-5">
                    <v-icon small>mdi-arrow-up </v-icon>
                    <div>
                      <span>{{ item.number }}</span>

                      <span class="ml-2 ">
                        {{ item.desc }}
                      </span>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card class="pa-6" outlined>
                <div class="d-flex align-center justify-space-between">
                  <div class="text-h6">
                    Edit profile
                  </div>

                  <v-btn small color="primary">Settings</v-btn>
                </div>

                <div v-for="(editItem, k) in edit" :key="k">
                  <v-divider class="my-4" />

                  <div class="text--secondary mb-4 subtitle-2 font-weight-bold">
                    {{ editItem.title }}
                  </div>

                  <v-form>
                    <v-row>
                      <v-col
                        cols="12"
                        md="6"
                        v-for="(item, i) in editItem.form"
                        :key="i"
                      >
                        <v-text-field
                          v-model="item.model"
                          :label="item.label"
                          required
                          outlined
                          flat
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" lg="4">
          <v-card>
            <v-img
              src="https://cdn.pixabay.com/photo/2020/10/23/18/17/fruits-5679562_1280.jpg"
              max-height="300"
              gradient="to top right, rgba(45, 49, 91,.4), rgba(45, 49, 91,.4)"
              :aspect-ratio="16 / 9"
            ></v-img>

            <div class="px-6">
              <div
                class="d-flex align-end justify-space-between"
                style="margin-top: -50px"
              >
                <div>
                  <v-btn color="accent" small class="text-capitalize">
                    Connect
                  </v-btn>
                </div>

                <div>
                  <v-card class="rounded-circle" hover>
                    <v-avatar size="128">
                      <v-img
                        src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
                      ></v-img>
                    </v-avatar>
                  </v-card>
                </div>

                <div>
                  <v-btn color="primary" small class="text-capitalize">
                    Messages
                  </v-btn>
                </div>
              </div>

              <div class="py-12">
                <div
                  class="d-flex align-center justify-space-around text-center"
                >
                  <div v-for="(item, i) in profileNum" :key="i">
                    <div class="font-weight-bold subtitle-1">
                      {{ item.num }}
                    </div>

                    <div class="text--secondary">{{ item.desc }}</div>
                  </div>
                </div>

                <div class="text-center mt-6">
                  <div class="font-weight-bold subtitle-1">
                    Yan Lee,
                    <span class="text--secondary">
                      22
                    </span>
                  </div>

                  <div class="text--secondary">
                    Bucharest, Romania
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    edit: [
      {
        title: "USER INFORMATION",
        form: [
          { model: "Yan", label: "First Name" },
          { model: "Lee", label: "Last name" },
          { model: "agdholo@outlook.com", label: "Email" },
          { model: "+1 (234) 567890", label: "Phone Number" },
        ],
      },
      {
        title: "CONTACT INFORMATION",
        form: [
          { model: "USA, NZ, Bl 1, Sc 1, Ap 09", label: "Address" },
          { model: "New York", label: "City" },
          { model: "United States", label: "Country" },
          { model: "123456", label: "Postal code" },
        ],
      },
    ],

    profileCard: [
      {
        label: "TOTAL TRAFFIC",
        title: "350,897",
        number: "6.68%",
        desc: "Since last month",
        icon: "mdi-chart-bar",
        color: "primary",
      },
      {
        label: "NEW USERS",
        title: "4,456",
        number: "6.68%",
        desc: "Since last month",
        icon: "mdi-rocket",
        color: "error",
      },
    ],

    profileNum: [
      {
        num: "63",
        desc: "Friends",
      },
      {
        num: "10",
        desc: "Photos",
      },
      {
        num: "89",
        desc: "Comments",
      },
    ],
  }),
};
</script>
