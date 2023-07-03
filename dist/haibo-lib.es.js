import { withDirectives, openBlock, createElementBlock, createCommentVNode, createElementVNode, normalizeStyle, renderSlot, toDisplayString, createTextVNode, vShow } from "vue";
var iconfont = "";
var dialog_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  name: "TDialog",
  props: {
    visible: { type: Boolean, default: false },
    modal: { type: Boolean, default: true },
    closeOnClickModal: { type: Boolean, default: true },
    title: { type: String, default: "\u63D0\u793A" },
    width: { type: String, default: "50%" },
    content: { type: String, default: "" }
  },
  computed: {
    visibleCpd: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit("update:visible", value);
      }
    }
  },
  methods: {
    handleModalClose() {
      if (!this.closeOnClickModal)
        return;
      this.close();
    },
    close() {
      this.visibleCpd = false;
      this.$emit("close");
    }
  }
};
const _hoisted_1$1 = { class: "t-dialog" };
const _hoisted_2 = { class: "t-dialog-main-header" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "t-dialog-main-content" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
    $props.modal ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "t-dialog-mask",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleModalClose && $options.handleModalClose(...args))
    })) : createCommentVNode("", true),
    createElementVNode("div", {
      class: "t-dialog-main",
      style: normalizeStyle({ "width": $props.width })
    }, [
      createElementVNode("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createElementVNode("div", _hoisted_3, toDisplayString($props.title), 1),
          createElementVNode("div", {
            class: "close iconfont iconquanping1",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
          })
        ], true)
      ]),
      createElementVNode("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString($props.content), 1)
        ], true)
      ])
    ], 4)
  ], 512)), [
    [vShow, $options.visibleCpd]
  ]);
}
var TDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-08e479a4"]]);
TDialog.install = (Vue) => {
  Vue.component(TDialog.name, TDialog);
};
var button_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "tBtn",
  props: {
    visible: { type: Boolean, default: false },
    modal: { type: Boolean, default: true },
    closeOnClickModal: { type: Boolean, default: true },
    title: { type: String, default: "\u63D0\u793A" },
    width: { type: String, default: "50%" },
    content: { type: String, default: "" }
  },
  computed: {
    visibleCpd: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit("update:visible", value);
      }
    }
  },
  methods: {
    handleModalClose() {
      if (!this.closeOnClickModal)
        return;
      this.close();
    },
    close() {
      this.visibleCpd = false;
      this.$emit("close");
    }
  }
};
const _hoisted_1 = { class: "t-btn" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, "tBtn\u6309\u94AE");
}
var TButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d1485922"]]);
TButton.install = (Vue) => {
  Vue.component(TButton.name, TButton);
};
const components = [TDialog, TButton];
const install = (Vue) => {
  if (install.installed) {
    return;
  }
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
install.installed = false;
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { TButton as BobButton, TDialog as BobDialog, install as default, install };
