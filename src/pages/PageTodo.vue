<template>
  <q-page>
    <div class="q-pa-md absolute full-height full-width column">
      <template>
        <div class="row q-mb-lg">
          <Search />
          <Sort />
        </div>
        <p
          v-if="
            search &&
              !Object.keys(tasksTodo).length &&
              !Object.keys(tasksCompleted).length
          "
        >
          No search results
        </p>
        <q-scroll-area class="q-scroll-area-tasks">
          <NoTasks
            v-if="
              !Object.keys(tasksTodo).length &&
                !search &&
                !settings.showTasksInOneList
            "
          />
          <TasksTodo
            :tasksTodo="tasksTodo"
            v-if="Object.keys(tasksTodo).length"
          />
          <TasksCompleted
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
            class="q-mb-xl"
          />
        </q-scroll-area>
        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            @click="showAddTask = true"
            round
            color="primary"
            size="24px"
            icon="add"
            class="all-pointer-events"
          />
        </div>
      </template>
      <template>
        <span class="absolute-center">
          <q-spinner color="primary" size="5em" />
        </span>
      </template>
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
import Sort from "components/Tasks/Tools/Sort";

export default {
  components: {
    Task,
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    Search,
    Sort
  },
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search", "tasksDownloaded"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
