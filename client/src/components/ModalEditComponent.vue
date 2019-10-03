<template>
    <div>


        <!-- Modal Structure -->
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>Editar</h4>

                <div class="row">
                    <form class="col s12" @submit.prevent="updateTodo(editUSer)">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="first_name" type="text" class="validate" v-model="editUSer.name">
                                <label for="first_name">Nombre</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" v-model="editUSer.last_name">
                                <label for="last_name">Apellido</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="password" type="password" class="validate" v-model="editUSer.password">
                                <label for="password">Password</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="email" type="email" class="validate" v-model="editUSer.mail">
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="switch input-field col  s6">
                                <label>
                                    Off
                                    <input type="checkbox" v-model="editUSer.active">
                                    <span class="lever"></span>
                                    On
                                </label>
                            </div>
                            <div class="input-field col s6">
                                <select>
                                    <option value="" disabled selected>Selecciona una opcion</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label>Tipo de Usuairo</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s6">
                                <input id="address" type="text" class="validate">
                                <label for="address">Domicilio</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="phone" type="text" class="validate">
                                <label for="phone">Telefono</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <input id="rfc" type="text" class="validate">
                                <label for="rfc">rfc</label>
                            </div>
                        </div>
                        <div class="row">
                            <button class="btn blue waves-effect waves-light" type="submit" name="action">
                                Agregar
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class=" modal-action modal-close waves-effect waves-green btn-flat">cerrar</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "ModalEditComponent",
        data() {
            return {
                name: ''
            }
        },
        computed: {
            ...mapGetters(['editUSer'])
        },
        methods: {
            ...mapActions(['updateTodo'])
        },
    }
</script>

<style scoped>

</style>