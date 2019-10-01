import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    allUsers: state => state.users
  },
  mutations: {
    setUser(state, users)  {
      state.users = users
    },
    removeUser: (state,id)=> {
      state.users = state.users.filter(user => user._id !== id)
      console.log(id)
    }
  },
  actions: {
    async ListUsers({commit}) {
      const response = await fetch('http://localhost:3000/api/v1/users', {
                    headers: {
                        'Content-Type': 'applicationn/json'
                    },

                })
                const data = await response.json()
                commit('setUser',data)
    },
    async deleteUser({commit}, id) {
      const response = await fetch(`http://localhost:3000/api/v1/users/${id}`,{
        headers: {
          'Content-Type': 'applicationn/json'
        },
        method: 'delete'
      })
      const data = await response.json()
      console.log(data)
      commit('removeUser',id)
    }
  }
})
