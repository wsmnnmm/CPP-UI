<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <Button>你好呀</Button>
  <Button theme="button">你好呀</Button>
  <Button theme="link">你好呀</Button>
  <Button theme="text">你好呀</Button>
  <h1>示例2</h1>
  <Button size="big">大大大</Button>
  <Button>普普通</Button>
  <Button size="small">小小小</Button>
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