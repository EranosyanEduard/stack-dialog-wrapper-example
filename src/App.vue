<script setup>
import StackDialogWrapper from "./components/StackDialogs/StackDialogWrapper.vue";
import toast from "./components/StackDialogs/toast";
import msg from "./components/StackDialogs/msg";

const askQuestion = async () => {
  if (await msg({ message: "Are you sure?" })) {
    toast({ color: "green", message: "Yes" });
  } else {
    toast({ color: "red", message: "No" });
  }
};
const showToasts = async () => {
  toast({ color: "red", message: "failure!" });
  toast({ color: "green", message: "success!" });
  toast({ color: "yellow", message: "warning!" });
};
</script>

<template>
  <div id="app">
    <header>
      <h1>StackDialogWrapper example</h1>
    </header>
    <main>
      <button @click="showToasts">show toasts</button>
      &nbsp;
      <button @click="askQuestion">ask question</button>
    </main>
    <footer>
      <StackDialogWrapper />
    </footer>
  </div>
</template>
