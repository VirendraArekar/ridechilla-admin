import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios from "axios";

export const createOffer = createAsyncThunk(
    "createOffer",
    async ({ data, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post("/user/offers", data, {
                headers: {
                    "Content-type": "multipart/form-date",
                }
            });
            toast.success("Offer Successfully");
            navigate("/offers");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const getOffers = createAsyncThunk(
    "getOffers",
    async (query, { rejectWithValue }) => {
        try {
            const response = await API.get(`/user/offers` + query);;
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getOffer = createAsyncThunk(
    "getOffer",
    async (offerId, { rejectWithValue }) => {
        try {
            const response = await API.get(`/user/offers/${offerId}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const updateOffer = createAsyncThunk(
    "updateOffer",
    async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await API.patch(`/user/offers/${id}`, updatedData, {
                headers: {
                    "Content-type": "multipart/form-date",
                }
            });
            toast.success("Offer Updated Successfully");
            navigate("/offers");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteOffer = createAsyncThunk(
    "deleteOffer",
    async ({ id, toast }, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/user/offers/${id}`);
            toast.success("Offer Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteOffers = createAsyncThunk(
    "deleteOffers",
    async ({ ids, toast }, { rejectWithValue }) => {
        try {
            const response = await API.post(`/user/offers/deleteAll`, { ids: ids });
            toast.success("Offer Deleted Successfully");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


const offerSlice = createSlice({
    name: "offers",
    initialState: {
        offer: {},
        offers: [],
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
        builder.addCase(createOffer.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createOffer.fulfilled, (state, action) => {
            state.loading = false;
            state.offer = action.payload;
        });
        builder.addCase(createOffer.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getOffers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getOffers.fulfilled, (state, action) => {
            state.loading = false;
            state.offers = action.payload.data;
        });
        builder.addCase(getOffers.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(getOffer.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getOffer.fulfilled, (state, action) => {
            state.loading = false;
            state.offer = action.payload;
        });
        builder.addCase(getOffer.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(updateOffer.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateOffer.fulfilled, (state, action) => {
            state.loading = false;
            state.offer = action.payload.data;
        });
        builder.addCase(updateOffer.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });

        builder.addCase(deleteOffer.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteOffer.fulfilled, (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.offers = state.offers.filter((item) => item._id !== id);
            }
        });
        builder.addCase(deleteOffer.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });


        builder.addCase(deleteOffers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteOffers.fulfilled, (state, action) => {
            state.loading = false;
            state.offers = action.payload;
        });
        builder.addCase(deleteOffers.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message ?? state.message;
        });
    }
});

export const { setCurrentPage } = offerSlice.actions;

export default offerSlice.reducer;