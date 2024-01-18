import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createService = createAsyncThunk(
  "createService",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/services", data);
      toast.success("Added Successfully");
      navigate("/services");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getServices = createAsyncThunk(
  "getServices",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/services` + query);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getService = createAsyncThunk(
    "getService",
    async (roleId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/services/${roleId}`);;
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateService = createAsyncThunk(
  "updateService",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/services/${id}`, updatedData);
      toast.success("Service Updated Successfully");
      navigate("/services");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteService = createAsyncThunk(
  "deleteService",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/services/${id}`);
      toast.success("Service Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteServices = createAsyncThunk(
    "deleteServices",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/services/deleteAll`, {ids : ids});
        toast.success("Service Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const serviceSlice = createSlice({
  name: "services",
  initialState: {
    service: {},
    services: [],
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
    builder.addCase(createService.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createService.fulfilled,(state,action)=>{
        state.loading = false;
        state.service = action.payload;
    });
    builder.addCase(createService.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getServices.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getServices.fulfilled,(state,action)=>{
        console.log('ME --------------------------------', action.payload)
        state.loading = false;
        state.services = action.payload.data;
    });
    builder.addCase(getServices.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getService.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getService.fulfilled,(state,action)=>{
        state.loading = false;
        state.service = action.payload;
    });
    builder.addCase(getService.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateService.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateService.fulfilled,(state,action)=>{
        state.loading = false;
        state.service = action.payload.data;
    });
    builder.addCase(updateService.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteService.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteService.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.services = state.services.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteService.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteServices.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteServices.fulfilled,(state,action)=>{
        state.loading = false;
        state.services = action.payload;
    });
    builder.addCase(deleteServices.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = serviceSlice.actions;

export default serviceSlice.reducer;