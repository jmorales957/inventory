<template>
    <div>
        <form @submit.prevent="create">
            <input type="text" name="name" v-model="name" >
            <button type="submit">add</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
        
    },
    methods: {
        async create() {
           const response =  await fetch('http://localhost:3000/api/v1/users',{
               headers: {
                   'Content-Type': 'application/json'
               },
                method: 'POST',
                body: JSON.stringify({
                    name: this.name
                })
            })
            const data = await response.json()
            console.log(data)
            
            this.$router.push({ name: 'ListUsers'})
        }
    },  
}
</script>

<style>

</style>