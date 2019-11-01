<template>
    <div>
        <modal-edit-prodcut-component></modal-edit-prodcut-component>
        <notifications group="success" position="top center">
            <template slot="body" slot-scope="props">
                <div class="my-style">
                   <span class="notification-title">
                       {{props.item.title}}
                   </span>
                    <a class="waves-effect green btn-small right" @click="props.close">
                        <i class="material-icons">close</i>
                    </a>
                    <div v-html="props.item.text" class="notification-content">

                    </div>
                </div>
            </template>
        </notifications>
        <div class="row">
            <div class="col s12 offset-m3 m9">
                <data-table
                        :title="title"
                        :columns="columns"
                        :rows="allProducts"
                        :locale="locale"

                >
                    <th slot="thead-tr">
                        Acciones
                    </th>
                    <template slot="tbody-tr" scope="props">
                        <td>
                            <button class="btn yellow darken-2 waves-effect waves-light compact-btn"
                                    @click="edit(props.row)">
                                <i class="material-icons white-text">edit</i>
                            </button>
                            &nbsp;
                            <button class="btn red darken-2 waves-effect waves-light compact-btn"
                                    @click="deleteProduct(props.row)">
                                <i class="material-icons white-text">delete</i>
                            </button>
                        </td>
                    </template>

                </data-table>
            </div>
        </div>
    </div>
</template>

<script>
    import DataTable from 'vue-materialize-datatable'
    import ModalEditProdcutComponent from './ModalEditProdcutComponent'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ListProductComponent",
        data() {
            return {
                aux: null,
                title: 'Productos',
                locale: 'es',
                columns: [
                    {
                        label: 'Nombre',
                        field: 'name'
                    },
                    {
                        label: 'Descripcion',
                        field: 'description'
                    },
                    {
                        label: 'Precio',
                        field: 'price'
                    },
                    {
                        label: 'Cantidad',
                        field: 'quantity'
                    },
                    {
                        label: 'Imaen',
                        field: (row) => {
                            return `
                                            <img class="circle responsive-img" width="25" height="25" src="http://localhost:3000/${row.image_url}">
                                           `
                        },
                        html: true
                    }
                ]
            }
        },
        components: {
            DataTable,
            ModalEditProdcutComponent,
        },
        computed: {
            ...mapGetters(['allProducts', "getSuccess",'getToken'])
        },
        methods: {
            ...mapActions(['allProductsList', 'addSuccess', 'editProduct', 'deleteProduct']),
            edit(product) {
                this.editProduct(product)
                this.aux.open()

            }
        },
        mounted() {
            var self = this
            this.allProductsList(this.getToken)
            if (this.getSuccess != '') {
                this.$notify({
                    group: 'success',
                    title: this.getSuccess,
                    text: ' <i class="material-icons">check</i>',
                    width: '200px',
                    duration: -1
                });
            }
            document.addEventListener('DOMContentLoaded', function () {
                var elemProduct = document.getElementById('modalProduct');
                var modalProduct = M.Modal.init(elemProduct, {
                    onOpenEnd: () => {
                        M.updateTextFields();
                    }
                });
                self.aux = modalProduct
            });
        },
        beforeRouteLeave(to, from, next) {
           this.addSuccess('')
            next()

        },
    }
</script>

<style lang="css" scoped>
    .my-style {
        display: block;
        box-sizing: border-box;
        text-align: left;
        font-size: 12px;
        padding: 10px;
        margin: 0 5px 5px;

        color: black;
        background: #e8f9f0;
        border: 3px solid #d0f2e1;
    }

    .notification-title {
        font-weight: 600;
        color: black;
    }

    .notification-content {
        color: green;
        text-align: center;
    }


</style>