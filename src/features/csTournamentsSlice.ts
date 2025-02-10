// features/csTournamentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CsTournamentTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface CsTournamentsState {
  topics: CsTournamentTopic[];
}

const initialState: CsTournamentsState = {
  topics: [],
};

const csTournamentsSlice = createSlice({
  name: 'csTournaments',
  initialState,
  reducers: {
    addCsTournamentTopic: (state, action: PayloadAction<CsTournamentTopic>) => {
      state.topics.push(action.payload);
    },
    updateCsTournamentTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<CsTournamentTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addCsTournamentTopic, updateCsTournamentTopic } = csTournamentsSlice.actions;
export default csTournamentsSlice.reducer;