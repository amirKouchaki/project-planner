<template>
    <article :class="{ completed: project.completed }">
        <router-link
            class="p-title"
            :to="{ name: 'projects.edit', params: { id: project.id } }"
            >{{ project.title }}</router-link
        >
        <ul class="p-tools">
            <li @click="deleteProject" class="delete">
                <font-awesome-icon icon="trash" />
            </li>
            <li>
                <router-link
                    :to="{ name: 'projects.edit', params: { id: project.id } }"
                    class="edit"
                    ><font-awesome-icon icon="edit"
                /></router-link>
            </li>
            <li
                @click="toggleCompleted"
                class="check"
                :class="{ completed: project.completed }"
            >
                <font-awesome-icon icon="check" />
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            uri: 'http://localhost:3000/projects/' + this.project.id,
        }
    },
    methods: {
        toggleCompleted() {
            fetch(this.uri, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !this.project.completed,
                }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
            this.project.completed = !this.project.completed
        },
        deleteProject() {
            fetch(this.uri, {
                method: 'DELETE',
            })
            this.$el.parentNode.removeChild(this.$el)
            this.$emit('deleted', this.project.id)
        },
    },
}
</script>

<style scoped>
article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2em;

    padding: 2em 2em;
    border-radius: 0.4em;
    border-left: 7px rgb(253, 76, 135) solid;
    background-color: white;
    box-shadow: 0 0 3px rgb(206, 205, 205);
}

article + article {
    margin: 2em auto;
}

.p-title,
.p-title:active {
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.6;
    text-align: left;
}

.p-tools {
    display: flex;
    gap: 1em;
    list-style-type: none;
}

.p-tools > * {
    cursor: pointer;
}
.p-tools > *:hover {
    opacity: 0.5;
    transition: opacity 100ms ease-in-out;
}

article.completed {
    border-left: 7px #42b883 solid;
}

.check.completed {
    color: #42b883;
}
</style>
