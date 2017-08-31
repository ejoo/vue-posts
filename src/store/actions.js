import Vue from 'vue'

export function fetchPosts ({ commit }) {
  commit('apiCalling')
  Vue.http.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
    commit('apiCalled')
    commit('fetchPosts', {
      posts: response.body
    })
  }).catch((err) => {
    commit('fetchError', {
      error: err.errorText
    })
  })
}

export function fetchUsers ({ commit }) {
  commit('apiCalling')

  Vue.http.get('http://jsonplaceholder.typicode.com/users').then((response) => {
    commit('apiCalled')
    commit('fetchUsers', {
      users: response.body
    })
  }, (err) => {
    commit('fetchError', {
      error: err
    })
  }).catch((err) => {
    commit('fetchError', {
      error: err
    })
  })
}

/**
* Adds new post over API.
*/
export function addPost ({ commit }, {post, router}) {
  commit('apiCalling')
  Vue.http.post('http://jsonplaceholder.typicode.com/posts', post).then((response) => {
    post.id = response.body.id
    commit('apiCalled')
    commit('addNewPost', {
      post,
      router
    })
  }).catch((err) => {
    console.log(err)
    commit('apiCalled')
    commit('fetchError', {
      error: err.errorText
    })
  })
}
/**
* Updates Existing post
*/
export function editPost ({ commit }, {post, router}) {
  commit('apiCalling')
  Vue.http.patch('http://jsonplaceholder.typicode.com/posts/' + post.id, post).then((response) => {
    commit('apiCalled')
    commit('editPost', {
      post,
      router
    })
  }).catch((err) => {
    console.log(err)
    commit('apiCalled')
    commit('fetchError', {
      error: err
    })
  })
}

/**
* Trying to read post from the local cache and if it doesn't
* exists will try to load from the server.
*/
export function fetchSinglePost ({ commit, state }, {postId, router}) {
  if (state.posts.length > 0) {
    const post = state.posts.find((post) => post.id === postId)
    if (post) {
      commit('setPost', {
        post
      })
      return
    }
  }
  commit('apiCalling')
  Vue.http.get('http://jsonplaceholder.typicode.com/posts/' + postId).then((response) => {
    commit('apiCalled')
    commit('setPost', {
      post: response.body
    })
  }, (error) => {
    router.push({name: 'NotFound'})
    commit('apiCalled')
    commit('fetchError', {
      error
    })
  }).catch((err) => {
    router.push({name: 'NotFound'})
    commit('apiCalled')
    commit('fetchError', {
      error: err
    })
  })
}

/**
* Deletes resource.
*/
export function deletePost ({commit}, {postId, router}) {
  commit('apiCalling')
  Vue.http.delete('http://jsonplaceholder.typicode.com/posts/' + postId).then((response) => {
    commit('apiCalled')
    commit('deletePost', {
      postId: postId,
      router
    })
  }, (error) => {
    router.push({name: 'NotFound'})
    commit('apiCalled')
    commit('fetchError', {
      error
    })
  }).catch((err) => {
    router.push({name: 'NotFound'})
    commit('apiCalled')
    commit('fetchError', {
      error: err
    })
  })
}
