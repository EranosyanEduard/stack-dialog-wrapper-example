<script setup>
import { useDialogs } from "../../stores/dialogs";

const dialogsStore = useDialogs();
</script>

<template>
  <div class="stack-dialog-wrapper">
    <template v-for="(dialogsOptions, configId) in dialogsStore.dialogs">
      <component
        :is="dialogsOptions.at(0)?.rootComponent ?? 'div'"
        :key="configId"
      >
        <component
          v-for="(dialogOption, i) in dialogsOptions"
          :is="dialogOption.component"
          :key="dialogOption.configId"
          v-bind="dialogOption.propsData"
          v-on="dialogOption.listeners"
        ></component>
      </component>
    </template>
  </div>
</template>
