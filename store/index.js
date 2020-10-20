export const state = () => ({
  cacheVersion: ""
})

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then(res => {
      commit("setCacheVersion", res.data.space.version)
    })
  }
}

export default {
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      let getProjects = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "projects/"
      })
      let projects = getProjects.data.stories.map(bp => {
        return {
          content: bp
        }
      })
      commit("projects/update", projects)
    }
  }
}
