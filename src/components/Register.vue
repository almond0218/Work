<template lang="html">
  <div id="register">
    <b-form class="form-block" @submit="onSubmit">
      <h3>회원가입</h3>

      <b-form-group label="이름" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="form.name"
          type="text"
          required
          placeholder="홍길동"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="이메일" label-for="email-input">
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

      <b-form-group label="비밀번호 확인" label-for="password-confirmation-input">
        <b-form-input
          id="password-confirmation-input"
          v-model="form.passwordConfirmation"
          type="password"
          required
          placeholder="**********"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">회원가입</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.$store.dispatch('register', {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name,
      })
    }
  },
}
</script>

<style lang="css" scoped>
#register {
  width: 100%;
  display: flex;
  justify-content: center;
}

#register .form-block {
  width: 40%;
}
</style>
