<template>
  <q-card>
    <ModalHeader>Edit Task</ModalHeader>

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
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    },
  },
  created() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
   mixins: [mixinAddEditTask]
};
</script>

<style></style>
