import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import VeeValidate from 'vee-validate'
// Use Vuex In Vue App
Vue.use(Vuex)
Vue.use(VeeValidate)
// preparing app state.
const state = {
  posts: [],
  apiCalling: false, // to display loading... state in the UI while calling an API
  searchTerm: '', // to filter posts based on the search
  fetchError: {},
  selectedPost: {},
  users: []
}

// exporting store.
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
