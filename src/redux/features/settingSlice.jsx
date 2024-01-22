import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";

export const createSetting = createAsyncThunk(
    "createSetting",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/settings", data);
            toast.success("Support Successfully");
            navigate("/settings");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getSettings = createAsyncThunk(
    "getSettings",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/settings` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getSetting = createAsyncThunk(
    "getSetting",
    async (planId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/settings/${planId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updateSetting = createAsyncThunk(
    "updateSetting",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/settings/${id}`, updatedData, {
                headers: {
                    "Content-type": "multipart/form-date",
                }
            });
            toast.success("Setting Updated Successfully");
            navigate("/settings");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteSetting = createAsyncThunk(
    "deleteSetting",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/settings/${id}`);
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteSettings = createAsyncThunk(
    "deleteSettings",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/settings/deleteAll`, { ids: ids });
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


const settingSlice = createSlice({
    name: "settings",
    initialState: {
        setting: {},
        settings: [],
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
        builder.addCase(createSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.setting = action.payload;
        });
        builder.addCase(createSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.settings = action.payload.data;
        });
        builder.addCase(getSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.setting = action.payload;
        });
        builder.addCase(getSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updateSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateSetting.fulfilled, (state, action) => {
            state.loading = false;
            state.setting = action.payload.data;
        });
        builder.addCase(updateSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deleteSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteSetting.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.settings = state.settings.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deleteSetting.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deleteSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.settings = action.payload;
        });
        builder.addCase(deleteSettings.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = settingSlice.actions;

export default settingSlice.reducer;