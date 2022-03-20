# vue-gpu-fingerprint

Get a browser's fingerprint (vendor and hardware) data from a Vue component using WebGL and the GPU.

## Example Usage

Very simple. Just handle the `GpuFingerprint` event on the FingerPrint component (or whatever you want to call it).

The event-emit occurs when the FingerPrint component first mounts.

### Using TS/JS

```typescript
import { createApp, h } from "vue"
import FingerPrint from 'vue-gpu-fingerprint'

const app = createApp({
    render() {
        return h(FingerPrint, {
            onGpuFingerprint: (data: any) => { console.log(data) }
        })
    }
})

app.mount('#root')
```

### Using in a SFC

```vue
<FingerPrint @GpuFingerprint="handleGpuFingerprint" />
```