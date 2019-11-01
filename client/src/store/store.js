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
        token: null
    },

    getters: {
        getSuccess: state => state.success,
        getErrors: state => state.errors,
        getIsLogin: state => state.isLogin,
        getToken: state => state.token,
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
        addToken({commit},token) {
            commit('setToken',token)
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
        }
    }

})
