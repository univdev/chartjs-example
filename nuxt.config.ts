import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: '%s :: ChartJS',
    title: '그래프'
  },
  srcDir: './src',
  modules: [
    '@pinia/nuxt'
  ],
  components: [
    { path: '@/components/atoms', prefix: 'Atom' },
    { path: '@/components/molecules', prefix: 'Molecule' },
    { path: '@/components/organisms', prefix: 'Organism' },
    { path: '@/components/templates', prefix: 'Layout' }
  ]
});
