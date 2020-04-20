import {Enum} from "../util";
import {to_string as all_to_string} from "./mod";

export const expression = new Enum(["binary_operator", "constant"]);

export const binary_operator = (operator) => (left, right) => ({type: expression.binary_operator, operator, left, right});

export const constant = (value) => ({type: expression.constant, value});

/*
    Operators
*/

export const operator = new Enum(["plus", "less_than"]);
export const plus = () => ({type: operator.plus});
export const less_than = () => ({type: operator.less_than});

/*
    To String
*/

export let to_string = expression.empty_mapping();
to_string[expression.constant.id] = ({value}) => value.toString();
to_string[expression.binary_operator.id] = ({operator, left, right}) => all_to_string(left) + operator_to_string.apply(operator) + all_to_string(right);

export let operator_to_string = operator.empty_mapping();
operator_to_string[operator.plus.id] = () => " + ";

operator_to_string[operator.less_than.id] = () => " < ";
