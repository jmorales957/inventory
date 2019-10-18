<template>
    <div id="app">
        <nav-bar v-show="!getIsLogin"></nav-bar>
        <side-nav  v-show="!getIsLogin"></side-nav>
        <div class="main">
            <vue-page-transition name="fade-in-right">
                <router-view/>
            </vue-page-transition>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import Vue from 'vue'
    import VuePageTransition from 'vue-page-transition'

    Vue.use(VuePageTransition)
    import NavBar from './components/NavBarComponent'
    import SideNav from './components/SideNavComponent'

    export default {
        components: {
            NavBar,
            SideNav
        },
        data(){
            return {
                login:true
            }
        },
        computed: {
            ...mapGetters(['getIsLogin'])
        }
    }
</script>


