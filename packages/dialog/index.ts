import TDialog from "./src/dialog.vue";

// 提供 install 安装方法，供按需引入
TDialog.install = (Vue:any) => {
  // 注册组件
  Vue.component(TDialog.name, TDialog);
};

export default TDialog;