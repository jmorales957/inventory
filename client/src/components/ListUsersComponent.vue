<template>
    <div>
        <modal-edit-component></modal-edit-component>
        <data-table
            :locale="locale"
            :columns="columns"
            :rows="allUsers"
            :title="title"
        >
        <template slot="tbody-tr" scope="props">
        <td>
            <button class="btn red darken-2 waves-effect waves-light compact-btn"
                    @click="deleteUser(props.row._id)">
                <i class="material-icons white-text">delete</i>
            </button>
        </td>
    </template>

        </data-table>
    </div>
</template>

<script>
    import DataTable from 'vue-materialize-datatable'
    
    import ModalEditComponent from "./ModalEditComponent"
    import EventBus from '../../bus'
    import {mapActions , mapGetters} from 'vuex'

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
                aux: null
            }
        },
        components: {
            ModalEditComponent,
            DataTable
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
            this.ListUsers()
             

        },
        methods: {
         ...mapActions(['ListUsers','deleteUser']),
            edit(user) {
                this.aux.open()
                EventBus.$emit('add-comment', user)
            }
        },
        computed: {
            ...mapGetters(['allUsers'])
        },
    }
</script>

