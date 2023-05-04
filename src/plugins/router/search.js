export default [
    {
        path: '/search/:keyword?',
        component: () => import('@/pages/Search/Search.vue'),
    },
]