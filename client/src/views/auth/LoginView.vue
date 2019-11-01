<template>
    <div>
        <message></message>
        <login-form></login-form>
    </div>

</template>

<script>
    import LoginForm from '../../components/auth/LoginForm'
    import Message from '../../components/auth/Message'
    import {mapActions} from 'vuex'
    export default {
        name: "LoginView",
        components: {
            LoginForm,
            Message
        },
        methods:{
           ...mapActions(['addIsLogin'])
        },
        beforeRouteLeave(to,from,next){
            this.addIsLogin(false)
            next()
        }
    }
</script>

<style scoped >
body{
    background: #98bec8;
}
</style>