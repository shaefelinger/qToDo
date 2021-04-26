<template>
  <q-card>
    <ModalHeader>Add Task</ModalHeader>

    <form @submit="submitForm">
      <q-card-section>
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <ModalDueDate
          :dueDate.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        />

        <ModalDueTime
          :dueTime.sync="taskToSubmit.dueTime"
          v-if="taskToSubmit.dueDate"
        />

        <ModalButtons />
      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
 
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
   
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
  },
  mixins: [mixinAddEditTask]
};
</script>

<style></style>
