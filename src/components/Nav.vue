<template lang="html">
  <div id="nav">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/">Worker</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">근무시간</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if="!isAuthenticated">로그인</b-nav-item>
          <b-nav-item to="/register" v-if="!isAuthenticated">회원가입</b-nav-item>
          <b-nav-item v-show="isAuthenticated" @click="logout">로그아웃</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('setIsAuthenticated', false)
      this.$store.commit('setTokens', {
        access: '',
        refresh: '',
      })
    },
  },
  computed: {
    isAuthenticated () {
      return this.$store.state.isAuthenticated
    },
  },
}
</script>

<style lang="css" scoped>
</style>
