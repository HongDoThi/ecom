import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/pages/Login.vue'
import admin from '../components/pages/Admin/admin.vue'
import category from '../components/pages/Admin/category.vue'

Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/',
    name: 'HelloWorld',
    redirect: {path: "/login"}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    redirect: {path: "/admin/category"},
    children: [
      {
        path: 'category',
        name: 'admin.category',
        component: category
      }
      
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
