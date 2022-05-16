<style lang="less" scoped>

</style>

<template>
  <div class="index">
    <line-chart
      :chart-data="chart.chartDataSets"
      :height="400"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChart } from '@/store/chart';

export default defineComponent({
  name: 'LineChartPage',
  setup () {
    const chart = useChart();
    return { chart };
  },
  head: {
    title: '라인'
  }
});
</script>
