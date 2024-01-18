import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createUserSetting = createAsyncThunk(
  "createUserSetting",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/settings", data);
      toast.success("Added Successfully");
      navigate("/user/settings");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getUserSettings = createAsyncThunk(
  "getUserSettings",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/settings` + query);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserSetting = createAsyncThunk(
    "getUserSetting",
    async (eventId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/settings/${eventId}`);;
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateUserSetting = createAsyncThunk(
  "updateUserSetting",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/settings/${id}`, updatedData);
      toast.success("User setting updated successfully");
      navigate("/user/settings");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUserSetting = createAsyncThunk(
  "deleteUserSetting",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/settings/${id}`);
      toast.success("User setting deleted successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUserSettings = createAsyncThunk(
    "deleteUserSettings",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/settings/deleteAll`, {ids : ids});
        toast.success("User setting deleted successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const userSettingSlice = createSlice({
  name: "lives",
  initialState: {
    userSetting: {},
    userSettings: [],
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
    builder.addCase(createUserSetting.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createUserSetting.fulfilled,(state,action)=>{
        state.loading = false;
        state.useSettings = action.payload;
    });
    builder.addCase(createUserSetting.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getUserSettings.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getUserSettings.fulfilled,(state,action)=>{
        state.loading = false;
        state.userSettings = action.payload.data;
    });
    builder.addCase(getUserSettings.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getUserSetting.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getUserSetting.fulfilled,(state,action)=>{
        state.loading = false;
        state.userSetting = action.payload;
    });
    builder.addCase(getUserSetting.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateUserSetting.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateUserSetting.fulfilled,(state,action)=>{
        state.loading = false;
        state.userSetting = action.payload.data;
    });
    builder.addCase(updateUserSetting.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteUserSetting.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteUserSetting.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.deleteUserSetting = state.deleteUserSetting.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteUserSetting.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteUserSettings.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteUserSettings.fulfilled,(state,action)=>{
        state.loading = false;
        state.userSettings = action.payload;
    });
    builder.addCase(deleteUserSettings.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = userSettingSlice.actions;

export default userSettingSlice.reducer;