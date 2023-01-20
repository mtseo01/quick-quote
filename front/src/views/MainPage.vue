<template>
  <div>
    <main>
      Main
      <button @click="move">작성하기</button>
    </main>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    move() {
      this.$router.push('/quotations');
    },
  },
};
</script>
<style scoped></style>
