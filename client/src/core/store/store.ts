import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore, PURGE,
    REGISTER, REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartSlice from "./basket/basket.slice"
import promotionsSlice from './promotions/promotions.slice'
import productsSlice from './products/products.slice'

const persistConfig = {
    key: 'CHERRY',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartSlice,
    promotions: promotionsSlice,
    products: productsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const storePersist = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(storePersist)

export type TypeRootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof storePersist.dispatch