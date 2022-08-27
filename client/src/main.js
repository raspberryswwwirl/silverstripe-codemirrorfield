import { defineCustomElement } from 'vue'
import CodeMirrorField from '@/components/CodeMirrorField.ce.vue'
import '@/styles/main.scss';

/**
 * @link https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue
 */

export function register() {
    const CodeMirrorFieldElement = defineCustomElement(CodeMirrorField)
    customElements.define('vue-codemirrorfield',CodeMirrorFieldElement)
}

register();
