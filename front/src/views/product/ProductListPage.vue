<template>
  <div>
    <h1>제품 목록</h1>
    <ProductList />
  </div>
</template>
<script>
import ProductList from '@/components/product/ProductList.vue';
export default {
  components: { ProductList },
  data() {
    return {};
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  font-weight: regular;
  margin: 10px;
}
</style>
