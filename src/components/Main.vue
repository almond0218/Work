<template lang="html">
  <div class="content-wrapper">
    <div class="content-wrapper__content content">
      <b-button class="content__button" size="lg" variant="primary" @click="start">출근</b-button>
      <b-button class="content__button" size="lg" @click="end">퇴근</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    start: () => {
      console.log('start')
    },
    end: () => {
      console.log('end')
    },
  },
}
</script>

<style lang="css" scoped>
.content-wrapper {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper__content {
  width: 200px;

  display: flex;
  justify-content: space-around;
}
</style>
