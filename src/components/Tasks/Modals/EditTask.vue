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

import ModalHeader from "components/Tasks/Modals/Shared/ModalHeader.vue";
import ModalTaskName from "components/Tasks/Modals/Shared/ModalTaskName.vue";
import ModalDueDate from "components/Tasks/Modals/Shared/ModalDueDate.vue";
import ModalDueTime from "components/Tasks/Modals/Shared/ModalDueTime.vue";
import ModalButtons from "components/Tasks/Modals/Shared/ModalButtons.vue";

export default {
  props: ["task", "id"],
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  },
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>

<style></style>
