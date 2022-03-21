import { defineComponent, h } from "vue"

export default defineComponent({
    emits: ['GpuFingerprint'],
    setup(_props: {}, ctx: any) {
        const getFingerprint = (canvas: any) => {
            let renderer, vendor;
            const context = canvas.el.getContext('webgl');
            if (context !== null) {
                const unpackData = context.getExtension("WEBGL_debug_renderer_info");
                if (unpackData != null) {
                    renderer = context.getParameter(unpackData.UNMASKED_RENDERER_WEBGL);
                    vendor = context.getParameter(unpackData.UNMASKED_VENDOR_WEBGL);
                }
                return {
                    vendor,
                    renderer,
                    browser: {
                        vendor: navigator.vendor,
                        userAgent: navigator.userAgent,
                        language: navigator.language,
                        hardwareConcurrency: navigator.hardwareConcurrency,
                    }
                }
            }
        };

        return () => h('canvas', {
            width: 1,
            height: 1,
            style: "display: none; width: 1px; height: 1px;",
            onVnodeMounted: (el) => {
                ctx.emit('GpuFingerprint', getFingerprint(el))
            },
        })
    },
})