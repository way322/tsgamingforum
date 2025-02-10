// features/csBugsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CsBugTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface CsBugsState {
  topics: CsBugTopic[];
}

const initialState: CsBugsState = {
  topics: [],
};

const csBugsSlice = createSlice({
  name: 'csBugs',
  initialState,
  reducers: {
    addCsBugsTopic: (state, action: PayloadAction<CsBugTopic>) => {
      state.topics.push(action.payload);
    },
    updateCsBugsTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<CsBugTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsBugsTopic, updateCsBugsTopic } = csBugsSlice.actions;
export default csBugsSlice.reducer;