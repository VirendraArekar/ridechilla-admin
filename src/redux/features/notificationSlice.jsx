import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createNotification = createAsyncThunk(
  "createNotification",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/notifications", data);
      toast.success("Added Successfully");
      navigate("/notifications");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getNotifications = createAsyncThunk(
  "getNotifications",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/notifications` + query);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getNotification = createAsyncThunk(
    "getNotification",
    async (notificationId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/notifications/${notificationId}`);;
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateNotification = createAsyncThunk(
  "updateNotification",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/notifications/${id}`, updatedData);
      toast.success("Notification Updated Successfully");
      navigate("/notifications");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteNotification = createAsyncThunk(
  "deleteNotification",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/notifications/${id}`);
      toast.success("Notification Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteNotifications = createAsyncThunk(
    "deleteNotifications",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/notifications/deleteAll`, {ids : ids});
        toast.success("Notification Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notification: {},
    notifications: [],
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
    builder.addCase(createNotification.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createNotification.fulfilled,(state,action)=>{
        state.loading = false;
        state.notification = action.payload;
    });
    builder.addCase(createNotification.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getNotifications.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getNotifications.fulfilled,(state,action)=>{
        state.loading = false;
        state.notifications = action.payload.data;
    });
    builder.addCase(getNotifications.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getNotification.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getNotification.fulfilled,(state,action)=>{
        state.loading = false;
        state.notification = action.payload;
    });
    builder.addCase(getNotification.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateNotification.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateNotification.fulfilled,(state,action)=>{
        state.loading = false;
        state.notification = action.payload.data;
    });
    builder.addCase(updateNotification.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteNotification.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteNotification.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.notifications = state.notifications.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteNotification.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteNotifications.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteNotifications.fulfilled,(state,action)=>{
        state.loading = false;
        state.notifications = action.payload;
    });
    builder.addCase(deleteNotifications.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = notificationSlice.actions;

export default notificationSlice.reducer;