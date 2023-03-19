import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOrderReducer } from '@/interface/order';
import { getOrderList } from '@/api/order';
import { filterByToday } from '@/lib/utils/filterHelper';

export const getOrders = createAsyncThunk(
  'order/getOrderList',
  async (param: { field: 'today' | 'total' }) => {
    const response = await getOrderList();
    if (param.field === 'today') {
      return filterByToday(response);
    }
    return response;
  },
);

const initialState: IOrderReducer = {
  isLoading: true,
  error: null,
  orderList: [],
};
const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
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

export default orderSlice.reducer;
