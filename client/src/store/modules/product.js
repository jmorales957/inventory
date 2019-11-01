
const state = {
    products: [],
    product: {},

}
const getters = {
    allProducts : state => state.products,
    getProduct : state => state.product,

}
const actions = {
    async allProductsList({commit},token) {
        const response = await fetch('http://localhost:3000/api/v1/products',{
            headers:{
                'auth-token': token

            }
        })
        const data = await response.json()
        if (data.data) {
            console.log(data.data)
            const product = data.data
            commit('setProducts', product)
        } else {
            commit('setToken',null)
        }

    },

    async updateProduct({commit}, product) {
        const response = await fetch(`http://localhost:3000/api/v1/products/${product._id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify({
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: product.quantity
            })

        })
        const data = await response.json()
        commit('pushProduct',data.data)
    },

    editProduct({commit},product) {
        const nP = product
        commit('setProduct',nP)
    },

    async deleteProduct({commit}, product) {
        const response = await fetch(`http://localhost:3000/api/v1/products/${product._id}`,{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'delete'
        })
        const data = await response.json()
        commit('stateDeleteProduct',product._id)
    }
}
const mutations = {
    setProducts: (state, products) => (state.products = products),

    pushProduct: (state, product) => {
        const index = state.products.findIndex(p => p._id === product._id);
        if (index !== -1) {
            state.products.splice(index, 1, product)
        }
    },

    setProduct: (state, product) => (state.product =product),

    stateDeleteProduct: (state,id) => {
            state.products = state.products.filter((product) => {
                return product._id !== id
            })

}

}


export default {
    state,
    getters,
    actions,
    mutations
}