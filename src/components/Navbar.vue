<template>
    <nav>
        <router-link :to="{ name: 'home' }">Projects</router-link>
        <router-link :to="{ name: 'projects.create' }"
            >Add a New Project</router-link
        >
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #b3b3b3;
    text-decoration: none;
    margin: 0.8em;
    box-sizing: border-box;
    padding: 0.2em 0.6em;
    font-size: 1.1rem;
}

nav a.router-link-exact-active {
    border-bottom: 2px #42b983 solid;
}
</style>
