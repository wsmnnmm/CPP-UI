<template>
  <button class="cpp-switch" @click="toggle" :class="{ 'cpp-checked': value }">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss" >
$h: 22px;
$h2: $h - 4px;
.cpp-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h / 2);
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    background: white;
    height: $h2;
    width: $h2;
    border-radius: calc($h / 2);
    transition: all 250ms;
  }
  &.cpp-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.cpp-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>