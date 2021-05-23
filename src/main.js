import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './tailwind.css';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
