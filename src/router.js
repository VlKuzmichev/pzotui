import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {layout: 'main'},
            component: () => import('./views/Home.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'empty'},
            component: () => import('./views/Login.vue')
        },
        {
            path: '/users',
            name: 'users',
            meta: {layout: 'main'},
            component: () => import('./views/Users.vue')
        }
    ]
});
