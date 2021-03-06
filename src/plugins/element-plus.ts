import ElementPlus from 'element-plus/dist/index.full';
import locale from 'element-plus/lib/locale/lang/ko';
import 'element-plus/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale
  });
});
