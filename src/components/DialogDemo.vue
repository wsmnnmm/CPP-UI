<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <div>你好</div>
    <dir>hi</dir></Dialog
  >
  <Button @click="toggle">toggle</Button>
</template>
<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
      return true;
    };
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>