import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../components/Posts'
import NewPost from '../components/NewPost'
import PostView from '../components/PostView'
import NotFound from '../components/NotFound'
import UpdatePost from '../components/UpdatePost'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },

    {
      path: '/new-post',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/update-post/:id',
      name: 'UpdatePost',
      component: UpdatePost
    },
    {
      path: '/post-vew/:id',
      name: 'PostView',
      component: PostView
    },

    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }

  ]
})
