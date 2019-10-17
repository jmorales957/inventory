<template>
    <div>
        <ul id="slide-out" class="sidenav sidenav-fixed">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="http://oakleyjewelers.com/images/banner-img-2.jpg">
                    </div>
                    <a href="#user"><img class="circle"
                                         src="https://www.theodorad.com/images/contentThd/bridal/rings/1.jpg"></a>
                    <a href="#name"><span class="white-text name">John Doe</span></a>
                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                </div>
            </li>
            <li><a href="#!"><i class="material-icons">cloud</i>Ventas</a></li>
            <li>
                <div class="divider"></div>
            </li>
            <ul class="collapsible">
                <li>
                    <a class="collapsible-header"><i class="material-icons">accessibility</i>Clientes</a>
                    <div class="collapsible-body">
                        <ul>
                            <li>
                                <router-link to="/users/list" >Listado</router-link>
                            </li>
                            <li>
                                <router-link to="/users/create">Agregar</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <li>
                <div class="divider"></div>
            </li>
            <ul class="collapsible">
                <li>
                    <a class="collapsible-header"><i class="material-icons">add</i>Productos</a>
                    <div class="collapsible-body">
                        <ul>
                            <li>
                                <router-link to="/products/list" >Listado</router-link>
                            </li>
                            <li>
                                <router-link to="/products/create">Agregar</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideNavComponent",
        created() {
            document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elems);

            });

        },
        mounted() {
            document.addEventListener('DOMContentLoaded', function() {
                var c = document.querySelectorAll('.collapsible');
                var collpases = M.Collapsible.init(c);
            });
        }
    }
</script>

<style scoped>

</style>