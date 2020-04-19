import {Enum} from "../util";

export const variable = new Enum(["int"]);

export const int = (name, value) => ({type: variable.int, name, value});

/*
    to_string
*/

export let to_string = variable.empty_mapping();

to_string[variable.int.id] = ({name}) => name.toString();

// TODO: variables should be expressions