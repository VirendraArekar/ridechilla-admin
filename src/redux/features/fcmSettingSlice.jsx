import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";

export const createFcmSetting = createAsyncThunk(
    "createFcmSetting",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/fcm-setting", data);
            toast.success("Create fcm setting Successfully");
            navigate("/setting/fcm");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getFcmSettings = createAsyncThunk(
    "getFcmSettings",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/fcm-setting` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getFcmSetting = createAsyncThunk(
    "getFcmSetting",
    async (planId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/fcm-setting/${planId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updateFcmSetting = createAsyncThunk(
    "updateFcmSetting",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/fcm-setting/${id}`, updatedData);
            toast.success("Setting Updated Successfully");
            navigate("/setting/fcm");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteFcmSetting = createAsyncThunk(
    "deleteFcmSetting",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/fcm-setting/${id}`);
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteFcmSettings = createAsyncThunk(
    "deleteFcmSettings",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/fcm-setting/deleteAll`, { ids: ids });
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const fcmSettingSlice = createSlice({
    name: "fcmSettings",
    initialState: {
        fcmSetting: {},
        fcmSettings: [],
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
        builder.addCase(createFcmSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createFcmSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.fcmSetting = action.payload;
        });
        builder.addCase(createFcmSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getFcmSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getFcmSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.fcmSettings = action.payload.data;
        });
        builder.addCase(getFcmSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getFcmSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getFcmSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.fcmSetting = action.payload;
        });
        builder.addCase(getFcmSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updateFcmSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateFcmSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.fcmSetting = action.payload.data;
        });
        builder.addCase(updateFcmSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deleteFcmSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteFcmSetting.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.fcmSettings = state.fcmSettings.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deleteFcmSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deleteFcmSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteFcmSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.fcmSettings = action.payload;
        });
        builder.addCase(deleteFcmSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = fcmSettingSlice.actions;

export default fcmSettingSlice.reducer;