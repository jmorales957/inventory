import Vue from 'vue'
import Router from 'vue-router'
import store from "./store/store";
import Home from './views/Home.vue'
import CreteUserComponent from './components/CreteUserComponent.vue'
import ListUsers from './components/ListUsersComponent.vue'
import ListProduct from './components/products/ListProductComponent'
import CreateProduct from './components/products/CreateProductComponent'
import Login from './views/auth/LoginView'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users/create',
      name: 'CreateUser',
      component: CreteUserComponent
    },
    {
      path: '/products/list',
      name: 'ListProducts',
      component: ListProduct
    },
    {
      path: '/products/create',
      name: 'CreateProduct',
      component: CreateProduct
    },
    {
      path: '/users/list',
      name: 'ListUsers',
      component: ListUsers
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to,from,next)=> {
        store.commit('setIsLogin',true)
        next()

      }
    },
  ]
})
