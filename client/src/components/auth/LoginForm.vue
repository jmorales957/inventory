<template>

    <div id="login-page" class="row" style="margin-top: 10em;">
        <div class="col s12 z-depth-6 card-panel">
            <form class="login-form" @submit.prevent="login">
                <div class="row">
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">mail_outline</i>
                        <input class="validate" id="email" type="email" v-model="email">
                        <label for="email" data-error="wrong" data-success="right">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock_outline</i>
                        <input id="password" type="password" v-model="password">
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <button class="btn blue waves-effect waves-light col s12">Login</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
           login () {
               this.$store.dispatch('addToken',{
                   email: this.email,
                   password: this.password
               })
                   .then(response => {
                       this.$router.push({name: 'ListProducts'})
                   })
           }
        }
    }
</script>

<style scoped>
    #login-page {
        width: 500px;
    }


</style>