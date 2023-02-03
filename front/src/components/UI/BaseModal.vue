<template>
  <teleport to="body">
    <div class="outside" @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="title">
          <h3>{{ title }}</h3>
        </slot>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <div class="actions">
        <slot name="button">
          <base-button mode="large-comfirm" @click="$emit('close')">
            닫기
          </base-button>
        </slot>
      </div>
    </dialog>
  </teleport>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '안내',
    },
  },
  emits: ['close'],

  data() {
    return {
      sampleData: '',
    };
  },

  methods: {},
};
</script>
<style scoped>
.outside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  margin: 18px;
  text-align: center;
}

.content {
  overflow: auto;
  min-height: 80px;
  max-height: 400px;
  margin: 18px;
  text-align: center;
}

.actions {
  margin: 18px 40px;
  text-align: center;
}
</style>
