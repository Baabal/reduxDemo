import { createStore } from "redux";
import rootReducer from "./Redux/recuders";

const store = createStore(rootReducer);

export default store;

// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {
//     store: rootReducer
//   }
// })