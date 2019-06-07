import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Education from './views/Education.vue'
import Experience from './views/Experience.vue'
import Interests from './views/Interests.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/interests',
      name: 'interests',
      component: Interests
    }
  ]
})
