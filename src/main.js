import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
import { Datetime } from "vue-datetime"
import "vue-datetime/dist/vue-datetime.css"
import Paginate from "vuejs-paginate"

Vue.component("paginate", Paginate)
Vue.component("datetime", Datetime)

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount("#app")
