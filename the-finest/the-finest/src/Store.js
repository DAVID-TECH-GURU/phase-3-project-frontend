import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./features/products/productsSlice"
import currentUserReducer from "./features/signup/SigninSlice"
import imagesReducer from "./features/images/ImagesSlice"
import cartsReducer from "./features/cart/cartsSlice"
import ordersReducer from "./features/orders/ordersSlice"

const store = configureStore({
	reducer: {
		products: productsReducer,
		currentUser: currentUserReducer,
		images: imagesReducer,
		carts: cartsReducer,
		orders: ordersReducer,
	},
})

export default store