// features/csUpdatesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CsUpdateTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface CsUpdatesState {
  topics: CsUpdateTopic[];
}

const initialState: CsUpdatesState = {
  topics: [],
};

const csUpdatesSlice = createSlice({
  name: 'csUpdates',
  initialState,
  reducers: {
    addCsUpdateTopic: (state, action: PayloadAction<CsUpdateTopic>) => {
      state.topics.push(action.payload);
    },
    updateCsUpdateTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<CsUpdateTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsUpdateTopic, updateCsUpdateTopic } = csUpdatesSlice.actions;
export default csUpdatesSlice.reducer;