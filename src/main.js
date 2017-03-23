import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import App from './App.vue'

import article from './components/article.vue'
import about from './components/about.vue'
import articleDetail from './components/articleDetail.vue'
import articleList from './components/admin/articleList.vue'
import articleEdit from './components/admin/articleEdit.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(iView)

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
