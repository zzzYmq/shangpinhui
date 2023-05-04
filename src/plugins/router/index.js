import { createRouter, createWebHashHistory } from 'vue-router'
import HomeRoutes from './home'
import SearchRoutes from './search'
import LoginRoutes from './login'
import DetailRoutes from './detail'
import ShopCartRoutes from './cart'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...HomeRoutes,
        ...SearchRoutes,
        ...LoginRoutes,
        ...DetailRoutes,
        ...ShopCartRoutes
    ],
    scrollBehavior(to, from, ssavedPosition) {
        return { top: 0 }
    }
})

export default router

