<template>
  <div class="t-dialog" v-show="visibleCpd">
    <div class="t-dialog-mask" v-if="modal" @click="handleModalClose"></div>
    <div class="t-dialog-main" :style="{ 'width': width }">
      <div class="t-dialog-main-header">
        <slot name="title">
          <div class="title">{{ title }}</div>
          <div class="close iconfont iconquanping1" @click="close"></div>
        </slot>
      </div>
      <div class="t-dialog-main-content">
        <slot>{{ content }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TDialog",
  props: {
    visible: { type: Boolean, default: false },
    modal: { type: Boolean, default: true },
    closeOnClickModal: { type: Boolean, default: true },
    title: { type: String, default: "提示" },
    width: { type: String, default: "50%" },
    content: { type: String, default: "" }
  },
  computed: {
    visibleCpd: {
      get(){
        return this.visible;
      },
      set(value){
        this.$emit("update:visible", value);
      }
    }
  },
  methods: {
    handleModalClose(){
      if(!this.closeOnClickModal) return;
      this.close();
    },
    close(){
      this.visibleCpd = false;
      this.$emit("close");
    }
  }
}
</script>

<style lang="less" scoped>
.t-dialog{
  .t-dialog-mask{
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
  }
  .t-dialog-main{
    position: fixed;
    left: 50%;
    top: 50%;
    background: white;
    border-radius: 5px;
    transform: translateX(-50%) translateY(-50%);
    .t-dialog-main-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 45px;
      padding: 0 10px;
      border-bottom: 1px solid #e4e4e4;
      .title{
        font-size: 14px;
      }
      .close{
        font-size: 18px;
        cursor: pointer;
      }
    }
    .t-dialog-main-content{
      padding: 10px;
    }
  }
}
</style>