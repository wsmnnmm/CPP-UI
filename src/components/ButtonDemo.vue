<template>
  <div>Button 示例</div>
  <h1>示例展示</h1>
  <Button>你好呀</Button>
  <Button theme="button">你好呀</Button>
  <Button theme="link">你好呀</Button>
  <Button theme="text">你好呀</Button>
</template>
<script lang = "ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>