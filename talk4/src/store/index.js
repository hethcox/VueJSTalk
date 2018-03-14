import Vue from 'vue'
import Vuex from 'vuex'
import map from './modules/Map'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    map
  }
})

export default store
