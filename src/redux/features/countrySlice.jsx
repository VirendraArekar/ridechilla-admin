import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utility/apiInterceptor";
import qs from 'qs'

export const getCountries = createAsyncThunk(
  "getCountries",
  async (query, { rejectWithValue }) => {
    try {
      const response = await API.get(`/countries`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getStatesByCountry = createAsyncThunk(
    "getStatesByCountry",
    async (countryCode, { rejectWithValue }) => {
      try {
        const response = await API.get(`/global/get-states-by-country/${countryCode}`);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

export const getCitiesByState = createAsyncThunk(
"getCitiesByState",
async (stateCode, { rejectWithValue }) => {
    try {
    const response = await API.get(`/global/get-cities-by-state/${stateCode}`);
    return response.data;
    } catch (err) {
    return rejectWithValue(err.response.data);
    }
}
);


const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    states: [],
    cities: [],
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
    builder.addCase(getCountries.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getCountries.fulfilled,(state,action)=>{
        state.loading = false;
        state.states = [];
        state.cities = [];
        let results = [];
        if(action?.payload?.data && action?.payload?.data?.length){
            for(let i  = 0 ; i < action.payload.data.length; i++){
                results.push({
                    label : action.payload.data[i].name,
                    value : action.payload.data[i].isoCode
                })
            }
        }
        state.countries = results;
    });
    builder.addCase(getCountries.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getStatesByCountry.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getStatesByCountry.fulfilled,(state,action)=>{
        state.loading = false;
        state.cities = [];
        let results = [];
        if(action?.payload?.data && action?.payload?.data?.length){
            for(let i  = 0 ; i < action.payload.data.length; i++){
                results.push({
                    label : action.payload.data[i].name,
                    value : action.payload.data[i].isoCode
                })
            }
        }
        state.states = results;
    });
    builder.addCase(getStatesByCountry.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });

    builder.addCase(getCitiesByState.pending,(state,action)=>{
        state.loading = true;
    });
    builder.addCase(getCitiesByState.fulfilled,(state,action)=>{
        state.loading = false;
        let results = [];
        if(action?.payload?.data && action?.payload?.data?.length){
            for(let i  = 0 ; i < action.payload.data.length; i++){
                results.push({
                    label : action.payload.data[i].name,
                    value : action.payload.data[i].name
                })
            }
        }
        state.cities = results;
    });
    builder.addCase(getCitiesByState.rejected,(state,action)=>{
        state.loading = false;
        state.error = action?.payload?.message ?? state.message;
    });
  }
});

export const { setCurrentPage } = countrySlice.actions;

export default countrySlice.reducer;