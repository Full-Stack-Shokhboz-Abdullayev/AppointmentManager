import Vue from 'vue'
import VueRouter from 'vue-router'
import AppointmentList from '../views/AppointmentList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'appointment-list',
    component: AppointmentList
  },
  {
    path: '/add-appointment',
    name: 'add-appointment',
    
    // lazy-loaded when the route is visited.
    component: () => import('../views/AddAppointment.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history",

})

export default router
