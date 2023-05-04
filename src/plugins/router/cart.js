export default [
    {
        path: '/success',
        component: () => import('@/pages/AddToCartSuccess/AddCartSuccess.vue')
    },
    {
        path: '/shopcart',
        component: () => import('@/pages/ShopCart/ShopCart.vue')
    }
]