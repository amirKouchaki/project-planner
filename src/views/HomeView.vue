<template>
    <div class="home">
        <FilterNav @filter="handleFilter" :filter="filter" />
        <div v-if="projects.length">
            <SingleProduct
                @deleted="handleDelete"
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </div>
    </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import SingleProduct from '@/components/SingleProduct.vue'
export default {
    name: 'HomeView',
    components: { FilterNav, SingleProduct },
    data() {
        return {
            allProjects: [],
            filter: 'all',
        }
    },
    methods: {
        handleFilter(filter) {
            this.filter = filter
        },
        handleDelete(id) {
            this.allProjects = this.allProjects.filter(
                (project) => project.id != id
            )
        },
    },
    computed: {
        projects() {
            switch (this.filter) {
                case 'all':
                    return this.allProjects
                case 'completed':
                    return this.allProjects.filter(
                        (project) => project.completed
                    )
                case 'ongoing':
                    return this.allProjects.filter(
                        (project) => !project.completed
                    )
            }
        },
    },
    mounted() {
        fetch('http://localhost:3000/projects')
            .then((res) => res.json())
            .then((data) => (this.allProjects = data))
    },
}
</script>

<style>
.home {
    max-width: min(40em, 80%);
    margin: 0 auto;
}
</style>
