import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance;
window.Vue.prototype.$test = { name: 'CHild_B' }


const render = function(container){
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container)
}

// 子应用独立运行
!window.__POWERED_BY_QIANKUN__ && render('#app')

/**
 * 子应用导出三个必要生命周期:
 * bootstrap、mount、unmount
 */
export async function bootstrap(){
  console.log('bootstrap..');
}

export async function mount(props = {}){
  const { container, parentStore } = props
  render(container.querySelector('#app') || '#app')
  Vue.prototype.$PStore = Vue.observable(parentStore)
}

export async function unmount(){
  // 内存释放
  instance.$el.html = ''
  instance = null
}