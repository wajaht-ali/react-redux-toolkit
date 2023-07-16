// import {configureStore} from '@reduxjs/toolkit'; 

//     const store = configureStore({
//         reducer: {

//         },
//     });

// export default configureStore;

// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer: {

//     },
// });

// import {configureStore} from "@redujs/toolkit";
// const store = configureStore( {
//     reducer: {
//         custom: customReducer,
//     },
// });

// import { configureStore } from "@reduxjs/toolkit";

// import { customReducer } from "./Reducers";
// const store = configureStore({
//     reducer: {
//         custom: customReducer,
//     },
// });

import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore ({
    reducer: {
        custom: customReducer,
    },
});

export default store;