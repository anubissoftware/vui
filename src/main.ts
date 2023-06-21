import { App } from "vue"
import VuiButton from "./components/VuiButton.vue"
import "./styles.css"

export {VuiButton}

export default {
    install: (app: App) => {
        app.component("VuiButton", VuiButton)
    }
}
