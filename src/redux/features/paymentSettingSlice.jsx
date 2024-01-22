import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";

export const createPaymentSetting = createAsyncThunk(
    "createPaymentSetting",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/payment-setting", data);
            toast.success("Create setting Successfully");
            navigate("/setting/payment");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getPaymentSettings = createAsyncThunk(
    "getPaymentSettings",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/payment-setting` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getPaymentSetting = createAsyncThunk(
    "getPaymentSetting",
    async (planId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/payment-setting/${planId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updatePaymentSetting = createAsyncThunk(
    "updatePaymentSetting",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/payment-setting/${id}`, updatedData);
            toast.success("Setting Updated Successfully");
            navigate("/setting/payment");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deletePaymentSetting = createAsyncThunk(
    "deletePaymentSetting",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/payment-setting/${id}`);
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deletePaymentSettings = createAsyncThunk(
    "deletePaymentSettings",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/payment-setting/deleteAll`, { ids: ids });
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const paymentSettingSlice = createSlice({
    name: "paymentSettings",
    initialState: {
        paymentSetting: {},
        paymentSettings: [],
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
        builder.addCase(createPaymentSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createPaymentSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.paymentSetting = action.payload;
        });
        builder.addCase(createPaymentSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getPaymentSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPaymentSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.paymentSettings = action.payload.data;
        });
        builder.addCase(getPaymentSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getPaymentSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPaymentSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.paymentSetting = action.payload;
        });
        builder.addCase(getPaymentSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updatePaymentSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updatePaymentSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.paymentSetting = action.payload.data;
        });
        builder.addCase(updatePaymentSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deletePaymentSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deletePaymentSetting.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.paymentSettings = state.paymentSettings.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deletePaymentSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deletePaymentSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deletePaymentSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.paymentSettings = action.payload;
        });
        builder.addCase(deletePaymentSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = paymentSettingSlice.actions;

export default paymentSettingSlice.reducer;