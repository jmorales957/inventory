<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>
<script>
    import NavBar from './components/NavBarComponent'

    export default {
        components: {
            NavBar
        }
    }
</script>

