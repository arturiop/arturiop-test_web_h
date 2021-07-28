import { configureStore } from '@reduxjs/toolkit';
import comments from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    comments,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
