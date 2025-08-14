import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import usersSlice from '@/Features/Reducers/userSlice';
import addressSlice from '@/Features/Reducers/AddressSlices';

export const store = configureStore({
  reducer: {
    user: usersSlice,
    address: addressSlice
  },
});

// أنواع مخصصة
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
