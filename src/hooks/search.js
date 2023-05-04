import { useRouter, useRoute } from 'vue-router'
import { computed, reactive, watch } from 'vue'

export const useGoSearch = () => {
    const router = useRouter()
    const route = useRoute()
    const goSearch = (query, keyword = '') => {
        if (keyword) {
            router.replace({
                path: `/search/${keyword}`,
                query
            })
        } else {
            router.replace({
                path: `/search`,
                query
            })
        }

    }
    return {
        goSearch, route
    }
}

export const useSearchState = (originSearchParams) => {

    const searchParams = reactive({ ...originSearchParams })

    const finalParmas = computed(() => {
        const obj = searchParams
        const arr = Object.keys(obj).filter(key => obj[key]).map(key => [key, obj[key]])
        arr.push(['props', obj.props])
        return Object.fromEntries(arr)
    })
    const route = useRoute()
    watch([() => route.query, () => route.params], () => {
        Object.assign(searchParams, originSearchParams, route.query, route.params)
    }, { immediate: true })

    return {
        searchParams, finalParmas
    }

}
