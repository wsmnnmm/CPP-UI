<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <div>内容:你好</div>
    </template>
  </Dialog>
  <Button @click="toggle">toggle</Button>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>
<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好哇哈哈哈",
        closeOnClickOverlay: false,
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("ok");
        },
      });
    };
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
};
</script>