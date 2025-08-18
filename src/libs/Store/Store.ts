import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import usersSlice from '@/Features/Reducers/userSlice';
import addressSlice from '@/Features/Reducers/addressSlices';
import categorySlice from '@/Features/Reducers/categorySlice';
import brandSlice from '@/Features/Reducers/brandSlice';

export const store = configureStore({
  reducer: {
    user: usersSlice,
    address: addressSlice,
    category:categorySlice,
    brand:brandSlice,
  },
});

// أنواع مخصصة
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
