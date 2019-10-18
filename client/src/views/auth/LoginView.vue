<template>
    <login-form></login-form>
</template>

<script>
    import LoginForm from '../../components/auth/LoginForm'
    import {mapActions} from 'vuex'
    export default {
        name: "LoginView",
        components: {
            LoginForm
        },
        methods:{
           ...mapActions(['addIsLogin'])
        },
        beforeRouteLeave(to,from,next){
            this.adIsLogin(false)
            next()
        }
    }
</script>

<style scoped>
body{
    background: green !important;
}
</style>