import {visualise, to_string, func} from "./algorithm_components/mod";
import {for_loop, assign, block} from "./algorithm_components/statements";
import { variable, int } from "./algorithm_components/variables";
import { constant, less_than, binary_operator, operator, plus } from "./algorithm_components/expressions";

export function insertion_sort(sort_target) {
    for(let i = 0; i < sort_target.length(); i++) {
        const current = sort_target.get_at(i);
        
        let j = i-1;
        while(j >= 0 && current < sort_target.get_at(j)) {
            sort_target.set_at(j + 1, sort_target.get_at(j))
            j--;
        }

        sort_target.set_at(j + 1, current);
    }
}

export const insertion = (() => {
    // Immediately invoked function
    let i = int("i", 0);
    let input_array = int("input_array", []);

    return func("", [input_array], for_loop(
        [
            assign(i, constant(0)),
            binary_operator(less_than())(i, i),
            assign(i, binary_operator(plus())(i, constant(1)))
        ],
        block([
            assign(i, constant(2)),
            assign(i, constant(3)),
        ])
    ));
})();

console.log(to_string(insertion));