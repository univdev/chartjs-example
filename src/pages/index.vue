<style lang="less" scoped>

</style>

<template>
  <div class="index">
    <bar-chart
      :chart-data="chart.chartDataSets"
      :height="400"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChart } from '@/store/chart';

export default defineComponent({
  name: 'HomePage',
  setup () {
    const chart = useChart();
    return { chart };
  },
  head: {
    title: '바'
  }
});
</script>
