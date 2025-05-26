import { defineStore } from "pinia";
import { ref, set, del } from "vue";

function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { reject, resolve, promise };
}

const configs = ref([]);
const dialogs = ref({});
const requestRender = (config) => (propsData) => {
  const { reject, resolve, promise } = promiseWithResolvers();
  const configId_ = configs.value.findIndex((it) => it === config);
  const configId =
    configId_ === -1 ? configs.value.push(config) : configId_ + 1;
  const config_ = {
    ...config,
    configId: dialogs.value[configId]?.length ?? 0,
    listeners: {
      close(...args) {
        console.log("config", config_);
        set(
          dialogs.value,
          configId,
          dialogs.value[configId].filter((it) => it !== config_)
        );
        resolve(...args);
      },
    },
    propsData,
  };
  set(dialogs.value, configId, (dialogs.value[configId] ?? []).concat(config_));
  return promise;
};
export { dialogs, requestRender };
