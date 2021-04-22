<template>
  <q-page class="q-pa-md  ">
    <q-list v-if="Object.keys(tasks).length" bordered separator>
      <Task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" />
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog
      v-model="showAddTask"
      transition-show="fade"
      transition-hide="fade"
    >
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "components/Tasks/Task";
import AddTask from "components/Tasks/Modals/AddTask";

export default {
  components: {
    Task,
    AddTask
  },
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])

    // tasks() {
    //   return this.$store.getters["tasks/tasks"];
    // }
  }
};
</script>

<style scoped=""></style>
