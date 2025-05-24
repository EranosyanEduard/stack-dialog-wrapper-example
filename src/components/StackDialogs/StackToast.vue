<script setup>
import { defineProps, onMounted, ref } from "vue";

const emits = defineEmits(["close"]);
const props = defineProps({
  color: {
    type: String,
    default: null,
  },
  message: {
    type: String,
    default: null,
  },
});

const show = ref(true);
onMounted(() => {
  setTimeout(() => {
    show.value = false;
    emits("close");
  }, 10_000);
});
</script>

<template>
  <div
    class="stack-toast"
    :class="{ 'stack-toast--hide': !show }"
    :style="{ backgroundColor: color, color: 'white' }"
  >
    {{ message }}
  </div>
</template>

<style scoped>
.stack-toast {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
}

.stack-toast--hide {
  display: none;
}
</style>
