<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <div
          class="text-h5"
        >
          Projects
        </div>
      </v-col>
      <v-col
        cols="12"
      >
        <div
          v-if="projects.length === 0"
        >
          There are no projects yet.
        </div>
        <v-card
          class="mb-3"
          outlined
          v-for="(project, index) in projects"
          :key="index"
        >
          <v-card-title>
            {{ project.name }}
          </v-card-title>
          <v-card-text>
            <v-chip-group
              column
            >
              <v-chip
                v-for="user in project.users"
                :key="user.node.username"
              >
                {{ user.node.name }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  name: 'Projects',

  data: () => ({
    projects: []
  }),

  mounted () {
    this.projects = this.$store.getters.getProjects
  }

}
</script>
