// features/buildsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BuildTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface BuildsState {
  topics: BuildTopic[];
}

const initialState: BuildsState = {
  topics: [],
};

const buildsSlice = createSlice({
  name: 'builds',
  initialState,
  reducers: {
    addBuildTopic: (state, action: PayloadAction<BuildTopic>) => {
      state.topics.push(action.payload);
    },
    updateBuildTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<BuildTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addBuildTopic, updateBuildTopic } = buildsSlice.actions;
export default buildsSlice.reducer;