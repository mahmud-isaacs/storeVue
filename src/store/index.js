import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    education:null,
    skills:null,
    workExp:null,
    projects:null,
    testimonials:null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state,payload){
    state.aboutMe = payload
    },
    setEducation(state, payload){
         state.aboutMe = payload
    },
    setSkills(state, payload){
    state.skills = payload
    },
     setWorkExp(state, payload){
      state.workExp = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
     setTestimonials(state, payload){
       state.testimonials = payload
    }
  },
  actions: {
    async getAboutMe ({commit}){
      let fetchInfo = await fetch('https://mahmud-isaacs.github.io/first_API/data/data.json')
      let data = await fetchInfo.json()
      let {aboutMe,education,projects,skills,workExp,testimonials} = data
      console.log(data);
      commit('setAboutMe', aboutMe)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setWorkExp', workExp)
      commit('setProjects', projects)
      commit('setTestimonials', testimonials)
    }
  },
  modules: {
  }
})
