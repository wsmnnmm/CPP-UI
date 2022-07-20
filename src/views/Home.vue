<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>cppUI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use></svg
      ><svg class="icon">
        <use xlink:href="#icon-typescript"></use></svg
      ><svg class="icon">
        <use xlink:href="#icon-dengpao"></use>
      </svg>
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
$green: #02bcb0;
$color: #009794;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 16px;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      $h: 28px;
      border-radius: $h;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>