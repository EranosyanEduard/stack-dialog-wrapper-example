<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "StackToast",
  props: {
    color: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
  },
  emits: ["close"],
  setup() {
    const show = ref(true);
    onMounted(() => {
      setTimeout(() => {
        show.value = false;
        emits("close");
      }, 10_000);
    });
    return { show };
  },
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
