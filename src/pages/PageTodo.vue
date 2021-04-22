<template>
  <q-page class="q-pa-md  ">
    <div class="row q-mb-lg">
      <Search />
    </div> 

    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length ">No search results</p>

    <NoTasks v-if="!Object.keys(tasksTodo).length && !search" />

    <TasksTodo :tasksTodo="tasksTodo" v-if="Object.keys(tasksTodo).length " />
    <TasksCompleted
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
    />

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
import { mapGetters, mapState } from "vuex";
import Task from "components/Tasks/Task";
import AddTask from "components/Tasks/Modals/AddTask";
import TasksTodo from "components/Tasks/TasksTodo";
import TasksCompleted from "components/Tasks/TasksCompleted";
import NoTasks from "components/Tasks/NoTasks";
import Search from "components/Tasks/Tools/Search";

export default {
  components: {
    Task,
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    Search
  },
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState('tasks', ['search'])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
    console.log(this.$q.dark.mode) ;
  }
};
</script>

<style >

</style>
