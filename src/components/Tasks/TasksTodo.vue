<template>
  <div >
    <ListHeader bgColor="bg-orange-4">Todo</ListHeader>
    <q-list  bordered separator>
      <Task
        v-for="(task, key) in tasksTodo"
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
  props: ["tasksTodo"]
};
</script>

<style>

</style>
