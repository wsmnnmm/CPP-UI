<template>
  <div class="cpp-dialog-overlay">遮障</div>
  <div class="cpp-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>ok</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>
<script>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>