import { IProduct } from "@/core/models/product.model"
import { createSlice } from "@reduxjs/toolkit"

type BasketProductsProps = {
    quantity: number
    product: IProduct
}

interface CartSliceState {
    isLoading: boolean
    totalPrice: number
    totalCount: number
    items: BasketProductsProps[]
}

const initialState: CartSliceState = {
    isLoading: false,
    totalPrice: 0,
    totalCount: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIncreaseQty(state, action) {
            const findItem = state.items.find(obj => obj.product.id === +action.payload)
            findItem && findItem.quantity++

            state.totalPrice = state.items.reduce((sum, obj) => {
                return Math.floor(+obj.product.price * +obj.quantity + sum)
            }, 0)
        },
        setDecreaseQty(state, action) {
            const findItem = state.items.find(obj => obj.product.id === +action.payload)
            findItem && findItem.quantity--

            state.totalPrice = state.items.reduce((sum, obj) => {
                return Math.floor(+obj.product.price * +obj.quantity + sum)
            }, 0)
        },
        setToggleBasketProduct(state, action) {
            const index = state.items.findIndex(item => item.product.id === action.payload.id)

            if (index !== -1) {
                state.items = state.items.filter(item => +item.product.id !== +action.payload.id)
            } else {
                state.items.push({ quantity: 1, product: action.payload })
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return Math.floor(+obj.product.price * +obj.quantity + sum)
            }, 0)

            state.totalCount = state.items.reduce((sum) => {
                return sum + 1
            }, 0)
        }
    }
})

export const { setToggleBasketProduct, setIncreaseQty, setDecreaseQty } = cartSlice.actions
export default cartSlice.reducer