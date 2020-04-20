import { insertion } from "./sort";

export class Enum {
    constructor(keys) {
        let next_value = 0;

        for(let key of keys) {
            this[key] = {id: next_value++, parent_enum: this};
        }

        this.size = next_value;
    }

    empty_mapping() {
        let result = new Enum_mapping(this.size);
        for(let i = 0; i < this.size; i++) {
            result[i] = null;
        }
        return result;
    }
}

class Enum_mapping extends Array {
    constructor(...args) {
        super(...args);
    }

    apply(instance) {
        return this[instance.type.id](instance);
    }
}

export const make_string = (infix, prefix="", suffix="") => (iter) => {
    let result = prefix;

    let first = true;

    for(const elem of iter) {
        result += (first ? "" : infix) + elem.toString();
        first = false;
    }

    return result + suffix;
}