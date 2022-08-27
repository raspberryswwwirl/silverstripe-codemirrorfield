<template>
    <slot></slot>
</template>

<script>
import { computed, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import { EditorView, basicSetup } from 'codemirror'

export default {
    name: "CodeMirrorField",
    props: {
        id: {
            type: String,
            default() {
                return null
            }
        },
        title: {
            type: String,
            default() {
                return 'Untitled'
            }
        },
        value: {
            type: String,
            default() {
                return null
            }
        },
        field: {
            type: String,
            default() {
                return null
            }
        }
    },

    setup(props, {emit}) {
        const targetField = ref(null)
        const objEditor = ref(null)

        const fieldName = computed(() => {
            return props.field ?? null
        })

        const value = computed({
            get: () => {                
                return props.value
            },
            set: ( value ) => {
                props.value = value // example write directly to property

                targetField.value.value = value
                targetField.value.classList.add('dirty') // Mark the field as changed

                emit( 'update:value', value )
            }
        })

        const serialize = () => {
            return '__serialize__'
        }

        const init = () => {
            // Capture the SS field that will hold the output
            targetField = document.querySelector(`#${fieldName.value}`)
            // value.value = (targetField.value?.value != props.value ) ? targetField.value?.value ?? props.value : props.value
            console.log('field',document.querySelector(`#${fieldName.value}`));
            objEditor = new EditorView({
                doc: 'console.log("Hello world")',
                extensions: [
                    basicSetup,
                    javascript(),
                ],
                parent: document.querySelector(`#${fieldName.value}`)
            })
        }

        // lifecycle hooks
        onBeforeMount( () => {
        })

        onMounted( () => {
            init();
        })

        onBeforeUpdate( () => {
        })

        onUpdated( () => {
            serialize()
        })

        return {
            fieldName,
            targetField,
            objEditor,
            value
        }
    }
}
</script>

<style lang="scss">
</style>
