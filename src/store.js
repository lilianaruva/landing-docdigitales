import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './redux/reducers/Articles';

export const store = configureStore({
  reducer: {
    article: articlesReducer,
  },
})