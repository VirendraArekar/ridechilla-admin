import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import RoleReducer from "./features/roleSlice";
// import AuthReducer from "./features/authSlice";
import CountryReducer from "./features/countrySlice";
import EventReducer from "./features/eventSlice";
import ServiceReducer from "./features/serviceSlice";
import LiveReducer from "./features/liveSlice";

export default configureStore({
  reducer: {
    users: UserReducer,
    roles: RoleReducer,
    events: EventReducer,
    services: ServiceReducer,
    lives: LiveReducer,
    //  auth : AuthReducer,
    countries: CountryReducer
  },
});