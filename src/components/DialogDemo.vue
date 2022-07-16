<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Dialog :visible="x"></Dialog>
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
    return {
      x,
      toggle,
    };
  },
};
</script>