<template>
<div>
     <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/users/create">Add</router-link></li>
        <li><router-link to="/users/list">List</router-link></li>
      </ul>
    </div>
  </nav>
</div>
 
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>

</style>