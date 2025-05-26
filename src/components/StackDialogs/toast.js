import StackToast from "./StackToast.vue";
import StackToastGroup from "./StackToastGroup.vue";
import { requestRender } from "../../stores/dialogs";

const config = {
  component: StackToast,
  rootComponent: StackToastGroup,
};

function toast(propsData) {
  return requestRender(config)(propsData);
}

export default toast;
