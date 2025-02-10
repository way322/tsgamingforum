// features/bugsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BugTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface BugsState {
  topics: BugTopic[];
}

const initialState: BugsState = {
  topics: [],
};

const bugsSlice = createSlice({
  name: 'bugs',
  initialState,
  reducers: {
    addBugsTopic: (state, action: PayloadAction<BugTopic>) => {
      state.topics.push(action.payload);
    },
    updateBugsTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<BugTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addBugsTopic, updateBugsTopic } = bugsSlice.actions;
export default bugsSlice.reducer;