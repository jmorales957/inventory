<template>
        <div class="row">
            <form @submit.prevent="create"  class="col s12 offset-m3 m8" >
                <div class="row">
                    <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate" v-model="name">
                        <label for="first_name">Nombre</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate" v-model="last_name">
                        <label for="last_name">Apellido</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="password" type="password" class="validate" v-model="password">
                        <label for="password">Password</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="email" type="email" class="validate" v-model="mail">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="switch input-field col  s6">
                        <label>
                            Activo
                            <input type="checkbox" v-model="active">
                            <span class="lever"></span>
                            Inactivo
                        </label>
                    </div>
                    <div class="input-field col s6">
                        <select v-model="user_type">
                            <option value="" disabled selected>Selecciona una opcion</option>
                            <option value="1">Cliente</option>
                            <option value="2">Administrador</option>
                        </select>
                        <label>Tipo de Usuairo</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s6">
                        <input id="address" type="text" class="validate" v-model="address">
                        <label for="address">Domicilio</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="phone" type="text" class="validate" v-model="phone">
                        <label for="phone">Telefono</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input id="rfc" type="text" class="validate" v-model="rfc">
                        <label for="rfc">rfc</label>
                    </div>
                </div>
                <div class="row">
                    <button class="btn blue waves-effect waves-light" type="submit" name="action">Agregar
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>

</template>

<script>
    export default {
        data() {
            return {
                name: '',
                last_name: '',
                password: '',
                mail: '',
                active: false,
                user_type: null,
                address: '',
                phone: '',
                rfc: '',


            }

        },
        mounted() {
            document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
            });
        },
        methods: {
            async create() {
                 await fetch('http://localhost:3000/api/v1/users', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.name,
                        last_name: this.last_name,
                        password: this.password,
                        mail: this.mail,
                        active: this.active,
                        user_type: this.user_type,
                        address: this.address,
                        phone: this.phone,
                        rfc: this.rfc

                    })
                })

                this.$router.push({name: 'ListUsers'})

             }
        },
    }
</script>

<style>

</style>