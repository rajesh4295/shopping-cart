import { IAction, ICartItem, IState, StoreAction } from "../model/Store";

export const StoreReducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case StoreAction.INIT_STORE:
            return {
                ...state,
                products: [...state.products, ...action.payload]
            };
        case StoreAction.ADD_CART: {
            const POS = state.cart.findIndex(c => c.id === action.payload.id);
            if (POS > -1) {
                // if item already exists in cart, then just increment the count.
                return {
                    ...state,
                    cart: [...state.cart.map(c => c.id === action.payload.id ? {...c, count: c.count++}: c)]
                }
            }
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        };
        case StoreAction.REMOVE_CART: {
            const POS = state.cart.findIndex(c => c.id === action.payload.id);
            console.log(POS, state.cart[POS].count);
            if ( POS > -1 && state.cart[POS].count >= 1) {
                // if item already exists in cart, then just decrement the count.
                return {
                    ...state,
                    cart: [...state.cart.map(c => c.id === action.payload.id ? {...c, count: c.count--}: c)]
                }
            }
            console.log("after if")
            return {
                ...state,
                cart: [...state.cart.filter(p => p.id !== action.payload.id)]
            }
        };
        case StoreAction.ADD_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            };
        case StoreAction.REMOVE_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist.filter(p => p.id !== action.payload.id)]
            };
        default:
            return state;
    }
}