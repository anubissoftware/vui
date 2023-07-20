import { ComponentSizes, DefaultColors } from "./constants"

export interface Button {
    label?: string;
    defColor?: DefaultColors;
    twColor?: string;
    size?: ComponentSizes;
    shadow?: string;
    prependIcon?: string;
    appendIcon?: string;
}