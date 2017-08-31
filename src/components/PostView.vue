<template lang="html">
  <div class="">

    <div v-show='apiCalling'>
      loading...
    </div>

    <div v-show='getSelectedPost !== undefined && !apiCalling'>
      <div class="alert alert-success" v-show='hasMsgQuery'>
        <p>
          {{ $route.query.msg }}
        </p>
      </div>

      <h2>Post View</h2>
      <hr />
      <h4>
        {{ getSelectedPost.title }}
      </h4>
      <p>
        {{ getSelectedPost.body }}
      </p>
      <hr />
      <p>
        <a href="#" class="btn btn-danger" @click='removePost($event, getSelectedPost.id)' data-confirm>
          Delete Post
        </a>
        <router-link :to="{ name: 'UpdatePost', id: getSelectedPost.id }" class='btn btn-success'>
          Update Post
        </router-link>

        <router-link :to="{ name: 'Posts' }" class='btn btn-info'>
          Go to posts
        </router-link>

      </p>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSelectedPost']),
    ...mapState(['fetchError', 'apiCalling']),
    hasMsgQuery () {
      return this.$route.query !== undefined && this.$route.query.msg !== undefined
    }
  },

  methods: {
    ...mapActions(['fetchSinglePost', 'deletePost']),
    removePost (event, id) {
      event.preventDefault()
      const confirm = window.confirm('Are you sure?')
      if (confirm) {
        this.deletePost({postId: id, router: this.$router})
      }
    }
  },

  created () {
    this.fetchSinglePost({postId: this.$route.params.id, router: this.$router})
  }
}
</script>

<style lang="css">
</style>
