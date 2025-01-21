import { createRouter, createWebHistory } from "vue-router";
import { markRaw } from 'vue'
import Home from "@/views/home.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: markRaw(Home),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import("@/views/help.vue"),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import("@/views/auth.vue"),
        meta: {
            layout: 'auth'
        }
    }
]
console.log(import.meta.env.VITE_BASE_URL);

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})
export default router