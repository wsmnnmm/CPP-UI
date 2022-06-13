<template>
  <button class="cpp-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="cpp-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`cpp-theme-${theme}`]: theme,
        [`cpp-size-${size}`]: size,
        [`cpp-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: #ff4d4f;
$radius: 4px;
$grey: grey;
.cpp-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.cpp-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.cpp-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.cpp-theme-button,
  &.cpp-theme-link,
  &.cpp-theme-text {
    &.cpp-size-big {
      font-size: 24px;
      height: 48px;
      line-height: 48px;
      padding: 0 18px;
    }
    &.cpp-size-small {
      font-size: 8px;
      height: 16px;
      line-height: 16px;
      padding: 0 6px;
    }
  }
  &.cpp-theme-button {
    &.cpp-level-main {
      color: white;
      background: $blue;
      &:hover,
      &:focus {
        background: lighten($blue, 5%);
      }
    }
    &.cpp-level-danger {
      border-color: $red;
      color: white;
      background: $red;
      &:hover,
      &:focus {
        background: lighten($red, 5%);
      }
    }
  }
  &.cpp-theme-link {
    &.cpp-level-main {
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.cpp-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: lighten($red, 5%);
      }
    }
  }
  &.cpp-theme-text {
    &.cpp-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.cpp-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cpp-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.cpp-theme-link,
  &.cpp-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .cpp-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-width: 2px;
    border-style: solid;
    animation: cpp-spin 1s infinite linear;
  }
}
@keyframes cpp-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>