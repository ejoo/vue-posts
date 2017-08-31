<template lang="html">
  <div class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">
          Test App
        </a>
      </div>

      <ul class="navbar-nav nav navbar-right">
        <li>
          <router-link :to="{ name: 'Posts', params: {} }">
            Posts
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'NewPost', params: {} }">
            Add New Post
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="css">
</style>
