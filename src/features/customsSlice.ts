// features/customsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface CustomsState {
  topics: CustomTopic[];
}

const initialState: CustomsState = {
  topics: [],
};

const customsSlice = createSlice({
  name: 'customs',
  initialState,
  reducers: {
    addCustomTopic: (state, action: PayloadAction<CustomTopic>) => {
      state.topics.push(action.payload);
    },
    updateCustomTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<CustomTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCustomTopic, updateCustomTopic } = customsSlice.actions;
export default customsSlice.reducer;