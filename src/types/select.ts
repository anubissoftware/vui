import { Moment } from "moment";
import { superString } from "./common";
import { Input } from "./input";

export interface Select extends Omit<Input, "modelValue"> {
    data: superString[];
    modelValue: superString;
    accesor: string;
}


export interface DatePicker extends Omit<Input, "modelValue">{
    modelValue: Moment,
    format?: string
}