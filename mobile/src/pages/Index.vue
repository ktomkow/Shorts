<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <q-btn color="primary" label="notify" @click="showNotify" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const $q = useQuasar();
    const showNotify = () => {
      $q.notify("Message");
    };

    return { showNotify };
  },
});
</script>
