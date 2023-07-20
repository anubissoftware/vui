import { ComponentSizes } from "./constants";


export interface Input{
    modelValue: string;
    label?: string;
    placeholder?: string;
    size?: ComponentSizes;
    readonly?: boolean;
    required?: boolean;
    appendIcon?: string;

    outlined?: boolean;
}