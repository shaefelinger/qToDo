<template>
  <div class="q-mt-lg">
    <ListHeader bgColor="bg-green-4">Completed</ListHeader>

    <q-list bordered separator>
        <Task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        />
      </q-list>
  </div>
</template>

<script>
import Task from "components/Tasks/Task";
import ListHeader from "components/Shared/ListHeader";

export default {
  components: {
    Task,
    ListHeader
  },
  props: ["tasksCompleted"]
};
</script>

<style></style>
