<template>
<div>
    <ul id="dropdown1" class="dropdown-content">
        <li class="divider"></li>
        <li><router-link :to="{ name: 'Logout'}">Cerrar Sesion</router-link></li>
    </ul>
    <nav class="#d50000 blue accent-4">
        <div class="nav-wrapper">
            <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <!-- Dropdown Trigger -->
                <li ><a class="dropdown-trigger" href="#!" data-target="dropdown1" ><i class="material-icons right" >arrow_drop_down</i><i class="material-icons right">menu</i></a></li>
            </ul>
        </div>
    </nav>
</div>
 
</template>

<script>
export default {
    name: "NavBar",
    mounted() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems);
        });
    },
    compueted: {
        loegged () {
            return this.$store.getters.loggedIn
        }
    }

}
</script>

<style>

</style>