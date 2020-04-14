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

export const insertion = {
    main: (sort_target) => {
        loop_range(0, sort_target.length(), {sort_target}, insertion.insert_element);
    },

    insert_element: (state, i) => {
        loop_while({sort_target: state.sort_target, i, j: i - 1}, insertion.swap_while);
    },

    swap_while: (state) => {
        if(state.j >=0 && state.current < sort_target.get_at(state.j)) {
            
        }
        else {
            return [false, {}];
        }
    }
}

function loop_range(from, to, initial_state, fn) {
    let state = initial_state;
    for(let i = from; i < to; i++) {
        state = {...state, ...fn(state, i)};
    }

    return state;
}

function loop_while(initial_state, fn) {
    let state = initial_state;
    let looping = true;

    while(looping) {
        [looping, new_state] = fn(state);
        state = {...new_state, ...state};
    };

    return state;
}