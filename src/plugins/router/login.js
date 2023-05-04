export default [
    {
        path: "/",
        component: () => import("@/pages/LogReg/LogRge.vue"),
        children: [
            {
                path: "/login",
                component: () => import('@/pages/LogReg/Login/Login.vue')
            },
            {
                path: '/register',
                component: () => import('@/pages/LogReg/Regsiter/Regsiter.vue')
            }
        ]
    }
]




