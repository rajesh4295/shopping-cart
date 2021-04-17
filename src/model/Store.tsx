export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface ICartItem extends IProduct {
    count: number;
}

export interface IState {
    products: IProduct[];
    cart: ICartItem[];
    wishlist: IProduct[];
    initStore?: (payload: IProduct[]) => void;
    addCart?: (payload: ICartItem) => void;
    removeCart?: (payload: ICartItem) => void;
    addWishlist?: (payload: IProduct) => void;
    removeWishlist?: (payload: IProduct) => void;
}

export interface IAction {
    type: StoreAction;
    payload: IState | any;
}

export enum StoreAction {
    INIT_STORE = "init_store",
    ADD_CART = "add_cart",
    REMOVE_CART = "remove_cart",
    ADD_WISHLIST = "add_wishlist",
    REMOVE_WISHLIST = "remove_wishlist"
}
