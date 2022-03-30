<template>
  <div>hi</div>
  导航栏 | <router-link to="/">Home</router-link> |
  <router-link to="/doc">Doc</router-link>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
