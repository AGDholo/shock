<template>
  <div class="px-4">
    <v-sheet color="transparent">
      <v-row>
        <v-col cols="12" md="6" lg="3" v-for="(item, i) in stats" :key="i">
          <v-card class="py-6 px-10" outlined>
            <div>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="subtitle-2 text--secondary">
                    {{ item.label }}
                  </div>
                  <div class="text-h6 mt-1">
                    {{ item.title }}
                  </div>
                </div>

                <div>
                  <v-icon :color="item.color" x-large>{{ item.icon }}</v-icon>
                </div>
              </div>

              <div class="subtitle-2 d-flex align-center mt-5">
                <v-icon small color="success">mdi-arrow-up </v-icon>
                <div>
                  <span class="success--text">{{ item.number }}</span>

                  <span class="ml-2 text--secondary">
                    {{ item.desc }}
                  </span>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="6" xl="7">
          <v-card class="pa-10" outlined>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="subtitle-2">
                  OVERVIEW
                </div>

                <div class="text-h6">
                  Sales value
                </div>
              </div>

              <div>
                <v-btn color="primary" small>Month</v-btn>
              </div>
            </div>

            <apexchart
              v-if="chart"
              width="100%"
              height="500"
              class="mt-4"
              type="line"
              :options="optionsLine"
              :series="series"
              id="vuechart-line"
            ></apexchart>
          </v-card>
        </v-col>

        <v-col cols="12" lg="6" xl="5">
          <v-card class="pa-10 fill-height" outlined>
            <div>
              <div class="subtitle-2">
                PERFORMANCE
              </div>

              <div class="text-h6">
                Total orders
              </div>
            </div>

            <apexchart
              v-if="chart"
              width="100%"
              height="500"
              class="mt-4"
              type="bar"
              :options="optionsBar"
              :series="series"
            ></apexchart>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="6" xl="7">
          <v-card outlined class="pa-10">
            <div class="d-flex align-center justify-space-between">
              <div class="text-h6">
                Page visits
              </div>

              <v-btn small color="primary">See All</v-btn>
            </div>

            <v-simple-table class="mt-4">
              <template v-slot:default>
                <thead class="primary ">
                  <tr>
                    <th class="text-left white--text">
                      PAGE NAME
                    </th>
                    <th class="text-left white--text">
                      VISITORS
                    </th>
                    <th class="text-left white--text">
                      UNIQUE USERS
                    </th>
                    <th class="text-left white--text">
                      BOUNCE RATE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.visitors }}</td>
                    <td>{{ item.users }}</td>
                    <td>
                      <v-icon left small :color="item.color">
                        {{ item.icon }}
                      </v-icon>
                      {{ item.rate }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>

        <v-col cols="12" lg="6" xl="5">
          <v-card outlined class="pa-10">
            <div class="d-flex align-center justify-space-between">
              <div class="text-h6">
                Social traffic
              </div>

              <v-btn small color="primary">See All</v-btn>
            </div>

            <v-simple-table class="mt-4">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      REFERRAL
                    </th>
                    <th class="text-left">
                      VISITORS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in traffics" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.visitors }}</td>
                    <td class="d-flex align-center">
                      <div class="mr-2">
                        {{ item.rate }}
                      </div>

                      <v-progress-linear
                        :color="item.color"
                        v-model="item.rate"
                      />
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    chart: false,
    stats: [
      {
        label: "TOTAL TRAFFIC",
        title: "350,897",
        number: "6.68%",
        desc: "Since last month",
        icon: "mdi-star",
        color: "error",
      },
      {
        label: "NEW USERS",
        title: "4,456",
        number: "6.68%",
        desc: "Since last month",
        icon: "mdi-chart-arc",
        color: "warning",
      },
      {
        label: "SALES",
        title: "645",
        number: "6.68%",
        desc: "Since last month",
        icon: "mdi-baby-carriage",
        color: "accent",
      },
      {
        label: "PERFORMANCE",
        title: "71.45%",
        number: "6.68%",
        desc: "Since last month",
        icon: "mdi-fan-chevron-up",
        color: "primary",
      },
    ],
    optionsLine: {
      theme: {
        mode: "light",
        palette: "palette2",
      },

      stroke: {
        curve: "smooth",
      },
      chart: {
        id: "vuechart-line",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 3,
          blur: 10,
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    optionsBar: {
      theme: {
        mode: "light",
        palette: "palette7",
      },

      stroke: {
        curve: "smooth",
      },
      chart: {
        id: "vuechart-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    desserts: [
      {
        name: "/dashboard/",
        visitors: "4,660",
        users: "440",
        rate: "40%",
        icon: "mdi-arrow-up",
        color: "success",
      },
      {
        name: "/dashboard/sign-up",
        visitors: "3,260",
        users: "120",
        rate: "21%",
        icon: "mdi-arrow-down",
        color: "error",
      },
      {
        name: "/dashboard/map",
        visitors: "5,745",
        users: "321",
        rate: "63%",
        icon: "mdi-arrow-up",
        color: "success",
      },
      {
        name: "/dashboard/table",
        visitors: "1,564",
        users: "56",
        rate: "65%",
        icon: "mdi-arrow-down",
        color: "error",
      },
    ],
    traffics: [
      {
        name: "Facebook",
        visitors: "1,230",
        rate: "40",
        color: "success",
      },
      {
        name: "Google",
        visitors: "4,350",
        rate: "12",
        color: "primary",
      },
      {
        name: "Instagram",
        visitors: "6,687",
        rate: "65",
        color: "secondary",
      },
      {
        name: "twitter",
        visitors: "5,106",
        rate: "71",
        color: "accent",
      },
    ],
  }),
  mounted() {
    this.chart = true;
  },
};
</script>
