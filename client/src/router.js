import Vue from 'vue'
import Router from 'vue-router'
import store from "./store/store";
import Home from './views/Home.vue'
import CreteUserComponent from './components/CreteUserComponent.vue'
import ListUsers from './components/ListUsersComponent.vue'
import ListProduct from './components/products/ListProductComponent'
import CreateProduct from './components/products/CreateProductComponent'
import Login from './views/auth/LoginView'
import Logout from './components/auth/logout'


Vue.use(Router)

const rr =  new Router({
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
      component: CreteUserComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products/list',
      name: 'ListProducts',
      component: ListProduct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products/create',
      name: 'CreateProduct',
      component: CreateProduct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users/list',
      name: 'ListUsers',
      component: ListUsers,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresVisitor: true
      },
      beforeEnter: (to,from,next)=> {
        store.commit('setIsLogin',true)
        next()
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    }
  ]
})

rr.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      console.log('There is no token, redirect to login. (' + to.path + ')');

      next({
        name: 'Login',
      })
    } else {
      console.log('There is a token, resume. (' + to.path + ')');
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {

      next({
        name: 'ListProducts',
      })
    } else {
      next()
    }
  }
  else {
    console.log('You\'re on the login page');
    next() // make sure to always call next()!
  }
});

export default rr
