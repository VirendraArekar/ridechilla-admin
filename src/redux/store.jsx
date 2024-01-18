import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import RoleReducer from "./features/roleSlice";
// import AuthReducer from "./features/authSlice";
import CountryReducer from "./features/countrySlice";
import EventReducer from "./features/eventSlice";
import ServiceReducer from "./features/serviceSlice";
import LiveReducer from "./features/liveSlice";
import NotificationReducer from "./features/notificationSlice";
import TransactionReducer from "./features/transactionSlice";
import UserPaymentReducer from "./features/userPaymentSlice";
import UserSettingReducer from "./features/userSettingSlice";
import { Users } from "react-feather";

export default configureStore({
  reducer: {
    users: UserReducer,
    roles: RoleReducer,
    events: EventReducer,
    services: ServiceReducer,
    lives: LiveReducer,
    notifications: NotificationReducer,
    transactions: TransactionReducer,
    userPayments: UserPaymentReducer,
    userSettings: UserSettingReducer,
    //  auth : AuthReducer,
    countries: CountryReducer
  },
});