<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-blue-grey-10 ">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          qTodo
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />
        <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          exact
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      bordered
      content-class="bg-grey-2  "
    >
      <q-list>
        <q-item-label header>Navigation </q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          @click="quitApp"
          class="absolute-bottom"
          v-if="$q.platform.is.electron"
        >
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Quit</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      // leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings"
        }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    quitApp() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really quit?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          if (this.$q.platform.is.electron) {
            require("electron").ipcRenderer.send("quit-app");
          }
        });
    }
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    // color: black !important;
    font-weight: 500;
    background: #dddddd;
  }
}

.platform-ios {
  .q-header {
    padding-top: constant(safe-area-inset-top); // for iOS 11.0
    padding-top: env(safe-area-inset-top); // for iOS 11.2 +
  }
  .q-footer {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
