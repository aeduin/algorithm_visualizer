import {Enum} from "../util";

export let variable = new Enum("int");

export const int = (value) => ({type: variable.int, value});

/*
    to_string
*/

export let to_string = variable.empty_mapping();

to_string[variable.int.id] = ({value}) => value.toString();