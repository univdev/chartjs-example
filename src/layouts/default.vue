<style lang="less" scoped>
  .layout {
    position: relative;
    .main {
      position: relative;
      padding: 0;
      .navigation-list {
        position: sticky;
        left: 0;
        top: 0;
      }
    }
  }
</style>

<template>
  <el-container
    class="layout"
  >
    <el-main
      class="main"
    >
      <el-row>
        <el-col
          :lg="4"
          :md="6"
        >
          <organism-navigation-list
            class="navigation-list"
            to="/"
          />
        </el-col>
        <el-col
          :lg="20"
          :md="18"
        >
          <slot />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultLayout'
});
</script>
