const state = {
  zipcode: false,
  locations: []
}

const getters = {
  zipcode (state) {
    return state.zipcode
  },

  locations (state) {
    return state.locations
  }
}

const actions = {
  addZipcode ({commit}, zipcode) {
    commit('ADD_ZIPCODE', zipcode)
  },

  addLocation ({commit}, location) {
    commit('ADD_LOCATION', location)
  }
}

const mutations = {
  ADD_ZIPCODE (state, zipcode) {
    state.zipcode = zipcode
  },

  ADD_LOCATION (state, location) {
    state.locations.unshift(location)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
