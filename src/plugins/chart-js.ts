import { Chart, registerables } from 'chart.js';
import { BarChart } from 'vue-chart-3';

Chart.register(...registerables);

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.component('BarChart', BarChart);
});
