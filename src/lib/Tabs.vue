<template>
  <div class="cpp-tabs">
    <div class="cpp-tabs-nav" ref="container">
      <div
        class="cpp-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="cpp-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="cpp-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "../lib/Tab.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const defaults = context.slots.default();
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          const { left: left1 } = container.value.getBoundingClientRect();
          const { left: left2 } = selectedItem.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + "px";
        },
        {
          flush: "post",
        }
      );
    });
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      current,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.cpp-tabs {
  &-nav {
    display: flex;
    position: relative;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 300ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>