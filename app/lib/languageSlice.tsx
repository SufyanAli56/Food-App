// lib/languageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface LanguageState {
  currentLanguage: LanguageCode;
}

const initialState: LanguageState = {
  currentLanguage: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;