// features/antiCheatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AntiCheatTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface AntiCheatState {
  topics: AntiCheatTopic[];
}

const initialState: AntiCheatState = {
  topics: [],
};

const antiCheatSlice = createSlice({
  name: 'antiCheat',
  initialState,
  reducers: {
    addAntiCheatTopic: (state, action: PayloadAction<AntiCheatTopic>) => {
      state.topics.push(action.payload);
    },
    updateAntiCheatTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<AntiCheatTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addAntiCheatTopic, updateAntiCheatTopic } = antiCheatSlice.actions;
export default antiCheatSlice.reducer;