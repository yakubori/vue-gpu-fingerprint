# vue-gpu-fingerprint

Get a browser's fingerprint (vendor and hardware) data from a Vue component using WebGL
and the GPU. Some basic browser data is included as well.

## Stats

![Current NPM Version](https://flat.badgen.net/npm/v/vue-gpu-fingerprint)
![Current NPM Downloads](https://flat.badgen.net/npm/dt/vue-gpu-fingerprint)
![License](https://flat.badgen.net/npm/license/vue-gpu-fingerprint)
![Types](https://flat.badgen.net/npm/types/vue-gpu-fingerprint)

## Purpose

I needed a decent way (component-wise) to gather some device data to include in a JWT. The device data is very basic,
doesn't personally identify the user (obviously), and can likely be used for other purposes as well. It's just good to know!

# Install

## NPM

In your project's root directory...

```bash
npm install --save vue-gpu-fingerprint
```

## Git

### Cloning the project

```bash
git clone git@github.com:yakubori/vue-gpu-fingerprint.git
```

### Building

From the project root, install the depndencies, then run the build

```bash
npm install
```

```bash
npm run build
```

### Running the sample server

From the project root, install the depndencies, then run the sample server.

```bash
npm install
```

```bash
npm run dev
```

## Example Usage

Very simple. Just handle the `GpuFingerprint` event on the FingerPrint component (or whatever you want to call it).

The event-emit occurs when the FingerPrint component first mounts.

### Using TS

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

### Using JS

```javascript
import { createApp, h } from "vue"
import FingerPrint from 'vue-gpu-fingerprint'

const app = createApp({
    render() {
        return h(FingerPrint, {
            onGpuFingerprint: (data) => { console.log(data) }
        })
    }
})

app.mount('#root')
```

### Using in a SFC

```jsx
<FingerPrint @gpu-fingerprint="handleGpuFingerprint" />
```

## Contributing

I realize this is a simple module, but I'm totally open to others working on this. Feel free to create your own branch and submit a pull request.