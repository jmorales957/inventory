<template>
    <div>
        <notifications group="error" position="top center">
            <template slot="body" slot-scope="props">
                <div class="vue-notification error">
                   <span>
                                               {{props.item.title}}

                   </span>

                    <button class="waves-effect red btn-small right" @click="props.close">
                        <i class="material-icons">close</i>
                    </button>
                    <div v-html="props.item.text">
                    </div>
                </div>
            </template>
        </notifications>
        <div class="row">
            <form @submit.prevent="addProduct()" class="col s12 offset-m3 m8" id="formProduct" enctype="multipart/form-data">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="name" type="text"  class="validate" v-model="name">
                        <label for="name">Nombre</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="description" type="text" class="validate" v-model="description">
                        <label for="description">Descripcion</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="price" type="number" step="any" class="validate" v-model="price">
                        <label for="price">Precio</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="quantity" type="number" class="validate" v-model="quantity">
                        <label for="quantity">Cantidad</label>
                    </div>
                </div>
                <div class="row">
                    <div class="file-field input-field col s6">
                        <div class="btn blue">
                            <span>File</span>
                            <input type="file" ref="file" @change="handleFile()">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <button class="btn blue waves-effect waves-light" name="action">Agregar
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "CreategetProductComponent",
        data() {
            return {
                name: '',
                description: '',
                price: null,
                quantity: null,
                file: null
            }
        },
        computed: {
            ...mapGetters(['getErrors'])
        },
        methods: {
            ...mapActions(['addErrors','addSuccess']),
            async addProduct() {
                const formData = new FormData()

                formData.append('name',this.name)
                formData.append('description',this.description)
                formData.append('quantity',this.quantity)
                formData.append('price',this.price)
                formData.append('image_url', this.file)


                const response = await fetch(`${process.env.VUE_APP_URI_SERVICE}/api/v1/products`, {
                    method: 'post',
                    body: formData
                })

                const data = await response.json()
                switch (response.status) {
                    case 400:
                       this.addErrors(data.errors)
                        for (var i in this.getErrors) {
                            this.$notify({
                                group: 'error',
                                title: this.getErrors[i].message,
                                text: 'Por favor corrige los campos',
                                width: '200px',
                                duration: -1
                            });
                        }
                        break
                    case 200:
                        this.addSuccess(data.message)
                        this.$router.push({name: 'ListProducts'})
                        break
                    default:

                }

            },
            notification() {
                for (var i in this.getErrors) {
                    this.$notify({
                        group: 'foo',
                        title: this.getErrors[i].message,
                        text: 'Por favor corrige los campos',
                        width: '200px',
                        duration: -1
                    });
                }
            },
            handleFile() {
                this.file = this.$refs.file.files[0]
            }
        },
        updated() {
           console.log(this.getErrors)
            if (this.getErros != []) {
                this.notification()

            }
        }

    }
</script>

<style scoped>

</style>