<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 4px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  color: white;
  min-height: 25px;
  min-width: 40px;
  cursor: pointer;
  background-color: rgb(73, 109, 154);
}
button:hover {
  background-color: rgb(111, 148, 192);
}
.large {
  display: block;
  padding: 5px 12px;
  margin: 6px 0 6px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  width: 100%;
  cursor: pointer;
  background-color: rgb(73, 109, 154);
}
.large:hover {
  background-color: rgb(111, 148, 192);
}

.comfirm {
  background-color: rgb(73, 154, 73);
}
.comfirm:hover {
  background-color: rgb(90, 172, 90);
}
.large-comfirm {
  display: block;
  padding: 5px 12px;
  margin: 6px 0 6px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  width: 100%;
  cursor: pointer;
  background-color: rgb(73, 154, 73);
}
.large-comfirm:hover {
  background-color: rgb(90, 172, 90);
}

.cancel {
  background-color: rgb(202, 10, 64);
}
.cancel:hover {
  background-color: rgb(219, 40, 91);
}
.large-cancel {
  display: block;
  padding: 5px 12px;
  margin: 6px 0 6px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  width: 100%;
  cursor: pointer;
  background-color: rgb(202, 10, 64);
}
.large-cancel:hover {
  background-color: rgb(219, 40, 91);
}
</style>
