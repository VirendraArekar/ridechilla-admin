import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createUser = createAsyncThunk(
  "createUser",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      // const response = await API.post("/users", data,  {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   }
      // });
      const response = await axios.post("http://195.35.7.26:8080/api/v1/users", data, {headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
      }}) 
      // const response = await API.post("/users", data, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
      toast.success("Added Successfully");
      navigate("/users");
      return response.data;
    } catch (err) {
      console.log('ERROR --------------------------', err)
      return rejectWithValue(err.response.data);
    }
  }
);


export const getUsers = createAsyncThunk(
  "getUsers",
  async (query = '', { rejectWithValue }) => {
    try {
      const response = await API.get(`/users` + query);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
    "getUser",
    async (userId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/users/${userId}`);;
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/users/${id}`, updatedData);
      toast.success("Tour Updated Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/users/${id}`);
      toast.success("User Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUsers = createAsyncThunk(
    "deleteUsers",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/users/deleteAll`, {ids : ids});
        toast.success("User Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const userSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
    users: [],
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
    builder.addCase(createUser.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
    });
    builder.addCase(createUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getUsers.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getUsers.fulfilled,(state,action)=>{
        state.loading = false;
        state.users = action.payload;
    });
    builder.addCase(getUsers.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getUser.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
    });
    builder.addCase(getUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateUser.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateUser.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.users = state.users.map((item) =>
            item._id === id ? action.payload : item
            );
        }
    });
    builder.addCase(updateUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteUser.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.users = state.users.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteUsers.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteUsers.fulfilled,(state,action)=>{
        state.loading = false;
        state.users = action.payload;
    });
    builder.addCase(deleteUsers.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = userSlice.actions;

export default userSlice.reducer;