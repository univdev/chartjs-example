import { Chart, registerables } from 'chart.js';
import { BarChart, LineChart, RadarChart } from 'vue-chart-3';

Chart.register(...registerables);

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp
    .component('BarChart', BarChart)
    .component('LineChart', LineChart)
    .component('RadarChart', RadarChart);
});
