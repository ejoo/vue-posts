<template lang="html">
  <div class="posts">
    <div class="alert alert-success" v-show='hasMsgQuery'>
      <p>
        {{ $route.query.msg }}
      </p>
    </div>
    <h1>Posts</h1>
    <div v-show='apiCalling'>
      loading...
    </div>

    <div v-show='getReversePosts.length !== 0'>
      <table class="table table-bordered table-striped">
        <thead>

          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for='post, index in getReversePosts'>

            <td>{{ post.id }}</td>
            <td style="width: 120px">{{ post.userId}}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td style="width: 200px" class="text-center">
              <router-link :to="{ name: 'PostView', params: {id: post.id}}" :class="'btn btn-sm btn-primary'">
                View Post
              </router-link>

              <router-link :to="{ name: 'UpdatePost', params: {id: post.id}}" :class="'btn btn-sm btn-info'">
                Update Post
              </router-link>

            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'posts',

  methods: {
    ...mapActions([
      'fetchPosts'
    ])
  },

  computed: {
    ...mapGetters(['apiCalling', 'getReversePosts']),
    hasMsgQuery () {
      return this.$route.query !== undefined && this.$route.query.msg !== undefined
    }
  },

  created () {
    if (this.getReversePosts.length === 0) {
      this.fetchPosts()
    }
  }
}
</script>

<style lang="css">
</style>
