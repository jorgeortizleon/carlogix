import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeMecanet from '../views/HomeMecanet.vue'
import EjemploUno from '../components/EjemploUno.vue'//
import LoginMecanet from '../views/LoginMecanet.vue'
import VehiculosView from '../views/VehiculosView.vue'
import TalleresView from '../views/TalleresView.vue'
import VehiculosView2 from '../components/VehiculosVue2.vue'//
import VehiculoSingle from '../views/VehiculoSingleView.vue'
import TallerSingle from '../views/TallerSingleView.vue'
import ServicioSingle from '../views/ServicioSingleView.vue'
import CallView from '../views/CallView.vue'
import Quejas from '../views/QuejasView.vue'
import Notificaciones from '../views/NotificacionesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: LoginMecanet
  },
  {
    path: "/homee",
    name: "home",
    component: HomeMecanet
  },
  {
    path: "/ejemplouno",
    name: "ejemplouno",
    component: EjemploUno
  },
  {
    path: "/talleresview",
    name: "TalleresView",
    component: TalleresView
  },
  {
    path: "/vehiculosview",
    name: "VehiculosView",
    component: VehiculosView
  },
  {
    path: "/home",
    name: "VehiculosView2",
    component: VehiculosView2
  },
  {
    path: "/vehiculosingle",
    name: "VehiculosSingle",
    component: VehiculoSingle
  },
  {
    path: "/tallersingle",
    name: "TallerSingle",
    component: TallerSingle
  },
  {
    path: "/serviciosingle",
    name: "ServicioSingle",
    component: ServicioSingle
  },
  {
    path: "/callview",
    name: "CallView",
    component: CallView
  },
  {
    path: "/quejas",
    name: "Quejas",
    component: Quejas
  },
  {
    path: "/notificaciones",
    name: "Notificaciones",
    component: Notificaciones
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
