import { position } from "./common";
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

export interface InputFloating extends Input{
    position: position;
    width?: number;
    fit?: boolean;
}