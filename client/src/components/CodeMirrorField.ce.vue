<template>
    <input type="text" class="codemirrorfield" v-model="value">
</template>

<script>
import { computed, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'

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
        const colorValues           = ref([])
        const targetField           = ref(null)

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
            targetField.value = !targetField.value ? document.querySelector(`#${fieldName.value}`) : targetField.value

            value.value = (targetField.value?.value != props.value ) ? targetField.value?.value ?? props.value : props.value
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
            value
        }
    }
}
</script>

<style lang="scss">
</style>
