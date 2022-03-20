import { createApp, h } from "vue"
import FingerPrint from './index'

const app = createApp({
    render() {
        return h(FingerPrint, {
            onGpuFingerprint: (data: any) => { console.log(data) }
        })
    }
})

app.mount('#root')