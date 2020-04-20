import {statement, visualise as visualise_statement, to_string as statement_to_string} from "./statements";
import {variable, to_string as variable_to_string} from "./variables";
import {expression, to_string as expression_to_string, operator, operator_to_string} from "./expressions";

export {variable_to_string};

export const visualise = (component) => {
    if(component.type.parent_enum === statement) {
        return visualise_statement[component.type.id](component);
    }    
}

export const to_string = (component) => {
    if(component.type.parent_enum === statement) {
        return statement_to_string[component.type.id](component);
    }
    else if(component.type.parent_enum === variable) {
        return variable_to_string[component.type.id](component);
    }
    else if(component.type.parent_enum === expression) {
        return expression_to_string[component.type.id](component);
    }
    else if(component.type.parent_enum === operator) {
        return operator_to_string[component.type.id](component);
    }
}