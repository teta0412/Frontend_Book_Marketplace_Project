import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import cartReducer from "./Cart/Reducer";
import menuItemReducer from "./Menu/Reducer";
import { orderReducer } from "./Order/Reducer";
import storeReducer from "./Store/Reducer";
import storesOrderReducer from "./StoreOrder/Reducer";

const rooterReducer = combineReducers ({
    auth:authReducer,
    store:storeReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    storeOrder:storesOrderReducer
})

export const store = legacy_createStore(rooterReducer,applyMiddleware(thunk));
