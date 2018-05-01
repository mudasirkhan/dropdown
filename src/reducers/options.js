const options = (state = [], action) => {
    switch (action.type) {
        case 'ADD_OPTION':
            return [
                ...state,
                action.text
            ]
        default:
            return state
    }
}
export default options