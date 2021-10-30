<template>
  <div class="user-field">
    <DataSourceAutocompleteField
      name="userField"
      title="Users"
      item-text="node.name"
      :dataSource="userDataSource"
      :rules="rules"
      multiple
      v-model="users"
    />
  </div>
</template>

<script>
import DataSourceAutocompleteField from '@/components/DataSourceAutocomplete.vue'
import UserDataSource from '@/classes/UserDataSource'

let userDataSource = new UserDataSource();

export default {

  name: 'UserField',

  components: {
    DataSourceAutocompleteField
  },

  props: {
    rules: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Object, Array],
      default: null
    },
  },

  data: () => ({
    userDataSource: userDataSource,
  }),

  computed: {
    users: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },

}
</script>
