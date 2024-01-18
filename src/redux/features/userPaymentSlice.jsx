import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createUserPayment = createAsyncThunk(
  "createUserPayment",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/payments", data);
      toast.success("Added Successfully");
      navigate("/user/payments");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getUserPayments = createAsyncThunk(
  "getUserPayments",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/payments` + query);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserPayment = createAsyncThunk(
    "getUserPayment",
    async (paymentId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/payments/${paymentId}`);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateUserPayment= createAsyncThunk(
  "updateUserPayment",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/payments/${id}`, updatedData);
      toast.success("User Payment Updated Successfully");
      navigate("/transactions");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUserPayment = createAsyncThunk(
  "deleteUserPayment",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/payments/${id}`);
      toast.success("User payment deleted successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUserPayments = createAsyncThunk(
    "deleteUserPayments",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/payments/deleteAll`, {ids : ids});
        toast.success("User payment deleted successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const userPaymentSlice = createSlice({
  name: "transactions",
  initialState: {
    userPayment: {},
    userPayments: [],
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
    builder.addCase(createUserPayment.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createUserPayment.fulfilled,(state,action)=>{
        state.loading = false;
        state.userPayment = action.payload;
    });
    builder.addCase(createUserPayment.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getUserPayments.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getUserPayments.fulfilled,(state,action)=>{
        state.loading = false;
        state.userPayments = action.payload.data;
    });
    builder.addCase(getUserPayments.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getUserPayment.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getUserPayment.fulfilled,(state,action)=>{
        state.loading = false;
        state.userTransaction = action.payload;
    });
    builder.addCase(getUserPayment.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateUserPayment.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateUserPayment.fulfilled,(state,action)=>{
        state.loading = false;
        state.userPayment = action.payload.data;
    });
    builder.addCase(updateUserPayment.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteUserPayment.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteUserPayment.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.userPayments = state.userPayments.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteUserPayment.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteUserPayments.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteUserPayments.fulfilled,(state,action)=>{
        state.loading = false;
        state.userPayments = action.payload;
    });
    builder.addCase(deleteUserPayments.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = userPaymentSlice.actions;

export default userPaymentSlice.reducer;