<template>
    <form action="#" @submit.prevent="handleProject" class="create-p-form">
        <p>
            <label class="form-label" for="title">TITLE</label>
            <input
                v-model="project.title"
                class="form-input"
                id="title"
                autocomplete="off"
                type="text"
            />
        </p>
        <p>
            <label class="form-label" for="details">DETAILS</label>
            <textarea
                v-model="project.details"
                name=""
                id="details"
                cols="30"
                rows="10"
            ></textarea>
        </p>
        <button class="submit-btn" type="submit">{{ btnText }}</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            project: { title: '', details: '' },
            uri: 'http://localhost:3000/projects/' + this.id,
        }
    },
    props: ['btnText', 'id'],
    methods: {
        handleProject() {
            if (!this.project.title || !this.project.details) return

            if (!this.id) {
                fetch('http://localhost:3000/projects', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: this.project.title,
                        details: this.project.details,
                        completed: false,
                    }),
                }).then(() => this.$router.push({ name: 'home' }))
            } else {
                fetch(this.uri, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.project),
                }).then(() => this.$router.push({ name: 'home' }))
            }
        },
    },
    mounted() {
        if (!this.id) return
        fetch(this.uri)
            .then((res) => res.json())
            .then((data) => {
                this.project = data
            })
    },
}
</script>

<style>
.create-p-form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: min(40em, 85%);
    margin: 0 auto;
    background: white;
    border-radius: 0.5em;
    padding: 2em;
    padding-bottom: 1em;
}

.create-p-form > p > * + * {
    margin-top: 1em;
}

.form-label {
    display: block;
    text-align: left;
    font-weight: bold;
    letter-spacing: 1px;
    color: #999;
    font-size: 1.1rem;
}

.form-input {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px #ddd solid;
    line-height: 1.6;
    padding: 0.1em;
    font-size: 1rem;
}

textarea {
    width: 100%;
    resize: none;
    outline: none;
    padding: 0.7em;
    border: 2px #ddd solid;
    line-height: 1.6;
    font-size: 1.1rem;
}

.submit-btn {
    width: max-content;
    padding: 0.5em 1.5em;
    align-self: center;
    background-color: #42b883;
    border: none;
    border-radius: 0.3em;
}
</style>
