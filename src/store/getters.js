/**
* @Returns array posts
*/
export function getPosts (state) {
  return state.posts
}

export function getUsers (state) {
  return state.users
}

export function getReversePosts (state) {
  return state.posts.reverse()
}

export function apiCalling (state) {
  return state.apiCalling
}

export function getSelectedPost (state) {
  return state.selectedPost
}
