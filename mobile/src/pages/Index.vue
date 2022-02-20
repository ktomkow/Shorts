<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <div>{{ i }}</div>
    <q-btn color="primary" label="notify" @click="showNotify" />
  </q-page>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const store = useStore();
    const $q = useQuasar();
    const showNotify = () => {
      $q.notify("Message");
    };

    const i = computed(() => {
      return store.state.test.i;
    });

    return { showNotify, i };
  },
});
</script>
