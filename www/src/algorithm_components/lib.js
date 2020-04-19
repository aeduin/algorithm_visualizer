import {Enum} from "../util.js";
import {statement, visualise as visualise_statement, to_string as statement_to_string} from "./statements";

export const visualise = (component) => {
    if(component.type.parent_enum === statement) {
        return visualise_statement[component.type.id](component);
    }    
}

export const to_string = (component) => {
    if(component.type.parent_enum === statement) {
        return statement_to_string[component.type.id](component);
    }
}