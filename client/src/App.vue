<template>
    <div id="app">
        <nav-bar></nav-bar>
        <side-nav></side-nav>
        <div class="main">
            <vue-page-transition name="fade-in-right">
                <router-view/>
            </vue-page-transition>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VuePageTransition from 'vue-page-transition'

    Vue.use(VuePageTransition)
    import NavBar from './components/NavBarComponent'
    import SideNav from './components/SideNavComponent'

    export default {
        components: {
            NavBar,
            SideNav
        }
    }
</script>


