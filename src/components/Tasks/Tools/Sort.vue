<template>
  <q-select
    emit-value
    map-options
    filled
    class="col q-ml-sm"
    v-model="sortBy"
    :options="options"
    label="Sort by"
    stack-label
  />
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      options: [
        {
          label: "Name",
          value: "name"
        },
        {
          label: "Date",
          value: "dueDate"
        }
      ]
    };
  },
  computed: {
      ...mapState('tasks', ['sort']),
      sortBy: {
          get(){
              return this.sort
          },
          set(){
              
          }
      }
  }
};
</script>

<style scopred>
.q-select {
  flex: 0 0 112px;
}
</style>
