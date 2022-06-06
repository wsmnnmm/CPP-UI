<template>
  <div>Button 示例</div>
  <h1>theme示例</h1>
  <Button>你好呀</Button>
  <Button theme="button">你好呀</Button>
  <Button theme="link">你好呀</Button>
  <Button theme="text">你好呀</Button>
  <h1>size示例</h1>
  <Button size="big">大大大</Button>
  <Button size="normal">normal</Button>
  <Button size="small">小小小</Button>
  <Button>默认值</Button>
  <br />
  <Button theme="link" size="big">大大大</Button>
  <Button theme="link" size="normal">normal</Button>
  <Button theme="link" size="small">小小小</Button>
  <Button theme="link">默认值</Button>
  <br />
  <Button theme="text" size="big">大大大</Button>
  <Button theme="text" size="normal">normal</Button>
  <Button theme="text" size="small">小小小</Button>
  <Button theme="text">默认值</Button>
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