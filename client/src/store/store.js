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
        success: ''
    },

    getters: {
        getSuccess: state => state.success,
        getErrors: state => state.errors,
    },

    actions: {
        addSuccess({commit}, success) {
            commit('setSuccess', success)

        },
        addErrors({commit},errors) {
            commit('setErrors', errors)
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
        }
    }

})
