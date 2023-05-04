import { ref, computed, watch } from 'vue';

export const useSendState = (sec) => {
    const isSending = ref(false)

    watch(isSending, (value) => {
        let timer;
        if (value) {
            timer = setInterval(() => {
                count.value--
            }, 1000)
        } else {
            count.value = sec
            clearInterval(timer)
        }
    })

    const count = ref(sec)
    const message = computed(() => isSending.value ? `重新发送(${count.value})` : '获取验证码')

    const changeSendState = () => {
        isSending.value = true
        setTimeout(() => {
            isSending.value = false
        }, count.value * 1000)
    }

    return {
        isSending, message, changeSendState
    }

}