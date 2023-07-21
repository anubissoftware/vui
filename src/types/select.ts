import { superString } from "./common";
import { Input } from "./input";

export interface Select extends Omit<Input, "modelValue"> {
    data: superString[];
    modelValue: superString;
    accesor: string;
}