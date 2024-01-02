import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { bikeApi } from './rtkQuery/bikes';
import { bikeReducer } from './slice';

export const store = configureStore({
  reducer: combineReducers({
    [bikeApi.reducerPath]: bikeApi.reducer,
    bikeState: bikeReducer,
  }),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    bikeApi.middleware,
  ],
});
