import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createLive = createAsyncThunk(
  "createLive",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/live-consultations", data);
      toast.success("Added Successfully");
      navigate("/live-consultations");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getLives = createAsyncThunk(
  "getLives",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/live-consultations` + query);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getLive = createAsyncThunk(
    "getLive",
    async (eventId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/live-consultations/${eventId}`);;
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateLive = createAsyncThunk(
  "updateLive",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/live-consultations/${id}`, updatedData);
      toast.success("Live consultation Updated Successfully");
      navigate("/live-consultations");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteLive = createAsyncThunk(
  "deleteLive",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/live-consultations/${id}`);
      toast.success("Live consultation Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteLives = createAsyncThunk(
    "deleteLives",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/live-consultations/deleteAll`, {ids : ids});
        toast.success("Live consultation Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const liveSlice = createSlice({
  name: "lives",
  initialState: {
    live: {},
    lives: [],
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
    builder.addCase(createLive.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createLive.fulfilled,(state,action)=>{
        state.loading = false;
        state.live = action.payload;
    });
    builder.addCase(createLive.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getLives.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getLives.fulfilled,(state,action)=>{
        state.loading = false;
        state.lives = action.payload.data;
    });
    builder.addCase(getLives.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getLive.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getLive.fulfilled,(state,action)=>{
        state.loading = false;
        state.live = action.payload;
    });
    builder.addCase(getLive.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateLive.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateLive.fulfilled,(state,action)=>{
        state.loading = false;
        state.live = action.payload.data;
    });
    builder.addCase(updateLive.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteLive.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteLive.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.lives = state.lives.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteLive.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteLives.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteLives.fulfilled,(state,action)=>{
        state.loading = false;
        state.lives = action.payload;
    });
    builder.addCase(deleteLives.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = liveSlice.actions;

export default liveSlice.reducer;