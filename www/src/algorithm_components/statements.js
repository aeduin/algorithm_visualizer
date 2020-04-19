import {Enum, make_string} from "../util.js";

export const statement = new Enum(["for_loop", "assign", "block"]);

export const for_loop = ([intializer, while_condition, post_statement], body) => ({
    type: statement.for_loop,
    intializer,
    while_condition,
    post_statement,
    body,
});

export const assign = (target_value, value_expression) => ({type: statement.assign, target_value, value_expression});

export let block = (statements) => ({type: statement.block, statements})

/*
    Visualisations
*/
export let visualise = statement.empty_mapping();

export let to_string = statement.empty_mapping();
to_string[statement.assign.id] = ({target_value, value_expression}) => target_value + " = " + value_expression;
to_string[statement.block.id] = ({statements}) => make_string(";\n")(statements);