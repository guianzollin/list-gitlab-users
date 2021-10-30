import Vue from 'vue'
import Router from 'vue-router'
import CreateProject from './views/CreateProject.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/project/create'
    },
    {
      path: '/project/create',
      name: 'CreateProject',
      component: CreateProject
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
