import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Animation from '@/views/Animation.vue';
import Card from '@/components/Card.vue';

Vue.use(VueRouter);

// const child = {
//     template: '<div class="foo">{{this.$route.params.child}}</div>',
// };

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/animation', component: Animation },

    {
        path: '/projects',
        component: Projects,
        children: [
            { path: '/', redirect: '/projects/1' },
            { path: ':child', component: Card },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
