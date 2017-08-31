/**
* Api call related mutations.
*/
export function apiCalling (state) {
  state.apiCalling = true
}

export function apiCalled (state) {
  state.apiCalling = false
}

export function addNewPost (state, payload) {
  state.posts = [...state.posts, payload.post]
  payload.router.push({name: 'Posts', query: {msg: 'Post added successfully.'}})
}

export function editPost (state, payload) {
  if (state.posts.length > 0) {
    const posts = [...state.posts]
    const index = posts.findIndex((post) => post.id === payload.post.id)
    posts[index] = {...posts[index], ...payload.post}
    state.posts = posts
  }
  payload.router.push({name: 'PostView', id: payload.post.id, query: {msg: 'Updated successfully.'}})
}

export function deletePost (state, payload) {
  if (state.posts.length > 0) {
    const posts = [...state.posts]
    const index = posts.findIndex((post) => post.id === payload.postId)
    posts.splice(index, 1)
    state.posts = posts
  }
  payload.router.push({name: 'Posts', query: {msg: 'Post successfully deleted.'}})
}

export function fetchUsers (state, payload) {
  state.users = payload.users
}

export function fetchPosts (state, payload) {
  state.posts = payload.posts
}

export function fetchError (state, payload) {
  state.fetchError = payload.error
}

export function setPost (state, payload) {
  state.selectedPost = payload.post
}
