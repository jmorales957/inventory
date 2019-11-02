import axios from 'axios'

const state = {
    todos: [],
    userEdit: {},
}

const getters = {
    allTodos: state => state.todos,
    editUSer: state => state.userEdit,
}
const actions = {
    async listUsers({commit}, token) {
        const response = await fetch(`${process.env.VUE_APP_URI_SERVICE}/api/v1/users`,{
            headers: {
                'auth-token': token
            }
        });

        const data = await response.json()

        commit('setTodos', data);
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
        await axios.delete(`${process.env.VUE_APP_URI_SERVICE}/api/v1/users/${id}`);
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
    async updateTodo({commit}, user) {

        const response = await axios.put(
            `${process.env.VUE_APP_URI_SERVICE}/api/v1/users/${user._id}`, user);
        commit('updateUser', response.data.data);
    },
    async editUser({commit}, user) {
        const response = await fetch(`${process.env.VUE_APP_URI_SERVICE}/api/v1/users/${user._id}`)
        var data = await response.json()
        const full = {

            ...data.data._doc,
            ...user
        }
        commit('settUserEdit', full)
    }
}
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo:
        (state, todo) => state.todos.unshift(todo),
    removeTodo:
        (state, id) => {
            state.todos = state.todos.filter((todo) => {
                return todo._id !== id
            })
        },
    updateUser:
        (state, user) => {
            const index = state.todos.findIndex(u => u._id === user._id);
            if (index !== -1) {
                state.todos.splice(index, 1, user)
            }
        },
    settUserEdit:
        (state, user) => {
            state.userEdit = user
        }
}


export default {
    state,
    getters,
    actions,
    mutations
}