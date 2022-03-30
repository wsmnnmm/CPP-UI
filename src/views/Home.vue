<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>cppUI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scope>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 0 8px;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      border-radius: $h/2;
      line-height: $h;
      padding: 0 8px;
    }
  }
}
</style>