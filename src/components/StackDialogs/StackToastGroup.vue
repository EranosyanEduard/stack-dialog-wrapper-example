<template>
  <transition-group class="stack-toast-group" tag="div">
    <slot></slot>
  </transition-group>
</template>

<style scoped>
.stack-toast-group {
  position: fixed;
  bottom: 24px;
  right: 24px;
}

.stack-toast-group::v-deep(> .stack-toast) {
  margin-bottom: 8px;
}
</style>
