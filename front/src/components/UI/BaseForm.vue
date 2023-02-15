<template>
  <form @submit.prevent>
    <slot></slot>
  </form>
</template>

<style scoped>
form {
  width: 320px;
  padding: 20px;
  margin: 8px 0;
  border-radius: 8px;
  font-size: 14px;
  background: rgba(59, 65, 75, 0.836);
}
</style>
