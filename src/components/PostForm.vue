<template lang="html">
  <form>
    <div class="form-group">
      <label for="userId">User ID</label>
      <select
        :class="{'form-control': true, 'has-error': errors.has('userId') }"
        name="userId"
        v-validate="'required'"
        v-model='post.userId'
        placeholder='Select User'
      >
        <option :value="user.id" v-for='user in users'>
          {{ user.name }}
        </option>

      </select>

      <span v-show="errors.has('userId')" class="help has-error">{{ errors.first('userId') }}</span>
    </div>

    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        v-model='post.title'
        id='title'
        :class="{'form-control': true, 'has-error': errors.has('title')}"
        name="title"
        v-validate="'required'"
      />
      <span v-show="errors.has('title')" class="help has-error">{{ errors.first('title') }}</span>

    </div>

    <div class="form-group">
      <label for="body">Body</label>
      <textarea
        name="name"
        rows="8"
        class='form-control'
        cols="80"
        id="body"
        v-model='post.body'
      >
      </textarea>
    </div>

    <div class="actions">
      <button @click='processPost($event)' :disabled = 'hasErrors' type="button" name="button" class="btn btn-success btn-lg">
        {{ isNewRecord ? "Add Post" : "Update Post" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['users', 'addPost', 'editPost', 'post', 'isNewRecord'],
  methods: {
    processPost (event) {
      event.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result === true) {
          if (this.post.isNewRecord) {
            this.addPost({post: this.post, router: this.$router})
          } else {
            this.editPost({post: this.post, router: this.$router})
          }
        }
      }).catch(() => {
        alert('Correct them errors!')
      })
    }
  },
  // computed properties
  computed: {
    hasErrors () {
      return this.errors.errors.length > 0
    }
  }
}
</script>

<style lang="css">
.has-error:not(select){
  color: red
}
input.has-error, select.has-error{
  border-color: red;
}
</style>
