import TButton from './src/button.vue'

//提供 install 安装方法，供按需引入
TButton.install = (Vue:any) => {
  // 注册组件
  Vue.component(TButton.name, TButton)
}

export default TButton
