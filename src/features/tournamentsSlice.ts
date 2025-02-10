// features/tournamentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TournamentTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface TournamentsState {
  topics: TournamentTopic[];
}

const initialState: TournamentsState = {
  topics: [],
};

const tournamentsSlice = createSlice({
  name: 'tournaments',
  initialState,
  reducers: {
    addTournamentTopic: (state, action: PayloadAction<TournamentTopic>) => {
      state.topics.push(action.payload);
    },
    updateTournamentTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<TournamentTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addTournamentTopic, updateTournamentTopic } = tournamentsSlice.actions;
export default tournamentsSlice.reducer;