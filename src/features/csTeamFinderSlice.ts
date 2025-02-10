// features/csTeamFinderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CsTeamFinderTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface CsTeamFinderState {
  topics: CsTeamFinderTopic[];
}

const initialState: CsTeamFinderState = {
  topics: [],
};

const csTeamFinderSlice = createSlice({
  name: 'csTeamFinder',
  initialState,
  reducers: {
    addCsTeamFinderTopic: (state, action: PayloadAction<CsTeamFinderTopic>) => {
      state.topics.push(action.payload);
    },
    updateCsTeamFinderTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<CsTeamFinderTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsTeamFinderTopic, updateCsTeamFinderTopic } = csTeamFinderSlice.actions;
export default csTeamFinderSlice.reducer;