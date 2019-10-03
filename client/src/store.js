import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        userEdit: {}

    },

    getters: {
        allTodos: state => state.todos,
        editUSer: state => state.userEdit
    },

    actions: {
        async fetchTodos({commit}) {
            const response = await fetch('http://localhost:3000/api/v1/users', {}
            );

            const data = await response.json()

            commit('setTodos', data);
            /*const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                }
            );

            const data = await response.json()

            commit('setTodos', data);*/
        },
        async addTodo({commit}, title) {
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/todos',
                {title, completed: false}
            );

            commit('newTodo', response.data);
        },
        async deleteTodo({commit}, id) {
            const paramId = id
            await axios.delete(`http://localhost:3000/api/v1/users/${id}`);
            //await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);


            commit('removeTodo', paramId);
        },
        async filterTodos({commit}, e) {
            // Get selected number
            const limit = parseInt(
                e.target.options[e.target.options.selectedIndex].innerText
            );

            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
            );

            commit('setTodos', response.data);
        },
        async updateTodo({commit}, updTodo) {
          console.log(updTodo)
            const response = await axios.put(
                `http://localhost:3000/api/v1/users/${updTodo._id}`,updTodo);

            console.log(response.data);

           // commit('updateTodo', response.data);
        },
        editUser({commit},user) {
            commit('settUserEdit',user)
        }
    },

    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        newTodo: (state, todo) => state.todos.unshift(todo),
        removeTodo: (state, id) => {
            state.todos = state.todos.filter((todo) => {
                return todo._id !== id
            })
        },
        updateTodo: (state, updTodo) => {
            const index = state.todos.findIndex(todo => todo.id === updTodo.id);
            if (index !== -1) {
                state.todos.splice(index, 1, updTodo);
            }
        },
        settUserEdit: (state,user) => {
                state.userEdit = user
        }
    }
})
