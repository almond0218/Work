<template>
  <div id="app">
    <Nav/>
    <router-view class="content-block"></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  },
  created () {
    const refreshToken = this.$store.state.token.refresh
    if (refreshToken) {
      const data = {
        'refresh': refreshToken,
      }
      this.$store.dispatch('refreshToken', data)
    }
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}

#app .content-block {
  margin-top: 40px;
}
</style>
