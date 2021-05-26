import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import phoneBookReducer from "./reducer";
import userAuthReducer from "../../auth/authReducer";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
  logger
];

const authPersitConfig = {
  key: "auth",
  storage,
  whitelist: ["token"]
};

const store = configureStore({
  reducer: { userAuth: persistReducer(authPersitConfig, userAuthReducer), phoneBook: phoneBookReducer },
  middleware
});

const persistor = persistStore(store);

export { store, persistor };
