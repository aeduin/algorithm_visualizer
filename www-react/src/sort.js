import {For_loop, Statement} from "./algorithm_components.js"

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

export const insertion = For_loop([Statement()]);