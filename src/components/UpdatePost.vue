<template lang="html">
  <div class="posts">
    <h1>Update Post</h1>
    <hr />
    <div v-show='apiCalling'>
      loading...
    </div>

    <div class="form" v-show='getUsers.length > 0 && !apiCalling'>
      <postForm :isNewRecord = 'false' :post='post' :users='getUsers' :editPost='editPost' ></postForm>
    </div>

  </div>
</template>

<script>
import PostForm from './PostForm'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  components: {
    postForm: PostForm
  },

  methods: {
    ...mapActions([
      'fetchUsers', 'editPost', 'fetchSinglePost', 'fetchPosts'
    ])
  },

  computed: {
    ...mapGetters(['apiCalling', 'getUsers', 'getPosts']),
    ...mapState(['selectedPost']),
    post () {
      return Object.assign({}, this.selectedPost)
    }
  },

  created () {
    if (this.getUsers.length === 0) {
      this.fetchUsers()
    }

    // retrieve posts if not available.

    if (this.getPosts.length === 0) {
      this.fetchPosts()
    }

    this.fetchSinglePost({postId: this.$route.params.id, router: this.$router})
  }

}
</script>

<style lang="css">
</style>
