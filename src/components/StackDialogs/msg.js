import StackMsg from "./StackMsg.vue";
import { useDialogs } from "../../stores/dialogs";

const config = { component: StackMsg };

function toast(propsData) {
  return useDialogs().requestRender(config)(propsData);
}

export default toast;
