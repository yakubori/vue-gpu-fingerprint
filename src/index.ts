import { h, defineComponent } from "vue"

export default defineComponent({
    emits: ['GpuFingerprint'],
    methods: {
        getFingerprint() {
            let renderer, vendor;
            const context = this.$el.getContext('webgl');
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
        },
        raiseFingerprint() {
            const fp = this.getFingerprint();
            this.$emit('GpuFingerprint', fp);
        }
    },
    mounted() {
        this.raiseFingerprint();
    },
    render() {
        return h('canvas', {
            width: 1,
            height: 1,
            style: "display: none; width: 1px; height: 1px;"
        })
    },
})