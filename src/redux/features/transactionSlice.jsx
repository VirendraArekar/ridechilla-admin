import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createTransaction = createAsyncThunk(
  "createTransaction",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/transactions", data);
      toast.success("Added Successfully");
      navigate("/transactions");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getTransactions = createAsyncThunk(
  "getTransactions",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/transactions` + query);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTransaction = createAsyncThunk(
    "getTransaction",
    async (notificationId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/transactions/${transactionId}`);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateTransaction = createAsyncThunk(
  "updateTransaction",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/transactions/${id}`, updatedData);
      toast.success("Transaction Updated Successfully");
      navigate("/transactions");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "deleteTransaction",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/transactions/${id}`);
      toast.success("Transaction Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteTransactions = createAsyncThunk(
    "deleteTransactions",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/transactions/deleteAll`, {ids : ids});
        toast.success("Transaction Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transaction: {},
    transactions: [],
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
    message : 'Unable to call api'
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(createTransaction.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createTransaction.fulfilled,(state,action)=>{
        state.loading = false;
        state.transaction = action.payload;
    });
    builder.addCase(createTransaction.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getTransactions.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getTransactions.fulfilled,(state,action)=>{
        state.loading = false;
        state.transactions = action.payload.data;
    });
    builder.addCase(getTransactions.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getTransaction.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getTransaction.fulfilled,(state,action)=>{
        state.loading = false;
        state.transaction = action.payload;
    });
    builder.addCase(getTransaction.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateTransaction.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateTransaction.fulfilled,(state,action)=>{
        state.loading = false;
        state.transaction = action.payload.data;
    });
    builder.addCase(updateTransaction.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteTransaction.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteTransaction.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.transactions = state.transactions.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteTransaction.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteTransactions.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteTransactions.fulfilled,(state,action)=>{
        state.loading = false;
        state.transactions = action.payload;
    });
    builder.addCase(deleteTransactions.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = transactionSlice.actions;

export default transactionSlice.reducer;