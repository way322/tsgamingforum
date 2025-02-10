// features/throwsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThrowTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface ThrowsState {
  topics: ThrowTopic[];
}

const initialState: ThrowsState = {
  topics: [],
};

const throwsSlice = createSlice({
  name: 'throws',
  initialState,
  reducers: {
    addThrowTopic: (state, action: PayloadAction<ThrowTopic>) => {
      state.topics.push(action.payload);
    },
    updateThrowTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<ThrowTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addThrowTopic, updateThrowTopic } = throwsSlice.actions;
export default throwsSlice.reducer;