import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'models/IUser';
import { AppDispatch } from 'store/store';
import { userSlice } from './UserSlice';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching());
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.userFetchingSuccess(response.data));
//   } catch (err: any) {
//     dispatch(userSlice.actions.userFetchingError(err.message));
//   }
// };

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
