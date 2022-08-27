import { r as ref, c as computed, o as onBeforeMount, a as onMounted, b as onBeforeUpdate, d as onUpdated, e as renderSlot, E as EditorView, f as basicSetup, g as defineCustomElement } from "./vendor.js";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "CodeMirrorField",
  props: {
    id: {
      type: String,
      default() {
        return null;
      }
    },
    title: {
      type: String,
      default() {
        return "Untitled";
      }
    },
    value: {
      type: String,
      default() {
        return null;
      }
    },
    field: {
      type: String,
      default() {
        return null;
      }
    }
  },
  setup(props, { emit }) {
    const targetField = ref(null);
    const objEditor = ref(null);
    const fieldName = computed(() => {
      var _a;
      return (_a = props.field) != null ? _a : null;
    });
    const value = computed({
      get: () => {
        return props.value;
      },
      set: (value2) => {
        props.value = value2;
        targetField.value.value = value2;
        targetField.value.classList.add("dirty");
        emit("update:value", value2);
      }
    });
    const init = () => {
      targetField.value = document.querySelector(`#${fieldName.value}`);
      console.log("field", document.querySelector(`#${fieldName.value}`));
      objEditor.value = new EditorView({
        doc: 'console.log("Hello world")',
        extensions: [
          basicSetup,
          javascript()
        ],
        parent: document.querySelector(`#${fieldName.value}`)
      });
    };
    onBeforeMount(() => {
    });
    onMounted(() => {
      init();
    });
    onBeforeUpdate(() => {
    });
    onUpdated(() => {
    });
    return {
      fieldName,
      targetField,
      objEditor,
      value
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var CodeMirrorField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var main = "";
function register() {
  const CodeMirrorFieldElement = defineCustomElement(CodeMirrorField);
  customElements.define("vue-codemirrorfield", CodeMirrorFieldElement);
}
register();
//# sourceMappingURL=main.js.map
