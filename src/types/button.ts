import { ComponentSizes } from "./constants"

export interface Button {
    label?: string;
    defColor?: string;
    twColor?: string;
    size?: ComponentSizes;
    shadow?: string;
    prependIcon?: string;
    appendIcon?: string;
}