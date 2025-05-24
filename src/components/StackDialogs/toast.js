import StackToast from "./StackToast.vue";
import StackToastGroup from "./StackToastGroup.vue";
import { useDialogs } from "../../stores/dialogs";

const config = {
  component: StackToast,
  rootComponent: StackToastGroup,
};

function toast(propsData) {
  return useDialogs().requestRender(config)(propsData);
}

export default toast;
