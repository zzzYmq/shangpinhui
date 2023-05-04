import { ref, computed } from 'vue'
export const useSwiper = (length, width) => {
    const currentIndex = ref(0)

    const swiperStyle = computed(() => {
        return {
            width: `${length * width + 10}px`,
            transform: `translateX(${-currentIndex.value * width}px)`,
            transition: 'all .4s'
        }
    })
    const slideStyle = computed(() => {
        return {
            width: `${width}px`
        }
    })

    let timer;

    const startPlay = () => {
        timer = setInterval(() => {
            currentIndex.value++;
            currentIndex.value %= length
        }, 1500)
    }

    const stopPlay = () => {
        clearInterval(timer)
    }

    return {
        currentIndex, swiperStyle, slideStyle, startPlay, stopPlay
    }
}