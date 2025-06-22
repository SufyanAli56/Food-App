// app/lib/Store.ts
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';

// Correct store creation function
export function makeStore() {
  return configureStore({
    reducer: {
      language: languageReducer
    }
  });
}

// Correct type exports
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;