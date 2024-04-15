import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './todoSlice'

// creating a store for app
const store = configureStore({
    reducer: {
        todo : todoSlice,
       
    }
});


export default store;