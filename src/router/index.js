import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Word from '@/components/Word'
import mkd from '@/components/markdown'

Vue.use(Router)

const User = { template: `<div class="user"><h2>User {{ $route.params.id }}</h2><router-view></router-view></div>` }
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

export default new Router({
  // hash模式下会有
  mode: 'history',
  base: 'test',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/user',
      component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: UserHome },
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts }
      ]
    },
    {
      path: '/a',
      components: {
        default: Word,
        a: Hello
      },
      children: [
        { path: '', components: { default: UserPosts, m: UserHome } },
        { path: 'profile', component: UserProfile }
      ]
    },
    {
      path: '/mk',
      component: mkd
    }
  ]
})
