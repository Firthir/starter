import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import VueMeta from 'vue-meta';
// import 'splitting/dist/splitting.css';
// import 'splitting/dist/splitting-cells.css';

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
