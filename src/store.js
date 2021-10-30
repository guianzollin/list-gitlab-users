import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  getters: {
    getProjects: state => {
      return state.projects
    }
  },
  mutations: {
    createProject (state, project) {
      state.projects.push(project)
    }
  },
  actions: {
    createProject(context, project) {
      context.commit("createProject", project);
    }
  }
})
