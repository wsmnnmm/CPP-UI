<template>
  <div>Button 示例</div>
  <h2>theme示例</h2>
  <Button>你好呀</Button>
  <Button theme="button">你好呀</Button>
  <Button theme="link">你好呀</Button>
  <Button theme="text">你好呀</Button>
  <h2>size示例</h2>
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
  <h2>level示例</h2>
  <dir>
    <Button level="main">主要按钮</Button>
    <Button level="normal">普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </dir>
  <dir>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通(默认)链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </dir>
  <dir>
    <Button theme="text" level="main">主要文本按钮</Button>
    <Button theme="text">普通(默认)文本按钮</Button>
    <Button theme="text" level="danger">危险文本按钮</Button>
  </dir>
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