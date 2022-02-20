<template>
  <router-view />
</template>
<script>
import { defineComponent, onMounted, reactive, computed } from "vue";
import { Plugins } from "@capacitor/core";
const { App, BackgroundTask } = Plugins;
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const state = reactive({
      interval: null,
    });

    const number = computed(() => {
      return store.state.test.i;
    });

    onMounted(() => {
      console.log("App mounted - configuring");

      App.addListener("appStateChange", (appState) => {
        console.log("AppState ", appState);
        if (!appState.isActive) {
          if (state.interval) {
            clearInterval(state.interval);
          }

          state.interval = setInterval(() => {
            const newValue = number.value + 1;
            console.log("tick");
            store.dispatch("test/update", newValue);
          }, 1000);
        } else {
          if (state.interval) {
            clearInterval(state.interval);
            state.interval = null;
          }
        }
      });

      console.log("App mounted initialization finished");
    });
  },
});
</script>
