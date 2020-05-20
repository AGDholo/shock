import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#0648b3",
        secondary: "#ee5050",
      },
      dark: {
        primary: "#0000",
      },
    },
  },
});
