import StackMsg from "./StackMsg.vue";
import { requestRender } from "../../stores/dialogs";

const config = { component: StackMsg };

function toast(propsData) {
  return requestRender(config)(propsData);
}

export default toast;
