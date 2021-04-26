<template>

  <q-item
    class="text-grey-7"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-white' : 'bg-grey-2  text-grey-5'"
    clickable
    v-touch-hold:1000.mouse="showEditTaskModal"
  >
    <q-item-section side top>
      <q-checkbox
        v-model="task.completed"
        keep-color
        
        color="grey-7"
        size="xs"
        class="no-pointer-events rounded-checkbox "
      />
    </q-item-section>

    <q-item-section >
      <q-item-label 
        :class="{ 'text-strike': task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon size="18px" name="event" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            {{ task.dueTime }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTaskModal"
          flat
          round
          dense
          icon="edit"
        />
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          icon="delete"
        />
      </div>
    </q-item-section>
    <q-dialog
      v-model="showEditTask"
      transition-show="fade"
      transition-hide="fade"
    >
      <EditTask :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { date } from 'quasar'
const { formatDate } = date
import EditTask from "components/Tasks/Modals/EditTask.vue";


export default {
  props: ["task", "id"],
  components: {
    EditTask
  },
  computed: {
    ...mapState('tasks', ['search'])
  },
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    showEditTaskModal(){
      this.showEditTask = true
    },
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          cancel: true,
          persistent: true,
          transitionShow: "fade",
          transitionHide: "fade"
        })
        .onOk(() => {
          console.log(" OK");
          this.deleteTask(id);
        });
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'D. MMM YYYY')
    },
    searchHighlight(value, search) {
      if(search) {
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-yellow-6">' + match  +'</span>'
        } )
      }
      return value;
    }

  }
};
</script>

<style >
/* .q-checkbox__bg {
  border-radius: 10px;
} */
.rounded-checkbox .q-checkbox__bg {
  border-radius: 10px;

}
</style>



