const counterInitialState = {
    value: 0
}

const counterActions = {

    increment: state => {
        const updateValue = state.value + 1;
        return {
            value: updateValue
        }
    },
    decrement: state => {
        const updateValue = state.value - 1;
        return {
            value: updateValue
        }
    },
}

module.exports = {
    counterInitialState,
    counterActions
}