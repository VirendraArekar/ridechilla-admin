import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";

export const createEmailSetting = createAsyncThunk(
    "createEmailSetting",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/email-setting", data);
            toast.success("Create setting Successfully");
            navigate("/setting/email");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getEmailSettings = createAsyncThunk(
    "getEmailSettings",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/email-setting` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getEmailSetting = createAsyncThunk(
    "getEmailSetting",
    async (planId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/email-setting/${planId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updateEmailSetting = createAsyncThunk(
    "updateEmailSetting",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/email-setting/${id}`, updatedData);
            toast.success("Setting Updated Successfully");
            navigate("/setting/email");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteEmailSetting = createAsyncThunk(
    "deleteEmailSetting",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/email-setting/${id}`);
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteEmailSettings = createAsyncThunk(
    "deleteEmailSettings",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/email-setting/deleteAll`, { ids: ids });
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const emailSettingSlice = createSlice({
    name: "emailSettings",
    initialState: {
        emailSetting: {},
        emailSettings: [],
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
        builder.addCase(createEmailSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createEmailSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.emailSetting = action.payload;
        });
        builder.addCase(createEmailSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getEmailSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getEmailSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.emailSettings = action.payload.data;
        });
        builder.addCase(getEmailSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getEmailSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getEmailSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.emailSetting = action.payload;
        });
        builder.addCase(getEmailSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updateEmailSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateEmailSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.emailSetting = action.payload.data;
        });
        builder.addCase(updateEmailSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deleteEmailSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteEmailSetting.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.emailSettings = state.emailSettings.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deleteEmailSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deleteEmailSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteEmailSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.emailSettings = action.payload;
        });
        builder.addCase(deleteEmailSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = emailSettingSlice.actions;

export default emailSettingSlice.reducer;