<template>
    <ul>
        <li v-for="user in users" :key="user._id">{{ user.name }}</li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            users: []
        }
    },
    mounted() {
        this.list()
    },
    methods: {
        async list() {

            const response = await fetch('http://localhost:3000/api/v1/users',{
                headers: {
                    'Content-Type': 'applicationn/json'
                },
                
            })
            const data = await response.json()
            this.users = data
        }
    },
}
</script>

<style>

</style>