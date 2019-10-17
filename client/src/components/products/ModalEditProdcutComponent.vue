<template>
    <div>
        <!-- Modal Structure -->
        <div id="modalProduct" class="modal">
            <div class="modal-content">
                <h4>Editar</h4>

                <div class="row">
                    <form class="col s12" @submit.prevent="updateProduct(getProduct)">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="name" type="text" class="validate" v-model="getProduct.name">
                                <label for="name">Nombre</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="description" type="text" class="validate" v-model="getProduct.description">
                                <label for="description">Descripcion</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="price" type="number" step="any" class="validate" v-model="getProduct.price">
                                <label for="price">Precio</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="quantity" type="number" class="validate" v-model="getProduct.quantity">
                                <label for="quantity">Cantidad</label>
                            </div>
                        </div>
                        <div class="row">
                            <button class="btn blue waves-effect waves-light" name="action">Actualizar
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
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "ModalEditProdcutComponent",
        computed: {
            ...mapGetters(['getProduct'])
        },
        methods: {
            ...mapActions(['updateProduct'])
        }
    }
</script>

<style scoped>

</style>