<template>
    <div class="row">


        <div class="col s12 offset-m3 m9">
            <modal-edit-component></modal-edit-component>

            <data-table
                    :title="title"
                    :columns="columns"
                    :rows="allTodos"
                    :locale="locale"

            >
                <th slot="thead-tr">
                    Actions
                </th>
                <template slot="tbody-tr" scope="props">
                    <td>
                        <button class="btn yellow darken-2 waves-effect waves-light compact-btn"
                                @click="edit(props.row)">
                            <i class="material-icons white-text">edit</i>
                        </button>
                        &nbsp;
                        <button class="btn red darken-2 waves-effect waves-light compact-btn"
                                @click="deleteTodo(props.row._id)">
                            <i class="material-icons white-text">delete</i>
                        </button>
                    </td>
                </template>

            </data-table>
        </div>
    </div>
</template>

<script>
    import DataTable from 'vue-materialize-datatable'

    import ModalEditComponent from "./ModalEditComponent"
    // import EventBus from '../../bus'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                title: "USUARIOS",
                locale: 'es',
                columns: [
                    {
                        label: 'Nombre',
                        field: 'name'
                    },
                    {
                        label: 'Apellido',
                        field: 'last_name'
                    },
                    {
                        label: 'Activo',
                        field: (row) => {
                            if (row.active == true) {
                                return `<span class="new badge green" data-badge-caption="">Activo</span>`
                            } else {
                                return `<span class="new badge red" data-badge-caption="">Inactivo</span>`
                            }
                        },
                        numeric: false,
                        html: true

                    },
                    {
                        label: 'Email',
                        field: 'mail'
                    }

                ],
                aux: null,
                userEdit: null
            }
        },
        components: {
            ModalEditComponent,
            DataTable
        },
        mounted() {
            this.fetchTodos();
            const self = this

            document.addEventListener('DOMContentLoaded', function () {
                var elem = document.getElementById('modal1');
                var instance = M.Modal.init(elem, {
                    onOpenEnd: () => {
                        M.updateTextFields();
                    }
                });
                self.aux = instance
            });
        },
        methods: {
            ...mapActions(["fetchTodos", "deleteTodo", "updateTodo", 'editUser']),
            edit(user) {
                this.editUser(user)
                this.aux.open()


            }
        },
        computed: {
            ...mapGetters(['allTodos', 'editUSer'])
        },
    }
</script>

