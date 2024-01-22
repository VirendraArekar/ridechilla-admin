import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios from "axios";

export const createSupport = createAsyncThunk(
    "createSupport",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/user/supports", data);
            toast.success("Support Successfully");
            navigate("/supports");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getSupports = createAsyncThunk(
    "getSupports",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/user/supports` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getSupport = createAsyncThunk(
    "getSupport",
    async (planId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/user/supports/${planId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updateSupport = createAsyncThunk(
    "updateSupport",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/user/supports/${id}`, updatedData);
            toast.success("Support Updated Successfully");
            navigate("/supports");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteSupport = createAsyncThunk(
    "deleteSupport",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/user/supports/${id}`);
            toast.success("Support Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteSupports = createAsyncThunk(
    "deleteSupports",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/user/supports/deleteAll`, { ids: ids });
            toast.success("Support Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


const supportSlice = createSlice({
    name: "supports",
    initialState: {
        support: {},
        supports: [],
        currentPage: 1,
        numberOfPages: null,
        error: "",
        loading: false,
        message: 'Unable to call api'
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createSupport.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createSupport.fulfilled, (state, action) => {
            state.loading = false;
            state.support = action.payload;
        });
        builder.addCase(createSupport.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getSupports.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getSupports.fulfilled, (state, action) => {
            state.loading = false;
            state.supports = action.payload.data;
        });
        builder.addCase(getSupports.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getSupport.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getSupport.fulfilled, (state, action) => {
            state.loading = false;
            state.support = action.payload;
        });
        builder.addCase(getSupport.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updateSupport.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateSupport.fulfilled, (state, action) => {
            state.loading = false;
            state.support = action.payload.data;
        });
        builder.addCase(updateSupport.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deleteSupport.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteSupport.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.supports = state.supports.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deleteSupport.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deleteSupports.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteSupports.fulfilled, (state, action) => {
            state.loading = false;
            state.supports = action.payload;
        });
        builder.addCase(deleteSupports.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = supportSlice.actions;

export default supportSlice.reducer;