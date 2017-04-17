import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import signin from './components/admin/signin.vue'
import sidebar from './components/sidebar.vue'
import article from './components/article.vue'
import about from './components/about.vue'
import articleDetail from './components/articleDetail.vue'
import articleList from './components/admin/articleList.vue'
import articleEdit from './components/admin/articleEdit.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

// 按需引用element
import { Button, Message, MessageBox, Notification, Popover, Tag, Input } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
const components = [Button, Message, MessageBox, Notification, Popover, Tag, Input]

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
    {path: '/', components: {default: article, sidebar: sidebar}},
    {path: '/article', components: {default: article, sidebar: sidebar}},
    {path: '/about', components: {default: about, sidebar: sidebar}},
    {path: '/articleDetail/:id', components: {default: articleDetail, sidebar: sidebar}},
    {path: '/admin/articleList', components: {default: articleList, sidebar: sidebar}},
    {path: '/admin/articleEdit', component: articleEdit},
    {path: '/admin/articleEdit/:id', component: articleEdit},
    {path: '/admin/signin', component: signin}
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
