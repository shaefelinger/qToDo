<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut absolute-top"
  >
    <div>
      <ListHeader v-if="!settings.showTasksInOneList" bgColor="bg-orange-4"
        >Todo</ListHeader
      >
      <q-list bordered separator>
        <Task
          v-for="(task, key) in tasksTodo"
          :key="key"
          :task="task"
          :id="key"
        />
      </q-list>
    </div>
  </transition>
</template>

<script>
import Task from "components/Tasks/Task";
import ListHeader from "components/Shared/ListHeader";
import { mapGetters } from "vuex";

export default {
  components: {
    Task,
    ListHeader
  },
  props: ["tasksTodo"],
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>

<style></style>
