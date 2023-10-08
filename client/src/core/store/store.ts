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
import modalsSlice from './modals/modals.slice'

const persistConfig = {
    key: 'CHERRY',
    storage,
    whitelist: ['cart', 'favorites', 'notifications', 'search']
}

const rootReducer = combineReducers({
    cart: cartSlice,
    modals: modalsSlice,
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