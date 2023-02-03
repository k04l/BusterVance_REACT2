import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
// import { commentsReducer } from '../features/comments/commentsSlice';
// import { partnersReducer } from '../features/partners/partnerSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
// import { userReducer } from '../features/user/userSlice';
import { builditemsReducer } from '../features/buildItems/buildItemsSlice';
// import counterReducer from '../features/counter/counterSlice';


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    builditems: builditemsReducer,
    promotions: promotionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
