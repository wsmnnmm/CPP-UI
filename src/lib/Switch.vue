<template>
  <div>
    <button><span></span></button>
  </div>
</template>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: blue;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  background: white;
  height: $h2;
  width: $h2;
  border-radius: $h/2;
}
</style>