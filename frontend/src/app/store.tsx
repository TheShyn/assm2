import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import { cartReducer } from '../Slices/Cart';
import storage from 'redux-persist/lib/storage';
import productApi, { productReducer } from '../api/product';
import categoryApi, { categoryReducer } from '../api/categories';
import authApi, { authReducer } from '../api/auth';
import userSlicer from '../Slices/Auth'

const persistConfig = {
    key: 'root',
    storage,
    whileList: ['auth', 'cartUser'], // luu strorage
    backlist: ['products'] // k luu vaoo storage
}


const rootReducer = combineReducers({
    [productApi.reducerPath]: productReducer,
    [categoryApi.reducerPath]: categoryReducer,
    [authApi.reducerPath]: authReducer,
<<<<<<< HEAD
    cart: cartReducer
=======
    user: userSlicer
>>>>>>> 92ee603dd113c752a1d29d528fccafd863ecc17c
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(productApi.middleware)
            .concat(categoryApi.middleware)
            .concat(authApi.middleware)
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default store
export const persistor = persistStore(store)