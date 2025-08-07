import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// استبدل reducers دول بملفات السلايس اللي هاتنشئها
import usersSlice from '@/Features/Reducers/users/userSlice';

export const store = configureStore({
  reducer: {
    user: usersSlice,
  },
});

// أنواع مخصصة
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
