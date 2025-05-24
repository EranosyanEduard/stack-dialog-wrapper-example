<script setup>
import { defineProps } from "vue";

const emits = defineEmits(["close"]);
const props = defineProps({
  message: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="stack-message">
    <div class="stack-message__content">
      {{ message }}
      <button @click="emits('close', false)">No</button>
      <button @click="emits('close', true)">Yes</button>
    </div>
  </div>
</template>

<style>
.stack-message {
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  position: absolute;
  background: rgb(0 0 0 / 50%);
}

.stack-message__content {
  background: white;
  color: black;
}
</style>
