<template lang="html">
  <div class="posts">
    <h1>New Post</h1>
    <hr />
    <div v-show='apiCalling'>
      loading...
    </div>

    <div class="form" v-show='getUsers.length > 0 && !apiCalling'>
      <postForm :isNewRecord = 'true' :post='post' :users='getUsers' :addPost='addPost' ></postForm>
    </div>

  </div>
</template>

<script>
import PostForm from './PostForm'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    postForm: PostForm
  },

  methods: {
    ...mapActions([
      'fetchUsers', 'addPost', 'fetchPosts'
    ])

  },
  data () {
    return {
      post: {
        id: null,
        userId: null,
        title: null,
        body: null,
        isNewRecord: true
      }
    }
  },

  computed: {
    ...mapGetters(['apiCalling', 'getUsers', 'getReversePosts'])
  },

  created () {
    if (this.getReversePosts.length === 0) {
      this.fetchPosts()
    }

    if (this.getUsers.length === 0) {
      this.fetchUsers()
    }

    // binding event handlers to `this`
    this.addPost = this.addPost.bind(this)
  }

}
</script>

<style lang="css">
</style>
