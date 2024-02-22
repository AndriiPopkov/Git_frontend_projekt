import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        orderModal: false,
        saleModal: false
    },
    reducers: {
        changeOrderModal(state, action){
            state.orderModal = action.payload
        }
    }
})

export default modalSlice.reducer
export const {changeOrderModal} = modalSlice.actions