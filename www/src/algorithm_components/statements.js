import {Enum, make_string} from "../util.js";
import {to_string as all_to_string} from "./mod";

export const statement = new Enum(["for_loop", "assign", "block"]);

export const for_loop = ([intializer, while_condition, post_statement], body) => ({
    type: statement.for_loop,
    intializer,
    while_condition,
    post_statement,
    body,
});

export const assign = (target_variable, value_expression) => ({type: statement.assign, target_variable, value_expression});

export let block = (statements) => ({type: statement.block, statements})

/*
    Visualisations
*/
export let visualise = statement.empty_mapping();

export let to_string = statement.empty_mapping();
to_string[statement.assign.id] = ({target_variable, value_expression}) => all_to_string(target_variable) + " = " + all_to_string(value_expression);
to_string[statement.block.id] = ({statements}) => make_string(";\n", "{\n", "\n}")(statements.map(all_to_string));
to_string[statement.for_loop.id] = ({intializer, while_condition, post_statement, body}) => "for(" + all_to_string(intializer) + "; " + all_to_string(while_condition) + "; " + all_to_string(post_statement) + ") " + all_to_string(body);