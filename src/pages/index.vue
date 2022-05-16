<style lang="less" scoped>

</style>

<template>
  <div class="index">
    <el-button>
      asd
    </el-button>
    <bar-chart
      :chart-data="chart.chartDataSets"
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
  }
});
</script>
