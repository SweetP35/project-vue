import { createRouter, createWebHistory } from "vue-router";
import { markRaw } from 'vue'
import Home from "@/views/home.vue";
import store from "../store"


const routes = [
    {
        path: '/',
        name: 'Home',
        component: markRaw(Home),
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import("@/views/help.vue"),
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import("@/views/auth.vue"),
        meta: {
            layout: 'auth',
            auth: false
        }
    },
    {
        path: '/request/:id',
        name: 'Request',
        component: () => import("@/views/request.vue"),
        meta: {
            layout: 'main',
            auth: true
        }
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.auth
    if (requireAuth && store.getters['auth/isAuthenticated']) {
        next()
    } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
        next('/auth?message=auth')
    } else {
        next()
    }
})
export default router