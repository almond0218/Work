<template lang="html">
  <div id="login">
    <b-form class="form-block" @submit="onSubmit">
      <h3>로그인</h3>
      <b-form-group
        label="이메일"
        label-for="email-input"
      >
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          required
          placeholder="example@example.com"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="비밀번호" label-for="password-input">
        <b-form-input
          id="password-input"
          v-model="form.password"
          type="password"
          required
          placeholder="**********"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">로그인</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$store.dispatch('login', {
        email: this.form.email,
        password: this.form.password,
      })
    }
  },
}
</script>

<style lang="css" scoped>
#login {
  width: 100%;
  display: flex;
  justify-content: center;
}

#login .form-block {
  width: 40%;
}
</style>
