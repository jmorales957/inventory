import Vue from 'vue'
import Router from 'vue-router'
import store from "./store/store";
import Home from './views/Home.vue'
import Login from './views/auth/LoginView'
import Logout from './components/auth/logout'
import auth from './middlewares/auth';
import appRoutes from './routes/main.routes';

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
    },
    ...appRoutes
  ]
})

rr.beforeEach( auth );

export default rr
