<template>
    
</template>

<script>
    export default {
        name: "logout",
        created() {
            this.$store.dispatch('destroyToken').then(response => {
                this.$router.push({name: 'Login'})
            })
        }

    }
</script>

<style scoped>

</style>