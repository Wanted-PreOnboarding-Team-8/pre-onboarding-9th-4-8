import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOrder, IOrderReducer } from '@/interface/order';
import { getOrderList } from '@/api/order';
import { TODAY } from '@/constants/order';

export const getOrders = createAsyncThunk<IOrder[]>(
  'order/getOrderList',
  getOrderList,
);

const initialState: IOrderReducer = {
  isLoading: true,
  error: null,
  orderList: [],
};
const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    filterByToday: (state) => {
      const filtered = state.orderList.filter(
        (order) => order.transaction_time.split(' ')[0] === TODAY,
      );
      return { ...state, orderList: filtered };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.orderList = action.payload;
    });
    builder.addCase(getOrders.rejected, (state) => {
      state.isLoading = false;
      state.error = '주문 내역을 가져올 수 없습니다.';
    });
  },
});

export const { filterByToday } = orderSlice.actions;

export default orderSlice.reducer;
