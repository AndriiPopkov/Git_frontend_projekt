const defaultState = {}

const PRODUCT = 'PRODUCT'

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCT:
            return action.payload 
        default:
            return state
    }
}

export const productAction = (payload) => ({ type: PRODUCT, payload })
