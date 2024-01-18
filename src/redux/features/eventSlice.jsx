import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'
import axios  from "axios";

export const createEvent = createAsyncThunk(
  "createEvent",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/events", data);
      toast.success("Added Successfully");
      navigate("/events");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getEvents = createAsyncThunk(
  "getEvents",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/user/events` + query);;
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getEvent = createAsyncThunk(
    "getEvent",
    async (eventId, { rejectWithValue }) => {
      try {
        const response = await API.get(`/user/events/${eventId}`);;
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


export const updateEvent = createAsyncThunk(
  "updateEvent",
  async ({ id, updatedData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/user/events/${id}`, updatedData);
      toast.success("Event Updated Successfully");
      navigate("/events");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "deleteEvent",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/user/events/${id}`);
      toast.success("Event Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteEvents = createAsyncThunk(
    "deleteEvents",
    async ({ ids, toast }, { rejectWithValue }) => {
      try {
        const response = await API.post(`/user/events/deleteAll`, {ids : ids});
        toast.success("Event Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const eventSlice = createSlice({
  name: "events",
  initialState: {
    event: {},
    events: [],
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
    builder.addCase(createEvent.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(createEvent.fulfilled,(state,action)=>{
        state.loading = false;
        state.event = action.payload;
    });
    builder.addCase(createEvent.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getEvents.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getEvents.fulfilled,(state,action)=>{
        state.loading = false;
        state.events = action.payload.data;
    });
    builder.addCase(getEvents.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getEvent.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getEvent.fulfilled,(state,action)=>{
        state.loading = false;
        state.event = action.payload;
    });
    builder.addCase(getEvent.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(updateEvent.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(updateEvent.fulfilled,(state,action)=>{
        state.loading = false;
        state.event = action.payload.data;
    });
    builder.addCase(updateEvent.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(deleteEvent.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteEvent.fulfilled,(state,action)=>{
        state.loading = false;
        const {
            arg: { id },
        } = action.meta;
        if (id) {
            state.events = state.roles.filter((item) => item._id !== id);
        }
    });
    builder.addCase(deleteEvent.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });


    builder.addCase(deleteEvents.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(deleteEvents.fulfilled,(state,action)=>{
        state.loading = false;
        state.events = action.payload;
    });
    builder.addCase(deleteEvents.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = eventSlice.actions;

export default eventSlice.reducer;