import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import product from './modules/product'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        product,
        user
    },
    state: {
        errors: [],
        success: '',
        isLogin: false,
        token: localStorage.getItem('token') || null
    },

    getters: {
        getSuccess: state => state.success,
        getErrors: state => state.errors,
        getIsLogin: state => state.isLogin,
        getToken: state => state.token,
        loggedIn: state => state.token !== null,
    },

    actions: {
        addSuccess({commit}, success) {
            commit('setSuccess', success)

        },
        addErrors({commit},errors) {
            commit('setErrors', errors)
        },
        addIsLogin({commit},isLogin){
            commit('setIsLogin',isLogin)
        },
        async addToken({commit},credentials) {
            const response  = await  fetch(`${process.env.VUE_APP_URI_SERVICE}/api/v1/auth/login`, {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            })
            const data = await response.json()
            console.log(data)
            const token = data.token
            localStorage.setItem('token',token)
           commit('setToken',token)
        },
        destroyToken(context) {
            if(context.getters.loggedIn) {
                localStorage.removeItem('token')
                context.commit('destroyToken')
            }
        }
    },

    mutations: {
        setSuccess: (state, success) => {
            state.success= ''
            state.success =success
        },

        setErrors(state,errors){
            state.errors = []
            for(var i in errors){
                state.errors.push(errors[i]);

            }
        },

        setIsLogin:(state,isLogin) => {
            state.isLogin =isLogin
        },

        setToken:(state, token) =>{
            state.token = token
        },
        destroyToken: (state) => {
            state.token = null
        }
    }

})
