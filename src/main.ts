import { App } from "vue"
import VuiButton from "./components/VuiButton.vue"
import VuiInput from "./components/VuiInput.vue"
import VuiModal from "./components/VuiModal.vue"
import 'material-icons/iconfont/material-icons.css';
import "./main.css"

export { VuiButton, VuiInput, VuiModal }

export default {
    install: (app: App) => {
        // app.component("VuiButton", VuiButton)
        // app.component("VuiButton", VuiButton)
    }
}
