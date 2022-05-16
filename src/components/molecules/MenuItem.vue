<style lang="less" scoped>
  .menu-item {
    display: block;
    padding: 16px 8px;
    text-decoration: none;
    color: inherit;
  }
</style>

<template>
  <nuxt-link
    class="menu-item"
    :to="to"
    @click="onClick"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    to: {
      type: String as PropType<string>,
      required: false,
      default: null
    }
  },
  setup (_, { emit }) {
    const onClick = () => {
      emit('click');
    };
    return {
      onClick
    };
  }
});
</script>
