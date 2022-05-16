<style lang="less" scoped>
  .navigation-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>

<template>
  <ul class="navigation-list">
    <li class="navigation-list__item">
      <molecule-menu-item
        to="/"
      >
        Bar Chart
      </molecule-menu-item>
      <molecule-menu-item
        to="/line"
      >
        Line Chart
      </molecule-menu-item>
      <molecule-menu-item
        to="/radar"
      >
        Radar Chart
      </molecule-menu-item>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>
