import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";

export const createPage = createAsyncThunk(
    "createPage",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/pages", data);
            toast.success("Create fcm setting Successfully");
            navigate("/setting/page");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getPages = createAsyncThunk(
    "getPages",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/pages` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getPage = createAsyncThunk(
    "getPage",
    async (planId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/pages/${planId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updatePage = createAsyncThunk(
    "updatePage",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/pages/${id}`, updatedData);
            toast.success("Setting Updated Successfully");
            navigate("/setting/page");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deletePage = createAsyncThunk(
    "deletePage",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/pages/${id}`);
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deletePages = createAsyncThunk(
    "deletePages",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/pages/deleteAll`, { ids: ids });
            toast.success("Setting Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const pageSlice = createSlice({
    name: "pages",
    initialState: {
        page: {},
        pages: [],
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
        builder.addCase(createPage.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page = action.payload;
        });
        builder.addCase(createPage.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getPages.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPages.fulfilled, (state, action) => {
            state.loading = false;
            state.pages = action.payload.data;
        });
        builder.addCase(getPages.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getPage.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page = action.payload;
        });
        builder.addCase(getPage.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updatePage.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updatePage.fulfilled, (state, action) => {
            state.loading = false;
            state.page = action.payload.data;
        });
        builder.addCase(updatePage.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deletePage.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deletePage.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.pages = state.pages.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deletePage.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deletePages.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deletePages.fulfilled, (state, action) => {
            state.loading = false;
            state.pages = action.payload;
        });
        builder.addCase(deletePages.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;