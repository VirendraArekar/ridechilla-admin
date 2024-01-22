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
import offerReducer from "./features/offerSlice";
import planReducer from "./features/planSlice";
import supportReducer from "./features/supportSlice";
import settingReducer from "./features/settingSlice";
import emailSettingReducer from "./features/emailSettingSlice";
import paymentSettingReducer from "./features/paymentSettingSlice";
import fcmSettingReducer from "./features/fcmSettingSlice";
import pageReducer from "./features/pageSlice";

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
    offers: offerReducer,
    plans: planReducer,
    supports: supportReducer,
    countries: CountryReducer,
    settings: settingReducer,
    emailSettings: emailSettingReducer,
    paymentSettings: paymentSettingReducer,
    fcmSettings: fcmSettingReducer,
    pages: pageReducer,
    //  auth : AuthReducer,
  },
});