export class Integer {
    constructor(name, initial_value=null) {
        this.name = name;
        this.value = initial_value;
    }

    set(other_integer) {
        this.value = other_integer.get_value();
    }

    get_value() {
        return this.value;
    }
    set_value(value){
        this.value = value;
    }
}

export class IntegerArray {
    constructor(name, values=[]) {
        this.name = name;
        this.values = values;
    }

    get_at(i) {
        return this.values[i]
    }
    set_at(i, value) {
        this.values[i] =value
    }
}