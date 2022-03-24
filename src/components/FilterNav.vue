<template>
    <nav class="filters">
        <a
            :class="{ active: filter == 'all' }"
            @click.prevent="$emit('filter', 'all')"
            href="#"
            >All</a
        >
        <a
            :class="{ active: filter == 'completed' }"
            @click.prevent="$emit('filter', 'completed')"
            href="#"
            >Completed</a
        >
        <a
            :class="{ active: filter == 'ongoing' }"
            @click.prevent="$emit('filter', 'ongoing')"
            href="#"
            >Ongoing</a
        >
    </nav>
</template>

<script>
export default {
    props: ['filter'],
}
</script>

<style>
.filters {
    display: flex;
    justify-content: flex-start;
    gap: 1.5em;
    margin-bottom: 1em;
}

.filters > a {
    color: #9c9c9c;
    font-weight: bold;
    font-size: 1.1rem;
}

.filters .active {
    color: #555;
}
</style>
