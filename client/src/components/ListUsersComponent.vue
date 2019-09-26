<template>
    <div>
        <modal-edit-component></modal-edit-component>
        <datatable
                :title="title"
                :columns="columns"
                :rows="users"
                :locale="locale"

        >
            <th slot="thead-tr">
                Acciones
            </th>
            <template slot="tbody-tr" scope="props">
                <td>
                    <button
                            class="btn yellow darken-2 waves-effect waves-light btn-small"
                            @click="edit(props.row)"
                            data-target="modal1"
                    >
                        <i class="material-icons white-text">edit</i>
                    </button>
                    <button
                            class="btn red darken-2 waves-effect waves-light btn-small"

                    >
                        <i class="material-icons white-text">delete</i>
                    </button>
                </td>
            </template>
        </datatable>
    </div>
</template>

<script>
    import DataTable from 'vue-materialize-datatable'
    import ModalEditComponent from "./ModalEditComponent"
    import EventBus from '../../bus'

    export default {
        data() {
            return {
                title: "USUARIOS",
                locale: 'es',
                columns: [
                    {
                        label: '#',
                        field: '_id'
                    },
                    {
                        label: 'Nombre',
                        field: 'name'
                    }
                ],
                users: [],
                aux: null
            }
        },
        components: {
            "datatable": DataTable,
            ModalEditComponent
        },
        created() {
            const self = this

            document.addEventListener('DOMContentLoaded', function() {
                var elem = document.getElementById('modal1');
                var instance = M.Modal.init(elem);
                self.aux = instance


            });
        },
        mounted() {
            this.list()


        },
        methods: {
            async list() {

                const response = await fetch('http://localhost:3000/api/v1/users', {
                    headers: {
                        'Content-Type': 'applicationn/json'
                    },

                })
                const data = await response.json()
                this.users = data
            },
            edit(user) {
                this.aux.open()
                EventBus.$emit('add-comment', user)
            }
        },
    }
</script>

