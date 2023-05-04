import { defineStore } from 'pinia'
import { v4 as createUUID } from 'uuid'
export const useUserStore = defineStore('userInfoStore', {
    state: () => {
        return {
            uuid: ''
        }
    },
    actions: {
        setUUID() {
            this.uuid = localStorage.getItem('uuid') || createUUID()
            localStorage.setItem('uuid', this.uuid)
        }
    }
})