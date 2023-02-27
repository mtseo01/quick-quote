<template>
  <div>
    <h1>제품 등록</h1>
    <CreateForm />
  </div>
</template>
<script>
import CreateForm from '@/components/product/CreateForm.vue';
export default {
  components: { CreateForm },
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
