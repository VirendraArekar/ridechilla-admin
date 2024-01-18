import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createRole = createAsyncThunk(
  "createRole",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/roles", data);
      toast.success("Added Successfully");
      navigate("/roles");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getRoles = createAsyncThunk(
  "getRoles",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/roles` + query);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRole = createAsyncThunk(
    "getRole",
    async (roleId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/roles/${roleId}`);;
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateRole = createAsyncThunk(
  "updateRole",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/roles/${id}`, updatedData);
      toast.success("Role Updated Successfully");
      navigate("/roles");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteRole = createAsyncThunk(
  "deleteRole",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/roles/${id}`);
      toast.success("Role Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteRoles = createAsyncThunk(
    "deleteRoles",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/roles/deleteAll`, {ids : ids});
        toast.success("Role Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const roleSlice = createSlice({
  name: "roles",
  initialState: {
    role: {},
    roles: [],
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
    builder.addCase(createRole.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createRole.fulfilled,(state,action)=>{
        state.loading = false;
        state.role = action.payload;
    });
    builder.addCase(createRole.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getRoles.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getRoles.fulfilled,(state,action)=>{
        state.loading = false;
        state.roles = action.payload.data;
    });
    builder.addCase(getRoles.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getRole.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getRole.fulfilled,(state,action)=>{
        state.loading = false;
        state.role = action.payload;
    });
    builder.addCase(getRole.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateRole.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateRole.fulfilled,(state,action)=>{
        state.loading = false;
        state.role = action.payload.data;
    });
    builder.addCase(updateRole.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteRole.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteRole.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.roles = state.roles.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteRole.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteRoles.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteRoles.fulfilled,(state,action)=>{
        state.loading = false;
        state.roles = action.payload;
    });
    builder.addCase(deleteRoles.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = roleSlice.actions;

export default roleSlice.reducer;