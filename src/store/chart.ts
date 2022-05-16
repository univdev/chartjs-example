import { defineStore } from 'pinia';

export const useChart = defineStore('chart', () => {
  const labels: string[] = reactive(['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre']);
  const datasets = [{
    data: [30, 40, 60, 70, 5],
    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED']
  }];
  const chartDataSets = computed(() => ({
    labels,
    datasets
  }));

  return {
    chartDataSets,
    datasets,
    labels
  };
});
