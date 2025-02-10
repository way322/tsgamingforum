// features/teamFindersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TeamFinderTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface TeamFindersState {
  topics: TeamFinderTopic[];
}

const initialState: TeamFindersState = {
  topics: [],
};

const teamFindersSlice = createSlice({
  name: 'teamFinders',
  initialState,
  reducers: {
    addTeamFinderTopic: (state, action: PayloadAction<TeamFinderTopic>) => {
      state.topics.push(action.payload);
    },
    updateTeamFinderTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<TeamFinderTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addTeamFinderTopic, updateTeamFinderTopic } = teamFindersSlice.actions;
export default teamFindersSlice.reducer;