import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios from "axios";

export const createPlan = createAsyncThunk(
    "createPlan",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/user/plans", data, {
                headers: {
                    "Content-type": "multipart/form-date",
                }
            });
            toast.success("Offer Successfully");
            navigate("/plans");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getPlans = createAsyncThunk(
    "getPlans",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/user/plans` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getPlan = createAsyncThunk(
    "getPlan",
    async (planId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/user/plans/${planId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updatePlan = createAsyncThunk(
    "updatePlan",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/user/plans/${id}`, updatedData);
            toast.success("Plan Updated Successfully");
            navigate("/plans");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deletePlan = createAsyncThunk(
    "deletePlan",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/user/plans/${id}`);
            toast.success("Plan Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deletePlans = createAsyncThunk(
    "deletePlans",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/user/plans/deleteAll`, { ids: ids });
            toast.success("Plan Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


const planSlice = createSlice({
    name: "plans",
    initialState: {
        plan: {},
        plans: [],
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
        builder.addCase(createPlan.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createPlan.fulfilled, (state, action) => {
            state.loading = false;
            state.plan = action.payload;
        });
        builder.addCase(createPlan.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getPlans.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPlans.fulfilled, (state, action) => {
            state.loading = false;
            state.plans = action.payload.data;
        });
        builder.addCase(getPlans.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getPlan.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPlan.fulfilled, (state, action) => {
            state.loading = false;
            state.plan = action.payload;
        });
        builder.addCase(getPlan.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updatePlan.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updatePlan.fulfilled, (state, action) => {
            state.loading = false;
            state.plan = action.payload.data;
        });
        builder.addCase(updatePlan.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deletePlan.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deletePlan.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.plans = state.plans.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deletePlan.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deletePlans.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deletePlans.fulfilled, (state, action) => {
            state.loading = false;
            state.plans = action.payload;
        });
        builder.addCase(deletePlans.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = planSlice.actions;

export default planSlice.reducer;