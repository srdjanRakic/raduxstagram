function posts(state = [], action) {
    const { type, index } = action;
    switch(type) {
        case 'INCREMENT_LIKES':
            console.log("incrementing likes!");
            return [
                ...state.slice(0, index), // before the one we are updating
                {...state[index], likes: state[index].likes + 1 },
                ...state.slice(index + 1), // after the one we are updating
            ];
        default:
            return state;
    }

    return state;
}

export default posts;