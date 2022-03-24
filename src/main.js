import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret,
    faTrash,
    faEdit,
    faCheck,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faTrash, faEdit, faCheck)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
