<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        color="grey darken-1"
      >
        <v-tab
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
        >
          {{ link.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="8"
            offset-sm="2"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-11"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {

  name: 'App',

  data: () => ({
    links: [
      {
        to: '/project/create',
        text: 'Create Project',
      },
      {
        to: '/projects',
        text: 'Projects',
      },
    ],
  }),

};
</script>
