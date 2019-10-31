<template>

    <div id="login-page" class="row" style="margin-top: 10em;">
        <div class="col s12 z-depth-6 card-panel">
            <form class="login-form" @submit.prevent="auth">
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
            async auth () {

                const response  = await  fetch('http://localhost:3000/api/v1/auth/login', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    method: 'post',
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                })

                const data = await response.json()
                console.log(data)
            }
        }
    }
</script>

<style scoped>
    #login-page {
        width: 500px;
    }


</style>