import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import article from './components/article.vue'
import about from './components/about.vue'
import articleDetail from './components/articleDetail.vue'
import articleList from './components/admin/articleList.vue'
import articleEdit from './components/admin/articleEdit.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

// 按需引用element
import { Button, Message, MessageBox, Notification, Popover } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
const components = [Button, Message, MessageBox, Notification, Popover]

components.forEach((item) => {
  Vue.component(item.name, item)
})

const MsgBox = MessageBox
Vue.prototype.$msgbox = MsgBox
Vue.prototype.$alert = MsgBox.alert
Vue.prototype.$confirm = MsgBox.confirm
Vue.prototype.$prompt = MsgBox.prompt

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification

const router = new VueRouter({
  routes: [
    {path: '/', component: article},
    {path: '/article', component: article},
    {path: '/about', component: about},
    {path: '/articleDetail/:id', component: articleDetail},
    {path: '/admin/articleList', component: articleList},
    {path: '/admin/articleEdit', component: articleEdit},
    {path: '/admin/articleEdit/:id', component: articleEdit}
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
