<template>
  <div class="t-btn">tBtn按钮</div>
</template>

<script>
export default {
  name: 'tBtn',
  props: {
    visible: { type: Boolean, default: false },
    modal: { type: Boolean, default: true },
    closeOnClickModal: { type: Boolean, default: true },
    title: { type: String, default: '提示' },
    width: { type: String, default: '50%' },
    content: { type: String, default: '' },
  },
  computed: {
    visibleCpd: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('update:visible', value)
      },
    },
  },
  methods: {
    handleModalClose() {
      if (!this.closeOnClickModal) return
      this.close()
    },
    close() {
      this.visibleCpd = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="less" scoped>
.t-btn {
  display: inline-block;
  border: 1px solid;
  padding: 5px;
  border-radius: 8px;
}
</style>
