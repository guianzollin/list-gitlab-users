<template>
  <v-container>
    <v-form
      ref="form"
    >
      <v-row>
        <v-col
          cols="12"
        >
          <div
            class="text-h5"
          >
            Create Project
          </div>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Project name"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="details"
            label="Project details"
            rows="3"
          ></v-textarea>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-menu
            v-model="startDateMenu"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                label="Start date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="startDate"
              @input="startDateMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-menu
            v-model="endDateMenu"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                label="End date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="endDate"
              @input="endDateMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
          cols="12"
        >
          <UserField
            v-model="users"
            :rules="usersRules"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <v-btn
            large
            block
            color="primary"
            @click="create"
          >
            submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>

import UserField from '@/components/UserField.vue'

export default {

  name: 'CreateProject',

  components: {
    UserField
  },

  data: () => ({
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    details: '',
    startDateMenu: false,
    startDate: null,
    endDateMenu: false,
    endDate: null,
    users: [],
    usersRules: [
      v => Object.keys(v).length !== 0 || 'At least one user is required'
    ],
  }),

  methods: {

    create () {
      if (this.$refs.form.validate()) {
        const project = {
          name: this.name,
          details: this.details,
          startDate: this.startDate,
          endDate: this.endDate,
          users: this.users
        }
        this.$store.dispatch('createProject', project)
        this.$router.push('/projects')
      }
    }
  }

}
</script>
