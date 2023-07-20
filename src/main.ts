import { ComponentSizes, DefaultColors } from './types/constants';
import { App } from "vue"
import VuiButton from "./components/VuiButton.vue"
import VuiInput from "./components/VuiInput.vue"
import VuiModal from "./components/VuiModal.vue"
import VuiSelect from "./components/VuiSelect.vue"
import 'material-icons/iconfont/material-icons.css';
import "./main.css"

export { VuiButton, VuiInput, VuiModal, VuiSelect }
export type { ComponentSizes, DefaultColors }

export default {
    install: (app: App) => {
        // app.component("VuiButton", VuiButton)
        // app.component("VuiButton", VuiButton)
    }
}
