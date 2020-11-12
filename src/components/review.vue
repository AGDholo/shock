<template>
  <div>
    <v-row>
      <v-col class="flex-grow-0">
        <v-avatar>
          <v-img src="https://i.pravatar.cc/48"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="flex-shrink-1">
        <v-card flat outlined>
          <v-card-text>
            <v-rating dense :value="10" color="secondary"> </v-rating>
            <p class="text-body-1 my-6">
              "We use Rocket mainly for its site explorer, and it’s immensely
              improved how we find link targets. We use it both for getting
              quick analysis of a site, as well as utilizing its extensive index
              when we want to dive deep."
            </p>

            <h4 class="text-h6">
              - James Curran
              <span class="text-body-1">
                Designer Apple
              </span>
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
