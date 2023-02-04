<template>
  <div :class="mode" @click="$emit('close-alert')">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['mode'],
  emits: ['close-alert'],
  data() {
    return {
      sampleData: '',
    };
  },

  methods: {},
};
</script>
<style scoped>
div {
  width: 320px;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  padding: 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-bottom: 8px;
  transition: 0.3s;
}

.success {
  color: rgb(0, 97, 252);
}
.warning {
  color: rgb(254, 224, 1);
}
.error {
  color: rgb(251, 39, 39);
}
</style>
